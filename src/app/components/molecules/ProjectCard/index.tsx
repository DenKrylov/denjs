"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

interface IProjectCard {
	size: string;
	img: string;
	link: string;
	name: string;
}

export function ProjectCard({ size, img, link, name } : IProjectCard): JSX.Element {
	const [isHover, setIsHover] = useState(false);

	const handleHoverEnter = (): void => {
		setIsHover(true);
	};

	const handleHoverLeave = (): void => {
		setIsHover(false);
	};

	return (
		<div
			onMouseEnter={handleHoverEnter}
			onMouseLeave={handleHoverLeave}
			className={clsx("flex w-full h-full rounded relative overflow-hidden", size)}>
			<Link href={link}>
				<div className="absolute z-10 h-full w-full transition duration-150 hover:bg-black/30">
					<div className={clsx("px-2 absolute h-6 top-2/4 left-2/4 flex gap-1 items-center rounded-full text-xs transform -translate-x-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md opacity-0 transition", isHover && "opacity-100" )}
					>
						<span className="text-primary">{name}</span>
						<div className="ml-1 w-px h-full bg-white/30" />
						<ArrowUpRightIcon className="h-4 w-4"/>
					</div>
				</div>
				<Image src={img} alt={img} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover"/>
			</Link>
		</div>
	);
}
