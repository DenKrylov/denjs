import { FooterList } from "../../molecules/FooterList";
import { Subscribe } from "../../molecules/Subscribe";
import { ChoiceTheme } from "../../molecules/ChoiceTheme/inddex";
import { ListLinksImagas } from "../../molecules/ListLinksImagas";
import { Logo } from "../../molecules/Logo";
import { listLinkPrivate, listLinkPublic, listServices } from "@/app/constants";

export function Footer() {
	return (
		<footer className="flex justify-around items-center border-t border-t-neutral-800">
			<div className="w-[1280px] flex flex-col justify-between py-9 px-6">
				<ul className="flex flex-auto flex-wrap justify-between">
					<li>
						<ul>
							<li className="flex flex-col mb-3">
								<Logo />
							</li>
							<li>
								<ListLinksImagas listLink={listLinkPrivate} />
							</li>
						</ul>
					</li>
					{listServices.map((service) => (
						<li key={service.title} className="max-w-60">
							<FooterList title={service.title} lists={service.lists} />
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
