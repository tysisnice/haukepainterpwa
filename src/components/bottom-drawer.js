
/**
 * Author: Tyson
 * Last Update: 31/12/2018
*/

import { LitElement, html } from '@polymer/lit-element';
//import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
//import { store } from '../store.js';

// connect(store)(LitElement)

// These are the actions needed by this element.
// import {
//
// } from '../actions/app.js';

// These are the elements needed by this element.
// import '@polymer/app-layout/app-drawer/app-drawer.js';
// import '@polymer/app-layout/app-header/app-header.js';
// import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
// import '@polymer/app-layout/app-toolbar/app-toolbar.js';

class BottomDrawer extends LitElement {
  render() {
    return html`
    <style>
      .drawer {
        max-height: 95%;
        overflow: scroll;
        z-index: 2;
        display: block;
        position: fixed;
        bottom: -20px;
        right: 0px;
        left: 0px;
        padding: 15px 15px 15px 15px;
        border-radius: 18px;
        text-align: center;
        /* border: 5px solid var(--app-third-color); */
        background-color: var(--app-background-color);
        will-change: transform;
        transform: translate3d(0, 100%, 0);
        transition-property: visibility, transform;
        transition-duration: 0.3s;
        visibility: hidden;
        -webkit-box-shadow: 0px 0px 26px -2px rgba(0,0,0,0.7);
        -moz-box-shadow: 0px 0px 26px -2px rgba(0,0,0,0.7);
        box-shadow: 0px 0px 26px -2px rgba(0,0,0,0.7);
      }
      .drawer[active] {
        visibility: visible;
        transform: translate3d(0, 0, 0);
      }

      .shade {
        position: fixed;
        bottom: 0;
        top: 0;
        right: 0;
        left: 0;
        z-index: 0;
        background: black;
        opacity: 0;
        visibility: hidden;
        transition: 0.4s;
      }
      .shade[active] {
        visibility: visible;
        opacity: 0.2;
      }

      @media (min-width: 650px) {
        .drawer[small] {
          max-width: 720px;
          left: auto;
          padding: 15px 20px 20px 20px;
        }
      }
      </style>

    <div class="shade" @click="${this.exit}" ?active="${this.active}"></div>

    <div class="drawer" ?small="${this.small}" ?active="${this.active}">
      <slot></slot>
    </div>
    `;
  }

  static get properties() {
    return {
      active: { type: Boolean },
      small: { type: Boolean }
    }
  }

  exit() {
    this.dispatchEvent(new CustomEvent('on-exit'));
    this.active = false;
  }

  // constructor() {
  //   super();
  // }

  // firstUpdated() {
  // }

  // updated(changedProps) {
  // }
  
  // stateChanged(state) {
  // }
}

window.customElements.define('bottom-drawer', BottomDrawer);
