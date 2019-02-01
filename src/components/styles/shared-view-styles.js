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

export const SharedStyles = html`
<style>
  :host {
    display: block;
    box-sizing: border-box;
  }

  a {
    color: var(--app-highlight-color);
    font-weight: bold;
    text-decoration: none;
  }

  section {
    padding: 50px 24px 50px 24px;
    background: var(--app-section-odd-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  section > * {
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  p {
    font-size: 18px;
  }

  h2 {
    font-size: 24px;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  .content-image {
    width: 100%;
    max-width: 400px;
    text-align: center;
    color: #555;
    margin: 20px;
  }
  .content-image > img {
    width: 100%;
    max-width: 400px;
  }

  @media (min-width: 460px) {
    h2 {
      font-size: 26px;
    }
  }

  /* .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  } */

  app-box {
    height: 500px; 
    width: 100%; 
    z-index: -1; 
    display: flex; 
    justify-content: center;
    align-items: center;
  } 
  app-box > div {
    height: 1000px;
  }
  app-box > div > img {
    width: auto; 
    min-width: 100%;
    height: 800px; 
    margin: -200px auto 0px auto;
    position: relative; 
    display: inline-block; 
    left: 50%;
    transform: translate(-50%);
  }

  li {
    font-weight: bold;
    font-size: 20px;
  }

  .app-box-foreground {
    height: 500px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(250,250,250,0.5);
    text-align: center;
  }
  .app-box-foreground > div > img {
    -webkit-box-shadow: 0px 0px 200px 150px rgba(255,255,255,1);
    -moz-box-shadow: 0px 0px 200px 150px rgba(255,255,255,1);
    box-shadow: 0px 0px 200px 150px rgba(255,255,255,1);
    border-radius: 4px;
    margin: 20px 20px 0px 0px;
  }
  .app-box-foreground-bottom-right {
    height: 300px;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .white-shadow {
    -webkit-box-shadow: 0px 0px 40px 35px rgba(255,255,255,0.8);
    -moz-box-shadow: 0px 0px 40px 35px rgba(255,255,255,0.8);
    box-shadow: 0px 0px 40px 35px rgba(255,255,255,0.8);
    background: rgba(255,255,255,0.8);
    margin: 20px;
    font-size: 24px;
    color: #181818;
  }
</style>
`;
