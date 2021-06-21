import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" type="text/css" />
          <meta property="og:title" content="DEVTI 데브티아이" />
          <meta property="og:description" content="나에게 딱 맞는 개발자 직군을 테스트를 통해 찾아보세요!" />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/39829378/117588913-879ba280-b161-11eb-81f1-d120b79d2f78.png"
          />
          <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <Footer /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
