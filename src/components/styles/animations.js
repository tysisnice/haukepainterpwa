

export const enterSlideUp = `
text-align: center;
will-change: transform;
transform: translate3d(0, 100%, 0);
transition-property: visibility, transform;
transition-duration: 0.3s;
visibility: hidden;`;

export const enterSlideUpActive = `
visibility: visible;
transform: translate3d(0, 0, 0);`;