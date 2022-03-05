import { App } from './app/app.dative';

import './style.css';
// @ts-ignore
new App({
  el: '#app',
  props: {
    name: 'DativeTs',
  },
});
