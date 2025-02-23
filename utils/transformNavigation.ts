import type { ContentNavigationItem } from '@nuxt/content'
import type { NavigationMenuItem } from '@nuxt/ui'

export default function transformNavigation(
	order: string[],
	items: ContentNavigationItem[]
): NavigationMenuItem[] {
	if (!items) return []
	return items
		.map(({ title, path, children }) => {
			const normalizedPath = path.endsWith('/') ? path : `${path}/`
			const transformedItem: NavigationMenuItem = {
				label: title,
				to: normalizedPath,
			}
			if (children) {
				const filteredChildren = children.filter((child) => child.path !== path)

				if (filteredChildren.length > 0) {
					transformedItem.children = transformNavigation(
						order,
						filteredChildren
					)
				}
			}

			return transformedItem
		})
		.filter(Boolean)
		.sort((a, b) => order.indexOf(a.label!) - order.indexOf(b.label!))
}
