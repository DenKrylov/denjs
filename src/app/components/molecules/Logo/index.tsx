import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import clsx from "clsx";

export function Logo({ size = "md" } : {size?: "md" | "sm" | "lg"}): JSX.Element {
	const t = useTranslations("Main");

	return (
		<div className="flex">
			<Image src="/linux.svg" alt="logo" width="32" height="32" className="mr-2" />
			<Link
				href="/"
				className={clsx(
					"text-primary whitespace-nowrap break-normal",
					size === "md" && "text-2xl",
					size === "sm" && "text-base",
					size === "lg" && "text-4xl"
				)}>
				{t("name")}
			</Link>
		</div>
	);
}
