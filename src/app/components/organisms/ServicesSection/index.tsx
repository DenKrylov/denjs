import { ServiceCard } from "../../molecules/ServiceCard";
import { listCards } from "@/app/constants";

export function ServicesSection() {
	return (
		<section className="max-w-7xl mx-auto px-4 pb-24">
			<h2 className="text-4xl font-bold text-primary">Отзывы</h2>
			<div className="mt-12 grid grid-cols-3 gap-4 rounded-xl">
				{listCards.map((card) => (
					<ServiceCard key={card.header} header={card.header} description={card.description}>
						{card.image}
					</ServiceCard>
				))}
			</div>
		</section>
	);
};
