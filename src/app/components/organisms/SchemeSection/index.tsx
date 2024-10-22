import { SchemeCard } from "../../molecules/SchemeCard";
import { BeakerIcon } from "@heroicons/react/24/outline";

const worksList = [
	{
		icon: <BeakerIcon className="h-11 w-11"/>,
		title: "Техническое задание",
		description: "The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions."
	},
	{
		icon: <BeakerIcon className="h-11 w-11"/>,
		title: "Прототипа сайта",
		description: "The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions."
	},
	{
		icon: <BeakerIcon className="h-11 w-11"/>,
		title: "Создание фирменного стиля",
		description: "The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions."
	},
];

export function SchemeSection() {
	return (
		<section className="px-4 py-20 bg-schemeSectionShadow border-solid border-b border-primary">
			<div className="max-w-screen-xl mx-auto">
				<h2 className="text-4xl font-bold text-primary">Услуги</h2>
				<div className="h-64 flex w-full justify-center items-center ">
					<div className="bg-clientBG w-fit px-4 py-3">
						<span>Client</span>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-8 rounded-xl">
					{
						worksList.map((work) => <SchemeCard key={work.title} icon={work.icon} title={work.title} description={work.description} />)
					}
				</div>
			</div>
		</section>
	);
}
