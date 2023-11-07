import React, { useEffect, useRef } from 'react';
import "./Header-mob.css"
import { AiOutlineClose } from "react-icons/ai";
import ControlBox from '../control-box/control-box';
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { TOGOLE } from '../../redux/actions/types';

const HeaderMob = () => {

	const stateopen = useSelector(state => state.main.openvalue)

	const dispatch = useDispatch()

	const handelClick = () => {

		dispatch({
			type: TOGOLE
		});
	}

	const menu = useRef()
	const closemenu = useRef()

		useEffect(() => {
			if (stateopen === true) {
				// menu.current.style.right = "330px"
				document.body.classList.add("offcanvas-menu")
			} else if (stateopen === false) {
				// menu.current.style.right = "0px"
				document.body.classList.remove("offcanvas-menu")
			}
		}, [stateopen])





	return (
		<>
			<div className="site-mobile-menu" ref={menu}>
				<div className="site-mobile-menu-header">
					<div className="site-mobile-menu-close mt-3">
						<span className='text-black' ref={closemenu} onClick={handelClick}>
							<AiOutlineClose />
						</span>
					</div>
				</div>
				<div className="site-mobile-menu-body">
					<ul className="site-menu js-clone-nav site-nav-wrap mr-auto  d-lg-block">
						<li className="active"><a href="index.html"><span>Home</span></a></li>
						<li><a href="#"><span>About</span></a></li>
						<li><a href="#"><span>Resume </span></a></li>
						<li><a href="#"><span>Services</span></a></li>
						<li><a href="#"><span>Work</span></a></li>
						<li><a href="#"><span>Contact</span></a></li>
						<li className="has-children">
							<a href="javascript:void(0);"><span>Settings
								<BsFillCaretDownFill />
							</span></a>
							<ul className="dropdown arrow-top">
								<ControlBox />
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default HeaderMob;
