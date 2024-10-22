"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { NavigationControlButton } from "../../molecules/NavigationControlButton";
import { ListLinksImagas } from "../../molecules/ListLinksImagas";
import { Logo } from "../../molecules/Logo";
import { Button } from "../../atoms/Button";
import { Bid } from "../Bid";
import { useState } from "react";

export function Header() {
	const t = useTranslations("Header");
	const [isBid, setIsBid] = useState(false);

	const PAGES = [
		{
			title: t("portfolio"),
			route: "/portfolio",
		},
		{
			title: t("services"),
			route: "/services"
		},
		{
			title: t("aboutUs"),
			route: "/aboutUs",
		},
		{
			title: t("blog"),
			route: "/blog"
		},
		{
			title: t("price"),
			route: "/price",
		},
		{
			title: t("contacts"),
			route: "/contacts"
		}
	];

	const contactList = [
		{
			href: "tg://msg?phone=+78959372191",
			src: "/telegram.svg",
			alt: "telegram"
		},
		{
			href: "https://wa.me/79859372191",
			src: "/whatsapp.svg",
			alt: "whatsapp"
		},
		{
			href: "tg://msg?phone=+78959372191",
			src: "/mail.svg",
			alt: "mail"
		},
	];

	return (
		<>
			<header className="z-50 sticky top-0 flex px-6 h-16 justify-around items-center shadow-header bg-transparent backdrop-blur-md">
				<nav className="max-w-header flex flex-auto justify-between">
					<ul className="flex gap-6 items-center">
						<li>
							<Logo />
							<NavigationControlButton />
						</li>
						{PAGES.map((list) =>
							<li key={list.title} className="max-lg:hidden">
								<Link href={list.route} className="whitespace-nowrap text-sm break-normal transition-colors hover:text-primary">
									{list.title}
								</Link>
							</li>)}
					</ul>
					<div className="flex items-center">
						<ListLinksImagas listLink={contactList} />
						<Button accent classAdd="ml-2">{t("bid")}</Button>
					</div>
				</nav>
			</header>
			{isBid && <Bid setIsBid={setIsBid} />}
		</>
	);
}
