import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"
import { ServerStyleSheets } from '@material-ui/styles'

//////////////////////////////////////////////////////////////////////

export default class GlobalDocument extends Document {
	static async getInitialProps(context: DocumentContext) {
		const styledSheet = new ServerStyleSheet()
		const materialSheets = new ServerStyleSheets()
		const originalRenderPage = context.renderPage

		try {
			context.renderPage = () => originalRenderPage({
				enhanceApp: (App) => (props) =>
					styledSheet.collectStyles(
						materialSheets.collect(<App {...props} />)
					)
			})

			const initialProps = await Document.getInitialProps(context)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{styledSheet.getStyleElement()}
						{materialSheets.getStyleElement()}
					</>
				)
			}
		} finally {
			styledSheet.seal()
		}
	}

	render() {
		return (
			<Html lang="pt-br">
				<Head>
                	<link rel="shortcut icon" href="/images/gitjobs.svg" type="image/x-icon"/>
					<link href="https://fonts.googleapis.com/css?family=Comfortaa:300,regular,500,600,700" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic" rel="stylesheet" />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}