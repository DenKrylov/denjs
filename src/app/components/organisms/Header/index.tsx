import Link from "next/link";
import { useTranslations } from "next-intl";
import { NavigationControlButton } from "../../molecules/NavigationControlButton";
import { ListLinksImagas } from "../../molecules/ListLinksImagas";
import { Button } from "@headlessui/react";
import { Logo } from "../../molecules/Logo";

export function Header() {
	const t = useTranslations("Header");

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
		<header className="sticky top-0 flex px-6 h-16 justify-around items-center shadow-header backdrop-blur-md">
			<nav className="max-w-header flex flex-auto justify-between">
				<ul className="flex gap-6 items-center">
					<li>
						<Logo />
						<NavigationControlButton />
					</li>
					{PAGES.map((list) =>
						<li key={list.title} className="max-lg:hidden">
							<Link href={list.route} className="transition-[1000ms] whitespace-nowrap text-sm break-normal">
								{list.title}
							</Link>
						</li>)}
				</ul>
				<div className="flex items-center">
					<ListLinksImagas listLink={contactList} />
					<Button className="inline-flex items-center gap-2 rounded-md py-1 px-3 text-tertiary text-sm/6 whitespace-nowrap font-semibold focus:outline-none bg-tertiary">
						{t("bid")}
					</Button>
				</div>
			</nav>
		</header>
	);
}
