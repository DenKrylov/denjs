import clsx from "clsx";
import Image from "next/image";
interface IListLinksImagas {
	listLink: {
		href: string,
		src: string,
		alt: string,
	}[],
	direct?: "row" | "column",
	size?: number,
	width?: number,
	height?: number,
}

export function ListLinksImagas({ listLink, direct = "row", size, width = 24, height = 24 } : IListLinksImagas): JSX.Element {
	return (
		<ul className={clsx("flex gap-3", direct === "row" ? "flex-row" : "flex-col")}>
			{listLink.map((list) => (
				<li key={list.href}>
					<a href={list.href} target="_blank">
						<Image src={list.src} alt={list.alt} width={size ? size : width} height={size ? height : height} className="mr-2" />
					</a>
				</li>
			))}
		</ul>
	);
}
