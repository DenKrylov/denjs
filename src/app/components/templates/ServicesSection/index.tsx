import { ServiceCard } from "../../molecules/ServiceCard";

export function ServicesSection() {

	const listCards = [
		{
			header: "Dynamic HTML Streaming",
			description: "Instantly stream UI from the server, integrated with the App Router and React Suspense.",
			image: "alfja"
		},
		{
			header: "header",
			description: "Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.",
			image: "alfja"
		},
		{
			header: "header",
			description: "description",
			image: "alfja"
		},
		{
			header: "header",
			description: "description",
			image: "alfja"
		},
		{
			header: "header",
			description: "description",
			image: "alfja"
		},
		{
			header: "Header",
			description: "description",
			image: "alfja"
		},
		{
			header: "header",
			description: "Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.",
			image: "alfja"
		},
		{
			header: "header",
			description: "description",
			image: "alfja"
		},
		{
			header: "header",
			description: "description",
			image: "alfja"
		},
		{
			header: "header",
			description: "description",
			image: "alfja"
		},
		{
			header: "Header",
			description: "description",
			image: "alfja"
		},
		{
			header: "header",
			description: "Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.",
			image: "alfja"
		},
		{
			header: "header",
			description: "description",
			image: "alfja"
		},
		{
			header: "header",
			description: "description",
			image: "alfja"
		},
		{
			header: "header",
			description: "description",
			image: "alfja"
		},
	];

	return (
		<section className="max-w-7xl mx-auto px-4 pb-24">
			<h2 className="text-3xl">Наши услуги</h2>
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
