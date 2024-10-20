import Image from "next/image";

interface IReviewCard {
	review: string;
	svg: string;
	signature: string;
}

export function ReviewCard({ review, svg, signature } : IReviewCard): JSX.Element {
	return (
		<figure>
			<blockquote>
				<p>{review}</p>
			</blockquote>
			<figcaption>
				<Image src={svg} alt="logo" width="32" height="32" className="mr-2" />
				<p>{signature}</p>
			</figcaption>
		</figure>
	);
}
