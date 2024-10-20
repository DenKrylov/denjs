import { Field, Input, Label } from "@headlessui/react";
import { HTMLInputTypeAttribute } from "react";

interface IUniversalField {
	title: string;
	type: HTMLInputTypeAttribute;
}

export function UniversalField({ title, type } : IUniversalField): JSX.Element {
	return (
		<Field className="flex flex-col">
			<Label className="text-sm/6 font-medium text-white">{title}</Label>
			<Input type={type} placeholder={title} className="w-64 h-12 bg-buttonPrimaryHover my-1 px-3 rounded-md border-none outline-none focus:outline-accent placeholder-secondary"/>
		</Field>
	);
}
