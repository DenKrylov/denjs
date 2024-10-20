import Image from "next/image";
import { Button } from "../../atoms/Button";

export function MainSection() {
	return (
		<main className="max-w-7xl flex-col mx-auto mt-24 mb-32 flex justify-between">
			<h1 className="font-bold text-5xl text-primary"><span className="font-f">Веб-студия</span>&nbsp;Denjs.</h1>
			<Image src="/home.webp" alt="home" width="1280" height="720" className="rounded-xl my-8"/>
			<div className="flex m-auto items-center gap-12">
				<h2 className="uppercase font-bold">Разрабатываем, поддерживаем и&nbsp;развиваем web-проекты</h2>
				<Button size="xl">Получить консультацию</Button>
			</div>
		</main>
	);
};
