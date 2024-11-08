import { reviews } from "@/app/constants";
import { ReviewCard } from "../../molecules/ReviewCard";

export function ReviewsSection(): JSX.Element {
	return (
		<section className="max-w-7xl mx-auto px-4 pb-24">
			<h2 className="text-4xl font-bold text-primary">Отзывы</h2>
			<div className="mt-12 bg-accent grid grid-cols-3 gap-4 rounded-xl border-solid border border-primary">
				{reviews.map((review, index) =>
					<ReviewCard
						key={review.signature}
						review={review.review}
						svg={review.svg}
						signature={review.signature}
						isBorder={index !== 2}
					/>
				)}
			</div>
		</section>
	);
}
