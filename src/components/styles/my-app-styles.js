
import { html } from '@polymer/lit-element';


export const MyAppStyles = html`
  <style>
    :host {
      --app-drawer-width: 256px;
      display: block;

      --app-primary-color: rgb(38, 0, 105);
      --app-secondary-color: #293237;
      --app-third-color: rgba(20, 130, 240, 1);
      --app-background-color: white;

      --app-highlight-color: #f02;
      --app-dark-text-color: #222;
      --app-light-text-color: white;
      --app-section-even-color: #fcfcfc;
      --app-section-odd-color: white;


      --app-header-background-color: white;
      --app-header-text-color: var(--app-dark-text-color);
      --app-header-selected-color: var(--app-highlight-color);

      --app-drawer-background-color: var(--app-secondary-color);
      --app-drawer-text-color: var(--app-light-text-color);
      --app-drawer-selected-color: #78909C;
    }

    app-header {
      position: fixed;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      background-color: var(--app-header-background-color);
      color: var(--app-header-text-color);
      border-bottom: 1px solid #eee;
    }

    .logo-pic {
      height: 40px;
      width: 40px;
      margin: 0px 4px 10px -10px;
    }

    .toolbar-top {
      background-color: var(--app-header-background-color);
      width: 100%;
      justify-content: space-between;
    }

    .toolbar-top > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: 10px;
    }

    [main-title] {
      font-family: 'SerifaStd Black';
      color: var(--app-primary-color);
      font-size: 30px;
      /* In the narrow layout, the toolbar is offset by the width of the
      drawer button, and the text looks not centered. Add a padding to
      match that button */
    }

    .toolbar-list {
      display: none;
    }

    .toolbar-list-footer {
      display: block; 
      background: white;
      left: 0px;
      right: 0px;
      width: 100%;
      display: flex;
      justify-content: center;
      /* padding: 10px;
      margin: -10px; */
    }

    .toolbar-list > a {
      display: inline-block;
      color: var(--app-header-text-color);
      text-decoration: none;
      line-height: 30px;
      padding: 4px 24px;
      font-size: 20px;
      padding-top: 5px;
    }

    .toolbar-list > a[selected] {
      color: var(--app-header-selected-color);
      border-bottom: 4px solid var(--app-header-selected-color);
    }

    .menu-btn {
      background: none;
      border: none;
      fill: var(--app-header-text-color);
      cursor: pointer;
      height: 50px;
      width: 50px;
      margin: 4px 22px 0px 0px;
    }
    
    app-drawer {
      z-index: 3;
    }

    .drawer-list {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 24px;
      background: white;
      position: relative;
      text-align: center;
    }

    .drawer-list > a {
      display: block;
      text-decoration: none;
      color: var(--app-header-text-color);
      font-size: 24px;  
      line-height: 54px;
      padding: 0 24px;
    }

    .drawer-list > a[selected] {
      font-weight: bold;
      color: var(--app-header-selected-color);
    }

    /* Workaround for IE11 displaying <main> as inline */
    main {
      display: block;
    }

    .main-content {
      padding-top: 64px;
      min-height: 100vh;
    }

    footer {
      padding: 14px;
      background: var(--app-drawer-background-color);
      color: var(--app-drawer-text-color);
      text-align: center;
    }

    /* Wide layout: when the viewport width is bigger than 460px, layout
    changes to a wide layout. */
    @media (min-width: 500px) {
      .toolbar-list {
        display: block;
      }

      .toolbar-list-footer {
        display: flex;
      }

      .toolbar-top {
        justify-content: center;
        padding: 6px;
      }

      .menu-btn {
        display: none;
      }

      .main-content {
        padding-top: 107px;
      }

      .logo-pic {
        height: 50px;
        width: 50px;
        margin-bottom: 14px;
        margin-left: -40px;
      }

      /* The drawer button isn't shown in the wide layout, so we don't
      need to offset the title */
      [main-title] {
        padding-right: 0px;
        font-size: 36px;
      }
    }
  </style>
`;