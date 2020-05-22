import Document, {
  Html,
  Head,
  Main,
  NextScript,
  NextDocumentContext
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Milonga&display=swap" rel="stylesheet"></link>
          <style jsx global>{`
            body {
              margin: 0;
              background-color: #262626;
              font-family: 'Roboto', sans-serif;
            }
          `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
