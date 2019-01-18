/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerState
} from '../actions/app.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

import { menuIcon } from './my-icons.js';
import './snack-bar.js';
import './contact-us-drawer.js';
import './router-element.js';



import { MyAppStyles } from './styles/my-app-styles.js';

class MyApp extends connect(store)(LitElement) {
  render() {
    // Anything that's related to rendering should be done in here.
    return html`
    ${MyAppStyles}
    <!-- Header -->
    <app-header condenses reveals effects="waterfall">
      <app-toolbar class="toolbar-top">
        <div>
          <img src="media/images/pics/paintbrush.jpg" class="logo-pic"/>
          <div main-title>${this.appTitle}</div>
        </div>
        <button class="menu-btn" title="Menu" @click="${this._menuButtonClicked}">${menuIcon}</button>
      </app-toolbar>

      <!-- This gets hidden on a small screen-->
      <nav class="toolbar-list">
        <a ?selected="${this._page === 'home'}" href="/home">Home</a>
        <a ?selected="${this._page === 'about-us'}" href="/about-us">About Us</a>
        <a ?selected="${this._page === 'gallery'}" href="/gallery">Gallery</a>
      </nav>
    </app-header>

    <!-- Drawer content -->
    <app-drawer .opened="${this._drawerOpened}" align="end"
        @opened-changed="${this._drawerOpenedChanged}">
      <nav class="drawer-list">
        <a ?selected="${this._page === 'home'}" href="/home">Home</a>
        <a ?selected="${this._page === 'about-us'}" href="/about-us">About Us</a>
        <a ?selected="${this._page === 'gallery'}" href="/gallery">Gallery</a>
      </nav>
    </app-drawer>

    

    <div />

    <!-- Main content -->
    <main role="main" class="main-content">
      <router-element page="${this._page}"></router-element>
    </main>
    
    <contact-us-drawer></contact-us-drawer>

    <nav class="toolbar-list toolbar-list-footer">
      <a ?selected="${this._page === 'home'}" href="/home">Home</a>
      <a ?selected="${this._page === 'about-us'}" href="/about-us">About Us</a>
      <a ?selected="${this._page === 'gallery'}" href="/gallery">Gallery</a>
    </nav>
    <footer>
      <h3>Currently serving the Macedon ranges, Sunbury, Gisborne, Melton and others</h3>
      <p>Many thanks from the Hauke team</p>
    </footer>

    <snack-bar ?active="${this._snackbarOpened}">
        You are now ${this._offline ? 'offline' : 'online'}.</snack-bar>
    `;
  }

  static get properties() {
    return {
      appTitle: { type: String },
      _page: { type: String },
      _drawerOpened: { type: Boolean },
      _snackbarOpened: { type: Boolean },
      _offline: { type: Boolean }
    }
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  firstUpdated() {
    installRouter((location) => store.dispatch(navigate(decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 500px)`,
        () => store.dispatch(updateDrawerState(false)));
  }

  updated(changedProps) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
    }
  }

  _menuButtonClicked() {
    store.dispatch(updateDrawerState(true));
  }

  _drawerOpenedChanged(e) {
    store.dispatch(updateDrawerState(e.target.opened));
  }

  stateChanged(state) {
    this._page = state.app.page;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
  }
}

window.customElements.define('my-app', MyApp);
