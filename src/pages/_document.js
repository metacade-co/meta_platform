import { fonts } from "src/fonts";
import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";
export default function Document() {
  return (
    <Html className={clsx(fonts.retroFont.variable, fonts.goshaFont.variable)}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
