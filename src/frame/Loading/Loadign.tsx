import { useState } from "react"
import { WrapperLoading } from "./LoadingStyle"

export const Loading = () => {

	const TEXT = "> Loading artificial intelligence Denjs";
	const [show, setShow] = useState<boolean>(true);

	setInterval(() => setShow(!show), 700);

	return (
		<WrapperLoading>
			<p>{TEXT }</p>
			{ show && <p>_</p> }
			</WrapperLoading>
	)
}