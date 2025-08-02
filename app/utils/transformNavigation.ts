import type { ContentNavigationItem } from '@nuxt/content'
import type { NavigationMenuItem } from '@nuxt/ui'

export default function transformNavigation(
	items: ContentNavigationItem[],
	depth: number = Infinity
): NavigationMenuItem[] {
	if (!items || depth < 1) return []

	return items
		.map(({ title, path, children }) => {
			const transformedItem: NavigationMenuItem = {
				label: title,
				to: path,
			}

			if (children && depth > 1) {
				const filteredChildren = children.filter((child) => child.path !== path)

				if (filteredChildren.length > 0) {
					transformedItem.children = transformNavigation(
						filteredChildren,
						depth - 1
					)
				}
			}

			return transformedItem
		})
		.filter(Boolean)
}
