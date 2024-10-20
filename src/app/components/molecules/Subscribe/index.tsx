import { useTranslations } from "next-intl";

export function Subscribe() {
	const t = useTranslations("Footer");

	return (
		<ul>
			<li className="mb-4"><h4 className="text-sm text-primary">{t("subscribe")}</h4></li>
			<li className="text-sm">{t("subscribe_description")}</li>
			<li>
				<form>
					<label className="relative flex items-center mt-3 h-8 justify-between rounded">
						<input type="email" placeholder="you@email.com" className="absolute max-w-60 h-full bg-buttonPrimaryHover my-1 pl-3 pr-28 rounded-md border-none outline-none focus:outline-accent placeholder-secondary" />
						<button className="bg-secondary border border-primary text-xs absolute py-[2px] px-2 right-1 rounded">
							{t("button")}
						</button>
					</label>
				</form>
			</li>
		</ul>

	);
};
