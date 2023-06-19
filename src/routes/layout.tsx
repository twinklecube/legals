import { component$, Slot, useStyles$ } from '@builder.io/qwik';

import styles from './styles.css?inline';
import Header from '~/components/header/header';
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  useStyles$(styles);
  return (
      <main class="wrapper">
        <div class="wrapper-inner">
          <a href="/">
            <Header />
          </a>
          <Slot />
        </div>
        <div class="footer">
          <a href="/">Home</a>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">datenschutz</Link>
        </div>
      </main>
  );
});
