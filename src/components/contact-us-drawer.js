
/**
 * Author: Tyson
 * Last Update: 14/12/2018
*/

import { LitElement, html } from '@polymer/lit-element';

import { store } from '../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

import './contact-buttons.js';

// This element is connected to the Redux store.

// 

// These are the actions needed by this element.
// import {
//
// } from '../actions/app.js';

import './fab.js';
import './bottom-drawer.js';

class ContactUsDrawer extends connect(store)(LitElement) {
  render() {
    const active = this._displayAll && this._drawerOpen;
    // Anything that's related to rendering should be done in here.
    return html`
    <fab-long ?active="${this._displayAll}" @click="${this._toggleContactDrawer}">
      Contact us
    </fab-long>
    <bottom-drawer small ?active="${active}" @on-exit="${this._toggleContactDrawer}">
      <contact-buttons></contact-buttons>
      <div style="height: 35px;"></div>
    </bottom-drawer>
    `;
  }

  static get properties() {
    return {
      _drawerOpen: { type: Boolean },
      _displayAll: { type: Boolean }
    }
  }

  constructor() {
    super();
    this._drawerOpen = false;
    this._displayAll = true;
  }

  _toggleContactDrawer() {
    this._drawerOpen = !this._drawerOpen;
  }

  stateChanged({ app }) {
    this._displayAll = !app.contactInfoInView;
  }
}

window.customElements.define('contact-us-drawer', ContactUsDrawer);
