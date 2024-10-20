import { Button } from "../../atoms/Button";
import { UniversalField } from "../../molecules/Field";
import { XMarkIcon } from "@heroicons/react/16/solid";

export function Bid({ setIsBid } : {setIsBid: (state: boolean) => void}): JSX.Element {

	return (
		<div className="fixed top-0 bottom-0 left-0 right-0 bg-transparent backdrop-blur-md flex items-center justify-center">
			<div className="relative flex flex-col gap-6 bg-primary p-10 rounded-xl border border-1 border-tertiary">
				<XMarkIcon onClick={() => setIsBid(false)} className="absolute top-4 right-4 h-8 w-8 cursor-pointer"/>
				<h2 className="text-4xl font-bold text-primary">Оставить заяку</h2>
				<p>заполните свои контактные данные и мы вам перезвоним</p>
				<div className="flex gap-6">
					<UniversalField title="Имя" type="string" />
					<UniversalField title="Телефон" type="phone" />
					<UniversalField title="E-mail" type="email" />
				</div>
				<div className="flex items-center">
					<p className="text-sm">Нажимая на кнопку «Отправить заявку», вы соглашаетесь на обработку персональных данных в соответствии с политикой конфиденциальности.</p>
					<Button size="xl" accent>Отправить заявку</Button>
				</div>
			</div>
		</div>
	);
}
