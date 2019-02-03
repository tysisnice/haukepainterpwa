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

class AboutUsView extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
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
        -webkit-box-shadow: 0px 0px 110px 125px rgba(255,255,255,1);
        -moz-box-shadow: 0px 0px 150px 125px rgba(255,255,255,1);
        box-shadow: 0px 0px 150px 125px rgba(255,255,255,1);
        background: rgba(255,255,255,1);
        border-radius: 6px;
      }
      .title-heading {
        font-size: 50px;
        font-family: 'SerifaStd Black';
        color: var(--app-primary-color);
      }
      </style>

      <app-box effects="parallax-background">
        <div slot="background">
          <img src="media/images/pics/ourhousereal.jpg" alt="house">
        </div>
        <div class="app-box-foreground">
          <h1 class="white-shadow title-heading">About Us</h1>
        </div>
      </app-box>
      <section>
        <h2>Our Roots</h2>
        <p>Stacey Hauke and his wife Sheridan have been in the painting game for over 30 years, and formed their humble business in their hometown of <strong>Bendigo</strong>. As the years went on Stacey and Sherry continued building their reputation as one of the <strong>best and most reputable</strong> painting businesses in central Victoria, whilst enjoying raising a young family. </p>
        
        <p>Having worked on scores of projects including the Shamrock hotel, old Bendigonian heritage buildings, and of course peoples personal homes, Stace and Sherry have continually strived in building their business, <strong>working hard</strong> brightening peoples days and having fun at the same time!</p>
      
        <div class="content-image">
          <img src="media/images/pics/staceyoyo.jpg" alt="Stacey">
          Stacey Hauke, owner and operator
        </div>
      </section>
      

      <section>
        <h2>Our Mission</h2>
        <p>Now having moved house closer to the city, Stace and Sherry are continuing to work hard and keep up the same <strong>reliable, honest, and professional</strong> character that they have been known for in central Victoria. Coming to Gisborne, they absolutely love the change in scenery and are eager to work hard to support the local community, providing a <strong>Professional Painting Service</strong> for all there as well as for those in the surrounding areas, Macedon ranges, Sunbury and others included. </p>
      </section>
      
      <app-box effects="parallax-background" style="height: 200px;">
        <div slot="background" style="height: 500px; margin-top: -100px;">
          <img src="media/images/pics/shamrock.jpg">
        </div>
        <div class="app-box-foreground" style="height: 200px;">
          <h1 class="white-shadow title-heading" style="font-size: 40px;">Professionally</h1>
        </div>
      </app-box>

      <section>
        <p>Over the last 30 years or so, we have developed the technical and managerial skills necessary to handle <strong>any painting project.</strong> We've worked on everything, from a few touch ups in someones home to working on huge commercial contracts. In Bendigo we used to run a huge team of guys working on some of the biggest buildings in the city, as well as on huge project builder and government contract. </p>
        <p>But over the last decade or so we have been scaling down to spend more time with our family and friends, and also to give <strong>greater attention to our clients needs</strong>, giving them a more personal experience. From our experience, the best way to stay in business is through giving our clients a good service, so thats what we focus on more than anything else. We want to do the same for you, to give you a high quality service and take care of your painting needs!</p>
        <ul>
          <li>30 years experience</li>
          <li>Fully certified and qualified</li>
          <li>Residential, Commercial, Industrial</li>
          <li>Interiors and Exteriors</li>
          <li>High quality paints and finish</li>
          <li>Excellent customer service</li>
        </ul>
        <p>We use only the highest quality paints from Dulux and others, and we take pride in applying a high quality finish that looks good and last! <a href="gallery">Check out our gallery here, </a>and get in contact with us whenever you want for a free quote!</p>
      </section>
      <contact-us-section margin="-190px"></contact-us-section>
    `;
  }
}

window.customElements.define('about-us-view', AboutUsView);
