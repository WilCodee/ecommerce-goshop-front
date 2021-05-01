import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/logo-ecommerce.png" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
          />
          <script src="https://www.paypal.com/sdk/js?client-id=AY9oyV-Rfw2HZgVzfx8N5OyHSqGyiee2hcUC6l5QwsYLqMXR3HVT6zRLpzXFJmnN32WT9hFoHnzFfTQ9&currency=USD"></script>
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
