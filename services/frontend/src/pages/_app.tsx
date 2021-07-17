import Head from 'next/head'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from "../styles/_global"

import colors from "../styles/_colors"

//////////////////////////////////////////////////////////////////////

function GlobalApp({ Component, pageProps }:any) {
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles) {
			// @ts-ignore: Erro de Retorno de Objeto Nulo, Favor Desconsiderar.
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<Head>
				<title>GitJobs</title>
			</Head>

			<GlobalStyle />
			<ThemeProvider theme={colors}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default GlobalApp