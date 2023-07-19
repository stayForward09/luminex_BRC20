import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script src="https://cdn.usefathom.com/script.js" data-spa="auto" data-site="CNVWHUUA"></script>
        <script src="/handle.js"></script> */}
        <script src="/js/lib/indexeddb.js"></script>
        <script src="/js/lib/wif.js"></script>
        <script src="/js/lib/buffer.6.0.3.js"></script>
        <script src="/js/lib/tapscript.1.2.7.js"></script>
        <script src="/js/lib/crypto-utils.1.5.11.js"></script>
        <script src="/js/lib/bech32.2.0.0.js"></script>
        <script src="/js/lib/qrcode.js"></script>
        <script src="js/app/app-config.1.0.8.js"></script>
        <script src="/js/app/inscriptions/plugins.1.0.2.js"></script>
        <script src="/js/app/inscriptions/inscriptions.1.0.19.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
