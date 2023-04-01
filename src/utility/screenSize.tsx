import { useState, useEffect } from "react";

export function screenSize() {
	const [dimension, setDimension] = useState({
		x: window.innerWidth,
		y: window.innerHeight,
	});
	const detectSize = () => {
		setDimension({
			x: window.innerWidth,
			y: window.innerHeight,
		});
	};
	useEffect(() => {
		window.addEventListener("resize", detectSize);
		return () => {
			window.removeEventListener("resize", detectSize);
		};
	}, [dimension]);
	return dimension;
}
