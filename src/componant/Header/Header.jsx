import React, { useRef, useEffect, useState } from 'react';
import "./Header.css"

import { BsListNested } from "react-icons/bs";
import ControlBox from '../control-box/control-box';
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { TOGOLE } from '../../redux/actions/types';

const Header = (props) => {

	const dispatch = useDispatch()

	const handelClick = () =>{
		dispatch({
			type: TOGOLE
		});
	}

// send open to mobile

	return (
		<div className="container">
			<div className="row align-items-center">
				<div className="col-11 col-xl-2">
					<h1 className="mb-0 site-logo">
						<a href="index.html" id='medo' className="text-white mb-0">Medo</a>
					</h1>
				</div>
				<div className="col-12 col-md-10 d-none d-xl-block">
					<nav className="site-navigation position-relative text-right" role="navigation">
						<ul className="site-menu js-clone-nav site-nav-wrap mr-auto d-none d-lg-block">
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
					</nav>
				</div>
				<div onClick={handelClick} className="d-inline-block d-xl-none ml-md-0 mr-auto py-3 col-1" style={{ position: "relative", top: "3px" }}>
					<button className="site-menu-toggle js-menu-toggle text-white fs-3 fw-bold text-center border-0 bg-transparent">
						<span><BsListNested /></span>
					</button>
				</div>
			</div>
		</div>
	);
}
export default Header;

