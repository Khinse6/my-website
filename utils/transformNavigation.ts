export default function transformNavigation(order: string[], items: any[]): any[] {
	if (!items) return [];
	return items
		.map(({ title, path, children }) => {
			const transformedItem: any = {
				label: title,
				to: path
			};

			if (children) {
				const filteredChildren = children.filter(
					(child: { path: any }) => child.path !== path
				);
				if (filteredChildren.length > 0) {
					transformedItem.children = transformNavigation(order, filteredChildren);
				}
			}

			return transformedItem;
		})
		.filter(Boolean)
		.sort((a, b) => order.indexOf(a.label) - order.indexOf(b.label));
}
