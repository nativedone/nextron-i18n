import React from "react";
import useTranslation from "next-translate/useTranslation";

import Header from "../components/Header";

export default function IndexPage() {
  const { t } = useTranslation("home");
  const description = t("description");

  return (
    <>
      <Header />
      <p>{description}</p>
    </>
  );
}
