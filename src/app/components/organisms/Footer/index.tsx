import { FooterList } from "../../molecules/FooterList";
import { Subscribe } from "../../molecules/Subscribe";
import { ChoiceTheme } from "../../molecules/ChoiceTheme/inddex";
import { ListLinksImagas } from "../../molecules/ListLinksImagas";
import { Logo } from "../../molecules/Logo";

export function Footer() {

	const lists = [
		{
			title: "Разработка",
			lists: ["Лендинг", "Сайт-визитка", "Сайт-католог", "Интернет-магазин"]
		},
		{
			title: "Дизайн",
			lists: ["UI/UX дизайн", "Дизайн сайтов", "Дизайн поддержка", "Логотипы"]
		}
	];

	const listLinkPrivate = [
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
			href: "mailto:vlad@htmlbook.ru?subject=Вопрос по HTML",
			src: "/mail.svg",
			alt: "mail"
		}
	];

	const listLinkPublic = [
		{
			href: "tg://msg?phone=+78959372191",
			src: "/telegram.svg",
			alt: "telegram"
		},
		{
			href: "/",
			src: "/behance.svg",
			alt: "behance"
		},
		{
			href: "https://vk.com/deniskrilov",
			src: "/vk.svg",
			alt: "vk"
		},
		{
			href: "https://www.youtube.com/",
			src: "/github.svg",
			alt: "github"
		},
	];

	return (
		<footer className="flex justify-around items-center border-t border-t-neutral-800">
			<div className="w-[1280px] flex flex-col justify-between py-9 px-6">
				<ul className="flex flex-auto flex-wrap justify-between">
					<li>
						<ul>
							<li className="flex flex-col mb-3"><Logo /></li>
							<ListLinksImagas listLink={listLinkPrivate} />
							<li className="text-xs mt-5">
                Время работы: <span className="text-sm">10:00</span> - <span className="text-sm">21:00</span>
							</li>
						</ul>
					</li>
					{lists.map((list) => (
						<li key={list.title} className="max-w-60">
							<FooterList title={list.title} lists={list.lists} />
						</li>
					))}
					<li className="max-w-60"><Subscribe /></li>
				</ul>
				<div className="mt-12 flex flex-auto items-center justify-between">
					<div>
						<p className="mb-4 text-sm">&#169; {new Date().getFullYear()} Denjs</p>
						<ListLinksImagas listLink={listLinkPublic} />
					</div>
					<ChoiceTheme />
				</div>
			</div>
		</footer>
	);
};
