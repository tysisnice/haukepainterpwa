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

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-view-styles.js';
//import { ButtonSharedStyles } from './styles/button-shared-styles.js';
import '../contact-us-section.js';

class Home extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <style>
        p {
          font-size: 20px;
        }
      </style>

      <app-box effects="parallax-background">
        <div slot="background">
          <img src="media/images/pics/2_brushes1.jpg" alt="splash">
        </div>
        <div class="app-box-foreground">
          <div style="text-align: center;">
            <img src="media/images/pics/logobig.jpg" alt="SS and SL Hauke" width="330px;">
            <h1>Painters in Gisborne</h1>
          </div>
        </div>
      </app-box>
      <section>
        <h2>Need a Painter? We can help</h2>
        <p>Need for a decent, honest painter without the crap? With over 30 years of professional experience and many happy clients, Hauke Painters might just be able to help you out! Whatever it is you need painted, we'll do it <strong>efficiently, at high quality, for a reasonable price!</strong></p>
      </section>
      

      <section>
        <h2>No job is too big or too small</h2>
        <p>Whether it be commercial, industrial, or your very own home, we'll paint it. We're both certified and well equiped to handle projects of any scale, and we always go the extra mile in order to give our clients exactly the kind of finish they need. We do:</p>
        <ul>
          <li>Comercial and Industrial facilities</li>
          <li>New and old Homes</li>
          <li>Interiors and Exteriors</li>
          <li>Painting maintenance contracts</li>
          <li>High quality paints and finish</li>
        </ul>
        <p>Feel free to check out what work we've done <a href="gallery">over at our gallery</a></p>
      </section>
      
      <section>
        <h2>Honest, Reliable, Reasonable</h2>
        <p>Over the last 30 years of serving Victoria, Stacey Hauke and his team has earned a reputation for being <strong>efficient, honest, </strong> and <strong>easy to deal with</strong>. We pride ourselves on good communication and meeting the personal needs of our customers, as well as doing a top job!</p>  
        <p>Now serving the Macedon Ranges region including Gisborne, Sunbury, and others, Stacey and his team will provide you a <strong>high quality finish</strong> with no fuss! Contact us anytime! <a href="about-us">Learn more about us and our story</a></p>
        
      </section>
      <contact-us-section></contact-us-section>
    `;
  }
}

window.customElements.define('home-view', Home);
