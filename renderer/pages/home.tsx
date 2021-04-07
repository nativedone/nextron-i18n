import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import Header from "../components/Header";
// TODO: delete this file after setting the initial path for the electron app
// See 'background.ts' file
export default function Home() {
  const { t } = useTranslation("home");
  const description = t("description");
  const linkName = t("more-examples");

  return (
    <>
      <Header />
      <p>{description}</p>
      <Link href="/more-examples">
        <a>{linkName}</a>
      </Link>
    </>
  );
}
