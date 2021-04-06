import React from "react";
import Head from "next/head";
import Link from "next/link";

function IndexPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Index IndexPage - Nextron (with-typescript)</title>
      </Head>
      <div>
        <p>
          ⚡ Index IndexPage - Electron + Next.js ⚡ -
          <Link href="/home">
            <a>Go to home page</a>
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
}

export default IndexPage;
