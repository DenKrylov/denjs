"use client";
import { useEffect, useState } from "react";
import { Button } from "@headlessui/react";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

type Themes = "dark" | "auto" | "light"

const list = [
	<SunIcon key="light" className="h-5 w-5 hover:stroke-primary" />,
	<ComputerDesktopIcon key="auto" className="h-5 w-5 hover:stroke-primary" />,
	<MoonIcon key="dark" className="h-5 w-5 hover:stroke-primary" />
];

export function ChoiceTheme() {
	const [activeTheme, setActiveTheme] = useState<Themes>();

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");

		if(!savedTheme) {
			handleChangeTheme("auto");
		} else {
			handleChangeTheme(savedTheme as Themes);
		}
	}, []);

	const handleChangeTheme = (theme: Themes) => {
		switch(true) {
		case theme === "auto":
			localStorage.removeItem("theme");
			if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
			break;
		case theme === "light":
			localStorage.theme = theme;
			document.documentElement.classList.remove("dark");
			break;
		default:
			localStorage.theme = theme;
			document.documentElement.classList.add("dark");
			break;
		}
		setActiveTheme(theme);
	};

	return (
		<div className="p-0.5 flex border rounded-full border-primary">
			{list.map((icon) => (
				<Button
					key={icon.key}
					onClick={() => handleChangeTheme(icon.key as Themes)}
					className={clsx("h-8 w-8 flex justify-center items-center rounded-full", activeTheme === icon.key && "bg-acitve text-secondary")}>
					{icon}
				</Button>
			))}
		</div>
	);
};
