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
        duration='180 Tage'
        description='Dieses Cookie wird verwendet, um das vorhandene Spiel im Browser beizubehalten.'
      />
      <CookieOverviewItem
        cookie='tc_cookie_consent_id'
        duration='720 days'
        description='Dieses Cookie wird als eindeutige ID verwendet, um die vom aktuellen Browser weitergeleiteten
        Cookie-Zustimmungen aufzuzeichnen und abzurufen.'
      />
      <CookieOverviewItem
        cookie='tc_cookie_consent'
        duration='180 Tage'
        description='Mit diesem Cookie wird nachverfolgt, ob dieser Browser bereits eine allgemeine Einwilligung zur
        Verwendung von Cookies erteilt hat. Daher wird der Cookie-Einwilligungsdialog bedingt auf der Grundlage
        dieses Cookies angezeigt.'
      />
      <CookieOverviewItem
        cookie='tc_cookie_necessary'
        duration='180 Tage'
        description='Mit diesem Cookie wird nachverfolgt, ob dieser Browser bereits die Einwilligung zur Verwendung
        notwendiger Cookies erteilt hat. Daher werden die notwendigen Cookies im Browser gespeichert.'
      />
      <CookieOverviewItem
        cookie='tc_cookie_functional'
        duration='180 Tage'
        description='Mit diesem Cookie wird nachverfolgt, ob dieser Browser bereits die Einwilligung zur Verwendung
        funktionaler Cookies (Cookies, die unter dem Titel „Funktionale“ genannt werden) erteilt hat. Daher werden die
        funktionalen Cookies im Browser gespeichert.'
      />
      <CookieOverviewItem
        cookie='tc_cookie_analysis'
        duration='180 Tage'
        description='Dieses Cookie wird verwendet, um zu verfolgen, ob dieser Browser bereits die Zustimmung zur
        Verwendung von analysebezogenen Cookies (Cookies, die unter dem Titel „Analyse“ aufgeführt sind) erhalten hat.
        Daher werden die analysebezogenen Cookies im Browser gespeichert.'
      />
      <CookieOverviewItem
        cookie='tc_cookie_advertisement'
        duration='180 Tage'
        description='Mit diesem Cookie wird nachverfolgt, ob dieser Browser bereits die Einwilligung zur Verwendung
        von werbebezogenen Cookies (Cookies, die unter der Überschrift „Werbe“ genannt werden) erteilt hat. Daher
        werden die werbebezogenen Cookies im Browser gespeichert.'
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