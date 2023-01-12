import Head from 'next/head'

const Meta = () => (
	<Head>
		<title>Joy & Seb</title>
		<meta charSet='utf-8' />
		<meta name='mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-status-bar-style' content='black' />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
		<meta name='apple-mobile-web-app-title' content='Joy & Seb' />
		<meta name='application-name' content='Joy & Seb' />
		<meta name='theme-color' content='#0D1A26' media='(prefers-color-scheme: light)' />
		<meta name='theme-color' content='#0D1A26' media='(prefers-color-scheme: dark)' />
		<meta name='description' content='Smart Job Applications'/>
		<link rel='apple-touch-icon' href='/images/icon-maskable-512.png' />
		<link rel='icon' href='/icon-192x192.png'/>
		<link rel='manifest' href='/manifest.json'/>
	</Head>
)

export default Meta