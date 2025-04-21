import type { ContentNavigationItem } from '@nuxt/content'
import type { NavigationMenuItem } from '@nuxt/ui'

export default function transformNavigation(
	items: ContentNavigationItem[]
): NavigationMenuItem[] {
	if (!items) return []
	return items
		.map(({ title, path, children }) => {
			const transformedItem: NavigationMenuItem = {
				label: title,
				to: path,
			}
			if (children) {
				const filteredChildren = children.filter((child) => child.path !== path)

				if (filteredChildren.length > 0) {
					transformedItem.children = transformNavigation(filteredChildren)
				}
			}

			return transformedItem
		})
		.filter(Boolean)
}
