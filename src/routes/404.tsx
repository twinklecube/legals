import { component$, useStyles$ } from "@builder.io/qwik";
import styles from './styles.css?inline';
export default component$(() => {
  useStyles$(styles);
  return (
    <div class="not-found">
      <h1> - 404 - </h1>
    </div>
  );
});
