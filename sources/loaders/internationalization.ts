import i18next from "i18next";
import i18nextSyncBackend from "i18next-sync-fs-backend";
import Koa from "koa";
import KoaI18next from "koa-i18next";

export default (app: Koa): void => {
  i18next.use(i18nextSyncBackend).init({
    backend: {
      loadPath: `${__dirname}/../locales/{{lng}}/{{ns}}.json`,
    },
    initImmediate: false,
    fallbackLng: "en",
    preload: ["en", "fr"],
  });

  app.use(
    KoaI18next(i18next, {
      lookupCookie: "locale",
      lookupQuerystring: "locale",
      order: ["querystring", "cookie"],
      next: true,
    }),
  );
};
