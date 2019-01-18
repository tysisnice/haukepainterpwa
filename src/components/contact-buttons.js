



/**
 * Author: Tyson
 * Last Update: 14/12/2018
*/

import { LitElement, html } from '@polymer/lit-element';
import { Icon } from '@material/mwc-icon';
//import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
//import { store } from '../store.js';

// connect(store)(LitElement)

// These are the actions needed by this element.
// import {
//
// } from '../actions/app.js';

import {ButtonSharedStyles} from './styles/button-shared-styles.js';

class ContactButtons extends LitElement {
  render() {
    // Anything that's related to rendering should be done in here.
    return html`
    ${ButtonSharedStyles}
    <style>
      :host {
        display: flex;
        right: 0;
        left: 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      div {
        left: 0;
        right: 0;
        padding: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        font-size: 18px;
        margin: 0px 6px 0px 6px;
      }
      .line {
        width: 280px;
        margin: 3px;
      }
      .info {
        text-align: center;
        margin: 0px;
        font-size: 24px;
      }
      .filler {
        width: 0px;
        height: 0px;
      }
      .margin8px {
        margin: 8px;
      }
      .btn {
        width: 90px;
      }
      h2 {
        font-family: 'SerifaStd Black';
        color: var(--app-primary-color);
        font-size: 26px;
        margin-bottom: 5px;
      }

      @media (min-width: 500px) {
        .filler[active] {
          width: 20px;
        }
      }
    </style>
    <h2>Contact us for a Free Quote!</h2>
    <div class="line">
      <mwc-icon style="color: blue;">call</mwc-icon><div class='margin8px;'></div>
      <p class="info">0418-590-565</p>
    </div>
    <div class="filler" ?active="${!this.nospace}"></div>
    <div class="line">
      <mwc-icon style="color: red;">email</mwc-icon><div class='margin8px;'></div>
      <p class="info">stacehauke@gmail.com</p>
    </div>
    <div class='margin8px;'></div>
    <div class="line">
      <a href="tel:+61-418-590-565" target="_blank"><div class="btn">
        <mwc-icon>call</mwc-icon> <p>Call</p>
      </div></a>
      <a href="mailto:stacehauke.com" target="_blank"><div class="btn">
        <mwc-icon>email</mwc-icon> <p>Email</p>
      </div></a>
    </div>
    `;
  }

  static get properties() {
    return {
      nospace: {type: Boolean}
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

window.customElements.define('contact-buttons', ContactButtons);
