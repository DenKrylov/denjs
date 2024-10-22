"use client";
import clsx from "clsx";
import { ReactNode } from "react";

interface IButton {
	size?: "sm" | "md" | "xl";
	accent?: boolean;
	classAdd?: string;
	action?: () => void
	children?: ReactNode
}

export function Button({ size = "md", accent = false, classAdd, action, children } : IButton): JSX.Element {
	const sizeCss = () => {
		switch(true) {
		case size === "md":
			return "h-8 px-2 text-sm";
		case size === "xl":
			return "h-12 px-4 text-lg";
		default:
			return "h-8 p-1 text-lg";
		}
	};

	const colorCss = () => {
		if(accent) {
			return "text-tertiary bg-tertiary hover:bg-white/[.8]";
		}
		return "text-primary bg-secondary hover:bg-buttonPrimaryHover";
	};

	return (
		<button
			onClick={action}
			className={
				clsx(
					"transition-colors inline-flex items-center border border-primary rounded-md whitespace-nowrap focus:outline-none font-medium",
					sizeCss(),
					colorCss(),
					classAdd
				)
			}
		>
			<span className="px-1">{children}</span>
		</button>
	);
}
