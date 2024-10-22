import { ServiceCard } from "../../molecules/ServiceCard";
import { listCards } from "@/app/constants";

export function ServicesSection() {
	return (
		<section className="bg-servicesSectionShadow border-solid border-b border-primary">
			<div className="max-w-screen-xl mx-auto px-4 pb-24">
				<h2 className="text-4xl font-bold text-primary">Услуги</h2>
				<div className="mt-12 grid grid-cols-3 gap-4 rounded-xl">
					{listCards.map((card) => (
						<ServiceCard key={card.header} header={card.header} description={card.description}>
							{card.image}
						</ServiceCard>
					))}
				</div>
			</div>
		</section>
	);
};
