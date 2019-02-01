



/**
 * Author: Tyson
 * Last Update: 14/12/2018
*/

import { LitElement, html } from '@polymer/lit-element';
//import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';
import { updateInfoInView } from '../actions/app.js';


// These are the elements needed by this element.
import '@polymer/app-layout/app-box/app-box.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';

import './contact-buttons.js';
import { lightShadow } from './styles/box-shadow.js';


class ContactUsSection extends LitElement {
  render() {
    // Anything that's related to rendering should be done in here.
    return html`
    <style>
      :host {
        position: relative;
      }
      app-box {
        z-index: 0; 
      } 
      .background {
        height: 900px;
        width: 100%;
        background: var(--app-secondary-color);
      }
      .background > img {
        position: relative;
        left: 40%;
        transform: translate(-40%);
        height: 570px;
        margin-top: 0px;
      }

      .app-box-foreground {
        padding: 10px;
        height: 500px;
        left: 0px;
        right: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(250,250,250,0.5);
        text-align: center;
      }
      .app-box-foreground > div {
        background: rgba(255,255,255,1);
        width: 400px;
        border-radius: 20px;
        -webkit-box-shadow: 0px 0px 110px 80px rgba(255,255,255,1);
        -moz-box-shadow: 0px 0px 110px 80px rgba(255,255,255,1);
        box-shadow: 0px 0px 110px 80px rgba(255,255,255,1);
      }

    </style>
    
    <app-box >
      <div slot="background" class="background">
        <img src="media/images/pics/bedroom.jpg">
      </div>
      <div class="app-box-foreground" style="z-index: 2000;">
        <div style="text-align: center;">
          <contact-buttons nospace></contact-buttons>
        </div>
      </div>
    </app-box>
    `;
  }

  static get properties() {
    return {
      margin: { type: String }
    }
  }

  constructor() {
    super();
    this.addScrollEvents();
    this.margin = '-76px';
  }

  // firstUpdated() {
  // }

  // updated(changedProps) {
  // }
  
  // stateChanged(state) {
  // }
  
  addScrollEvents() {
    var currentlyInView;
    var winHeight = window.innerHeight;
    const checkPosition = () => {
      var posFromTop = this.getBoundingClientRect().top;
      var nowInView = (posFromTop - winHeight <= -200);
      if (currentlyInView !== nowInView) {
        currentlyInView = nowInView;
        store.dispatch(updateInfoInView(currentlyInView));
      }
    }
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', () => { 
      winHeight = window.innerHeight;
      checkPosition(); 
    });
    checkPosition();
  }
}

window.customElements.define('contact-us-section', ContactUsSection);
