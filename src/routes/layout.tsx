import { component$, Slot, useStyles$ } from '@builder.io/qwik';

import styles from './styles.css?inline';
import Header from '~/components/header/header';

export default component$(() => {
  useStyles$(styles);
  return (
      <main class="wrapper">
        <div class="wrapper-inner">
          <Header />
          <Slot />
        </div>
        <div class="footer">footer</div>
      </main>
  );
});
