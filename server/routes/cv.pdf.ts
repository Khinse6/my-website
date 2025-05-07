export default eventHandler(async (event) => {
	const { page } = await hubBrowser()

	const url = new URL(getRequestURL(event))
	const lang = url.searchParams.get('lang') || 'en'

	await page.goto(`${url.origin}/projects/cv?lang=${lang}`, {
		waitUntil: 'networkidle0',
	})

	setHeader(event, 'Content-Type', 'application/pdf')
	return page.pdf({
		format: 'A4',
		printBackground: true,
		margin: { top: '0.5in', bottom: '0.5in', left: '0.5in', right: '0.5in' },
	})
})
