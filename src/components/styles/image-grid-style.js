



/**
 * Author: Tyson
 * Last Update: TODO: add date
*/

import { html } from '@polymer/lit-element';

export const ImageGridStyle = html`
<style> 
.grid-container {
  background: white;
  padding: 10px 20px 30px 20px;
  right: 0px;
  left: 0px;
}
.grid {
  display: grid;
  grid-gap: 34px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 150px;
  grid-auto-flow: row dense;
}
.item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  background: #0c9a9a;
  color: #fff;
  grid-column-start: auto;
  grid-row-start: auto;
  color: #fff;
  border-radius: 7px;
  background-size: cover;
  overflow: hidden;
  background-position: center;
  box-shadow: -2px 2px 10px 0px rgba(68, 68, 68, 0.3);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}
.item:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.12;
  transition: opacity 0.3s ease-in-out;
}
.item:hover {
  transform: scale(1.05);
}
.item:hover:after {
  opacity: 0;
}
.item--medium {
  grid-row-end: span 2;
}
.item--large {
  grid-row-end: span 3;
}
.item--full {
  grid-column-end: auto;
}
@media screen and (min-width: 768px) {
  .item--full {
    grid-column: -1;
    grid-row-end: span 2;
  }
}
.item__details {
  position: relative;
  z-index: 0;
  padding: 8px 8px 4px 8px;
  font-family: 'SerifaStd Bold';
  color: var(--app-primary-color);
  background: rgba(255,255,255,0.93);
  text-align: center;
}
.item__details:before {
  font-weight: bold;
  padding-right: 0.5em;
  font-family: 'SerifaStd Bold';
  color: var(--app-primary-color);
}

@media (max-width: 500px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 120px;
  }
}

.grid-container {
  background: white;
  padding: 20px 20px 40px 20px;
  right: 0px;
  left: 0px;
}
.shade {
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  background: rgba(0,0,0,0);
  opacity: 0;
  visibility: hidden;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.shade[active] {
  visibility: visible;
  background: rgba(0,0,0,0.8);
  opacity: 1;
  z-index: 10;
}
</style>`