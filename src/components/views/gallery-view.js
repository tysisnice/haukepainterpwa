/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

import '@polymer/app-layout/app-box/app-box.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';


import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../../store.js';
import content from '../../reducers/content.js';

store.addReducers({
  content
});


// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-view-styles.js';
import {ImageGridStyle} from '../styles/image-grid-style.js';
//import { ButtonSharedStyles } from './styles/button-shared-styles.js';
import '../contact-us-section.js';


class GalleryView extends connect(store)(PageViewElement) {
  render() {
    return html`
      ${SharedStyles}
      ${ImageGridStyle}
      <style>
      app-box {
        height: 400px; 
      } 
      app-box > div {
        height: 800px;
      }
      app-box > div > img {
        height: 500px; 
      }

      .app-box-foreground {
        height: 400px;
        background: rgba(250,250,250,0.6);
      }
      .white-shadow {
        -webkit-box-shadow: 0px 0px 150px 100px rgba(255,255,255,1);
        -moz-box-shadow: 0px 0px 150px 100px rgba(255,255,255,1);
        box-shadow: 0px 0px 150px 100px rgba(255,255,255,1);
        background: rgba(255,255,255,1);
        border-radius: 6px;
      }
      .title-heading {
        font-size: 50px;
        font-family: 'SerifaStd Black';
        color: var(--app-primary-color);
      }
      .shade > img {
        max-width: 95%;
        max-height: 90%;
        border-radius: 7px;
      }
      p.explainer {
        padding: 10px 10px 20px 10px;
        font-size: 20px;
      }
      </style>

      <app-box effects="parallax-background">
        <div slot="background">
          <img src="media/images/pics/shamrock.jpg" alt="gallery image">
        </div>
        <div class="app-box-foreground">
          <h1 class="white-shadow title-heading">Gallery</h1>
        </div>
      </app-box>
      <section style="padding-top: 30px;" >
        <h2>Our Work Projects</h2>
        <p>Check out some of houses and buildings that we've painted. We're adding more and more pictures as time goes on. Scroll through and have a look at what we've uploaded so far.</p>
      </section>

      <div class="grid-container">
        <div class="grid" style="right: 0; left: 0;">
          ${this.entries.map( (entry) => {
            return html`<div 
                @click="${() => this.openImage(entry)}"
                class="item item--${entry.size}" 
                style="background-image: url('${entry.src}');"
              >
                ${entry.text ? html`<div class="item__details">${entry.text}</div>` : ''}
              </div>
            `})
          }
        </div>
      </div>
      <section style="background: white;">
        <p class="explainer">Thanks for having a look! We pride ourselves on our work, and on helping people brighten up their homes and workspaces. <a href="about-us">Click here to learn more about us</a>, or get in touch with us right away and book us in!</p>
      </section>    
      
      <div class="shade" ?active="${this._overlayOpen}" @click="${this.closeOverlay}">
        <img src="${this._openEntry.src}">
        <h3 style="color: white;">${this._openEntry.text}</h3>
      </div>

      <contact-us-section></contact-us-section>
    `;
  }

  static get properties() {
    return {
      entries: { type: Array },
      _overlayOpen: {type: Boolean},
      _openEntry: {type: Object}
    }
  }

  constructor() {
    super();
    this._overlayOpen = false;
    this.entries = [];
    this._openEntry = {};
  }

  openImage(entry) {
    console.log(entry)
    this._openEntry = entry;
    this._overlayOpen = true;
  }
  closeOverlay() {
    this._overlayOpen = false;
  }
  
  stateChanged(state) {
    this.entries = state.content.imageGridEntries;
  }
}

window.customElements.define('gallery-view', GalleryView);
