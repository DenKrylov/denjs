interface FooterList {
  title: string;
  lists: string[];
}

export function FooterList({ title, lists } : FooterList) {
	return (
		<ul>
			<li className="mb-4"><h4 className="text-sm text-primary">{title}</h4></li>
			{lists.map((list) => (
				<li key={list} className="mb-3">
					<a href="\" className="text-xs hover:text-primary">{list}</a>
				</li>
			))}
		</ul>
	);
};
