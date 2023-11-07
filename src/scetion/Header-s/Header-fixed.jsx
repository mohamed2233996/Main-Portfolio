import React from 'react';
import { useRef, useState, useEffect } from 'react';
import "./Header-fixed.css"
import { Header } from '../../componant';
import HeaderMob from '../../componant/Header mobile/Header-mob';

const HeaderFixed = () => {

	const [isVisible, setIsVisible] = useState(false);
	// const [height, setHeight] = useState(0)

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () =>
			window.removeEventListener("scroll", listenToScroll);
	}, [])

	const listenToScroll = () => {
		let heightTogetFrom = 1000;
		const winScroll = document.body.scrollTop ||
			document.documentElement.scrollTop;
		// setHeight(winScroll);
		console.log(winScroll)

		if (winScroll > heightTogetFrom) {
			setIsVisible(true);
			// isVisible && setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};
	const headerRef = useRef();
	// console.log(headerRef.current)

	// if (document.body.scrollTop === 100) {
	// 	console.log("fffff")
	// 	headerRef.current.classList.add("display");
	// } else if (document.body.scrollto < 100) {
	// 	headerRef.current.classList.remove("display");
	// }

	return (
		<>
			<HeaderMob />
				<header className="site-navbar sticy" 
				id={`${isVisible ? "block" : "none"}`} ref={headerRef} role="banner">
					<Header />
				</header>
		</>
	);
};

export default HeaderFixed;
