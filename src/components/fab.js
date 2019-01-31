
/**
 * Author: Tyson
 * Last Update: 31/12/2018
*/

import { LitElement, html } from '@polymer/lit-element';

import { Ripple } from '@material/mwc-ripple';
//import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
//import { store } from '../store.js';

// connect(store)(LitElement)

// These are the actions needed by this element.
// import {
//
// } from '../actions/app.js';

import { heavyShadow, lightShadow } from './styles/box-shadow.js';

class FabLong extends LitElement {
  render() {console.log(this.active)
    // Anything that's related to rendering should be done in here.
    return html`
    <style>
    div {
      z-index: 2;
      font-family: 'SerifaStd Bold';
      position: fixed;
      cursor: pointer;
      right: 15px;
      bottom: -100px;
      padding: 12px 22px 5px 22px;
      border-radius: 50px;
      font-size: 20px;
      background-color: var(--app-third-color);
      color: var(--app-light-text-color);
      transition: 0.3s;
      ${lightShadow}
    }
    div:hover {
      background: #3af;
    }
    div[active] {
      bottom: 15px;
    }

    @media (min-width: 500px) {
      div {
        padding: 16px 26px 10px 26px;
        right: 20px; 
      }
      div[active] {
        bottom: 20px;
      }
    }
    </style>
    <div class="ripple" ?active="${this.active}">
      <slot></slot>
    </div>
    `;
  }

  static get properties() {
    return {
      active: { type: Boolean }
    }
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

window.customElements.define('fab-long', FabLong);
