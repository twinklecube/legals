import { component$ } from "@builder.io/qwik";
import CookieOverviewItem from "~/components/cookie-overview-item/CookieOverviewItem";
import { CategoryTitle } from "~/routes/cookieuebersicht/styles.css";

export default component$(() => {
  return (
    <div>
      <p class="headline">Cookies und gespeicherte Daten</p>
      <p>An dieser Stelle finden Sie in einer Übersicht die gespeicherten Daten dieser Website in Cookies oder anderen Speicherorten.</p>

      <CategoryTitle>Notwendig</CategoryTitle>
      <CookieOverviewItem
        cookie='asdsa'
        duration='180 days'
        description='CookieYes sets this cookie as a unique identifier for visitors according to their consent.'
      />
      <CookieOverviewItem
        cookie='asdsa'
        duration='	1 year'
        description='This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks.'
      />

      <CategoryTitle>Funktionale</CategoryTitle>

      <CategoryTitle>Analyse</CategoryTitle>

      <CategoryTitle>Werbe</CategoryTitle>

    </div>
  );
});