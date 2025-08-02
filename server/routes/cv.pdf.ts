export default eventHandler(async (event) => {
	const { page } = await hubBrowser()

	const query = getQuery(event)
	const loc = query.loc || 'en'

	const url = new URL(getRequestURL(event))
	const margin = '0.5in'

	await page.goto(`${url.origin}/${loc}/cv`, {
		waitUntil: 'domcontentloaded',
	})

	setHeader(event, 'Content-Type', 'application/pdf')
	setHeader(
		event,
		'Content-Disposition',
		`attachment; filename="cv-${loc}.pdf"`
	)

	return page.pdf({
		format: 'A4',
		printBackground: true,
		margin: { top: margin, bottom: margin, left: margin, right: margin },
	})
})
