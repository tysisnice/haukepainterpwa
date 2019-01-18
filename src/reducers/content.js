/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import {
  UPDATE_GRID_ENTRIES
} from '../actions/content.js';


const src = 'media/images/pics/';

const INITIAL_STATE = {
  imageGridEntries: [
    {src: src+'house2.jpg', text: 'Beautiful Suburban Home', size: 'large'},
    {src: src+'ourhouse3.jpg', text: 'Living room interior', size: 'medium'},
    {src: src+'ourhousereal.jpg', text: 'Classy country home', size: 'small'},
    {src: src+'shamrock.jpg', text: 'The Shamrock Hotel in Bendigo', size: 'large'},
    {src: src+'newhouse.jpg', text: 'Home on a hill in Gisborne', size: 'medium'},
    {src: src+'shamrock-side.jpg', text: 'Side view of the Shamrock', size: 'medium'},
    {src: src+'ourhouse2.jpg', text: 'Master Bedroom freshly painted', size: 'large'},
    {src: src+'iga.jpg', text: 'IGA building in Strathfieldsaye', size: 'medium'},
    {src: src+'house4b.jpg', text: 'Industrial shed before...', size: 'medium'},
    {src: src+'house4.jpg', text: '...Industrial shed after', size: 'medium'}
  ]
};

const content = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_GRID_ENTRIES:
      return {
        ...state,
        imageGridEntries: action.imageGridEntries
      };
    default:
      return state;
  }
};

export default content;
