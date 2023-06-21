import { component$, Slot, useStyles$ } from '@builder.io/qwik';

import styles from './styles.css?inline';
import Header from '~/components/header/header';
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  useStyles$(styles);
  return (
      <main class="wrapper">
        <div class="wrapper-inner">
          <a href="https://twinklecube.com">
            <Header />
          </a>
          <Slot />
        </div>
        <div class="footer">
          <div class="links">
            <a href="https://twinklecube.com">Home</a>
            <Link href="https://twinklecube.com/legal/impressum">Impressum</Link>
            <Link href="https://twinklecube.com/legal/datenschutz">Datenschutz</Link>
            <Link href="https://twinklecube.com/legal/cookieuebersicht">Cookieübersicht</Link>
          </div>
          <div class="copyright">2023 Twinklecube. Alle Rechte vorbehalten.</div>
        </div>
      </main>
  );
});
