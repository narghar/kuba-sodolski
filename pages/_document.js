import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const { isDevelopment } = this.props;
    return (
      <Html lang="en">
        <Head>
          {/*<link rel="preconnect" data-href="https://use.typekit.net/" />*/}
          {/*<link rel="preconnect" data-href="https://maxst.icons8.com/" />*/}
          {/* Font weight 300 not working properly with polish special letters */}
          {/* <link rel="stylesheet" href={"https://use.typekit.net/hhx8tkg.css"} /> */}
          <link
            rel="stylesheet"
            href={"https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"}
          />
        </Head>
        <body className={isDevelopment ? "debug-screens" : null}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
