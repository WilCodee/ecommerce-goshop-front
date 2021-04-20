import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
          />
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
