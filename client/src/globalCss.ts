import { injectGlobal } from 'emotion';
import { COLOR } from 'src/constants';

export default function initGlobalCss(): void {
  // tslint:disable-next-line:no-unused-expression
  injectGlobal`
    html, body {
      background-color: ${COLOR.GRAY} !important;
      height: 100%;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    html {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  `;
}
