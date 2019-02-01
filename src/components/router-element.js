



/**
 * Author: Tyson
 * Last Update: 14/12/2018
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


import './views/home-view.js';
import './views/my-view404.js';
import './views/about-us-view.js';
import './views/gallery-view.js';

// import { Router } from '@vaadin/router';

// const div = document.createElement('div');
// const router = new Router(div);
// router.setRoutes([
//   {path: '/', component: 'home-view'},
//   {path: '/home', component: 'home-view'},
//   {path: '/gallery', component: 'gallery-view'},
//   {path: '/about-us', component: 'about-us-view'},
//   {path: '(.*)', component: 'my-view404'}
// ]);

// window.div = div;
// console.log(div)

class RouterElement extends LitElement {
  render() {
    // Anything that's related to rendering should be done in here.
    return html`
    <style>
    .page {
      display: none;
    }
    .page[active] {
      display: block;   
    }
    </style>
    <home-view class="page" ?active="${this.page === 'home'}"></home-view>
    <about-us-view class="page" ?active="${this.page === 'about-us'}"></about-us-view>
    <gallery-view class="page" ?active="${this.page === 'gallery'}"></gallery-view>
    <my-view404 class="page" ?active="${this.page === 'view404'}"></my-view404>
    `;
  }

  // constructor() {
  //   super();
  // }

  static get properties() {
    return {
      page: { type: String }
    }
  }
}

// old render


window.customElements.define('router-element', RouterElement);
