interface IServiceCard {
  header: string;
  description?: string,
  children?: React.ReactNode
}

export function ServiceCard({ header, description, children } : IServiceCard) {
	return (
		<div className="p-6 rounded-xl border border-1 border-neutral-900 hover:border-neutral-800">
			{children}
			<p className="text-xl">{header}</p>
			<p className="text-sm">{description}</p>
		</div>
	);
};
