import { ProjectCard } from "../../molecules/ProjectCard";

const projects = [
	{
		img: "/home.webp",
		link: "/page",
		name: "home",
		size: "col-span-2 row-span-2"
	},
	{
		img: "/home.webp",
		link: "https://nextjs.org/",
		name: "home",
		size: "col-span-2 row-span-4"
	},
	{
		img: "/home.webp",
		link: "https://nextjs.org/",
		name: "home",
		size: "col-span-2 row-span-2"
	},
	{
		img: "/home.webp",
		link: "https://nextjs.org/",
		name: "home",
		size: "col-span-2 row-span-2"
	},
	{
		img: "/home.webp",
		link: "https://nextjs.org/",
		name: "home",
		size: "col-span-2 row-span-2"
	},
	{
		img: "/home.webp",
		link: "https://nextjs.org/",
		name: "home",
		size: "col-span-1 row-span-1"
	},
	{
		img: "/home.webp",
		link: "https://nextjs.org/",
		name: "home",
		size: "col-span-1 row-span-1"
	},
	{
		img: "/home.webp",
		link: "https://nextjs.org/",
		name: "home",
		size: "col-span-2 row-span-2"
	},
];

export function ProjectsSection() {
	return (
		<section className="flex flex-col items-center py-20 px-4 after:">
			<div className="flex justify-start max-w-screen-xl px-4 w-full">
				<h2 className="text-4xl font-bold text-primary">Проекты</h2>
			</div>
			<div className="relative h-[656px] w-[1556px] mt-12 grid grid-cols-8 grid-rows-4 gap-8 items-center
											after:content-[''] after:absolute after:z-10 after:h-96 after:w-full after:-bottom-8
											after:pointer-events-none after:bg-projectsSectionShadow">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						size={project.size}
						img={project.img}
						link={project.link}
						name={project.name}
					/>)
				)}
			</div>
		</section>
	);
}
