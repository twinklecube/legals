import { component$ } from "@builder.io/qwik";
import CookieOverviewItem from "~/components/cookie-overview-item/CookieOverviewItem";
import { CategoryTitle, NoCookies } from "~/routes/cookieuebersicht/styles.css";

export default component$(() => {
  return (
    <div>
      <p class="headline">Cookies und gespeicherte Daten</p>
      <p>An dieser Stelle finden Sie in einer Übersicht die gespeicherten Daten dieser Website in Cookies oder anderen Speicherorten.</p>

      <CategoryTitle>Notwendig</CategoryTitle>
      <CookieOverviewItem
        cookie='tc-sudoku-game-id'
        duration='1 Jahr'
        description='Dieses Cookie wird verwendet, um das vorhandene Spiel im Browser beizubehalten.'
      />

      <CategoryTitle>Funktionale</CategoryTitle>
      <NoCookies>In dieser Kategorie gibt es noch keine Cookies. Sobald neue Cookies hinzugefügt werden, holen wir erneut Ihre Einwilligung ein</NoCookies>

      <CategoryTitle>Analyse</CategoryTitle>
      <NoCookies>In dieser Kategorie gibt es noch keine Cookies. Sobald neue Cookies hinzugefügt werden, holen wir erneut Ihre Einwilligung ein</NoCookies>

      <CategoryTitle>Werbe</CategoryTitle>
      <NoCookies>In dieser Kategorie gibt es noch keine Cookies. Sobald neue Cookies hinzugefügt werden, holen wir erneut Ihre Einwilligung ein</NoCookies>

    </div>
  );
});