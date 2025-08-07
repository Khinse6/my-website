export default function (
	locale: string,
	startDateStr: string,
	endDateStr?: string | null
) {
	const format = (dateStr: string) => {
		const date = new Date(dateStr)

		const formatted = new Intl.DateTimeFormat(locale, {
			month: 'short',
			year: 'numeric',
		})
			.format(date)
			.replace('.', '') // remove ponto do mês (ex: "ago.")
			.replace(' de ', ' ') // remove "de" em pt-BR

		const [monthRaw, year] = formatted.split(' ')

		const month = monthRaw
			? monthRaw.charAt(0).toUpperCase() + monthRaw.slice(1)
			: ''

		return `${month} ${year}`
	}

	const start = format(startDateStr)

	if (!endDateStr) {
		const present = locale === 'pt' ? 'Presente' : 'Present'
		return `${start} – ${present}`
	}

	const end = format(endDateStr)
	return `${start} – ${end}`
}
