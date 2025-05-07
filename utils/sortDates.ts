export default function sortDates<T extends { start: string; end: string }>(
	items: T[]
): T[] {
	return [...items].sort((a, b) => {
		const endA = a.end === 'Present' ? 9999 : parseInt(a.end)
		const endB = b.end === 'Present' ? 9999 : parseInt(b.end)

		if (endA === endB) {
			return parseInt(b.start) - parseInt(a.start)
		}

		return endB - endA
	})
}
