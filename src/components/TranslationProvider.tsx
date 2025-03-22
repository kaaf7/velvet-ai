"use client";

import { I18nextProvider, initReactI18next } from "react-i18next";

import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import { useEffect } from "react";

i18next
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
    ns: ["common"],
    defaultNS: "common",
  });

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    i18next.loadNamespaces(["common"]);
  }, []);

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
