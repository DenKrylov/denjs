"use client";
import { useState } from "react";
import styles from "./NavigationControlButton.module.css";
import clsx from "clsx";

export function NavigationControlButton() {
	const [isActive, setIsActive] = useState(true);

	return (
		<button className={clsx("lg:hidden", isActive ? styles.ncb : styles.ncb_close)} onClick={() => setIsActive(!isActive)}/>
	);
};
