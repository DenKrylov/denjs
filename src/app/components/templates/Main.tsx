import { Button } from "@headlessui/react";

export function Main() {
	return (
		<main className="max-w-7xl flex-col mx-auto mt-24 mb-32 flex justify-between">
			<h1 className="font-bold text-5xl"><span className="font-f">Веб-студия</span>&nbsp;Denjs.</h1>
			<div className="bg-blue-900 w-full h-96 mt-12 mb-24" />
			<div className="flex m-auto items-center gap-12">
				<h2 className="uppercase font-bold">Разрабатываем, поддерживаем и&nbsp;развиваем web-проекты</h2>
				<Button className="h-12 inline-flex items-center gap-2 rounded-md py-1 px-4 text-sm/6 whitespace-nowrap text-black font-semibold focus:outline-none">
          Получить консультацию
				</Button>
			</div>
		</main>
	);
};
