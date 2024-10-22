import clsx from "clsx";
import Image from "next/image";

interface IReviewCard {
	review: string;
	svg: string;
	signature: string;
	isBorder: boolean
}

export function ReviewCard({ review, svg, signature, isBorder } : IReviewCard): JSX.Element {
	return (
		<figure className={clsx("p-6 flex flex-col justify-between", isBorder && "border-solid border-r border-primary")}>
			<blockquote>
				<p className="-indent-1.5 text-primary">{review}</p>
			</blockquote>
			<figcaption>
				<Image src={svg} alt="logo" width="32" height="32" className="mr-2 mt-9" />
				<p className="text-xs mt-2">{signature}</p>
			</figcaption>
		</figure>
	);
}
