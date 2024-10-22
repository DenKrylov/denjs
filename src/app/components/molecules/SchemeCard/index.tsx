interface ISchemeCard {
	icon: JSX.Element;
	title: string;
	description: string;
}

export function SchemeCard({ icon, title, description } : ISchemeCard) {
	return (
		<div className="min-h-60 p-6 flex flex-col justify-between rounded-xl bg-shemeCardBG before:bg-shemeCardBorder">
			<div className="flex justify-start items-start">{icon}</div>
			<div>
				<h3 className="text-primary text-xl font-semibold">{title}</h3>
				<p className="text-sm">{description}</p>
			</div>
		</div>
	);
}
