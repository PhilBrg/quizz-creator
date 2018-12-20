import Document, { Head, Main, NextScript } from 'next/document'
import styled, { ServerStyleSheet } from 'styled-components'
import * as colors from '@tools/colors'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </html>
    )
  }
}

const Body = styled.body`
  background-color: ${colors.mainColor}
`