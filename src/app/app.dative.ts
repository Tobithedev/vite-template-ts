import Dative from 'dativejs';
import { connect } from 'dytejs';
import store from '../store';

export let App = Dative.extend({
  use: [store],
  animate: {
    fadein({ animate, delay, duration }) {
      animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          delay,
          duration,
          easing: 'ease',
        }
      );
    },
  },
  props: {
    name: String,
  } as {
    name: StringConstructor;
  },
  template: `
      <div @fadein="3000, 5">
         <h1>Hello {{name}} + {{$store.message}} + Vite!</h1>
         <a href="https://dativejs.js.org/guide/index.html"   target="_blank">Documentation</a>
      </div>
    `,
  // @ts-ignore
  onmounted(): void {
    connect()(this);
  },
});
