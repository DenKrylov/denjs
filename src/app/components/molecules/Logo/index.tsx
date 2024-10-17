import Link from "next/link";
import Image from "next/image";

export function Logo({ size } : {size?: "md"}): JSX.Element {

	return (
		<div className="flex">
			<Image src="/linux.svg" alt="logo" width="32" height="32" className="mr-2" />
			<Link href="/" className="text-primary text-2xl whitespace-nowrap break-normal">
				Denjs
			</Link>
		</div>
	);
}
