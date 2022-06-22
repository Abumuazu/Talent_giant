import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Arvo:wght@700&family=DM+Sans:wght@400;500;700&display=swap"
          />
          {CssBaseline.flush()}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script src="//code.tidio.co/qkrgqxo0vepga0xs1tlagyic9qe2huml.js" async></script> */}
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
