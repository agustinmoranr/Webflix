import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/img/netflix.svg';
import profile from '../assets/img/profile.jpg';
import useMediaQuery from '../utils/useMediaQuery';
import useWindowScrollY from '../utils/useWindowScrollY';

const sections = [
	'Mi lista',
	'Series japonesas',
	'Series escandinavias',
	'Películas colombianas',
	'Dramas socials de TV',
	'Películas alemanas',
	'Películas documentales',
	'Películas de terror',
	'Misterios para TV',
	'Películas infantiles y familiares',
	'Dramas coreanos basados en webcómics',
	'Wésterns',
	'Series de adolescentes',
	'Películas italianas',
	'Películas brasileñas',
	'Series de fantasía',
];

const Header = () => {
	const [navColor, setNavColor] = useState(false);

	const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

	const [showSearch, setShowSearch] = useState(false);
	const [placeholderText, setPlaceholderText] = useState(true);

	const [showSiteNav, setShowSiteNav] = useState(false);

	const scrollY = useWindowScrollY();

	const hamburgerBtnRef = useRef();
	const navRef = useRef();
	const searchInputRef = useRef();
	const formSearchRef = useRef();

	const min680Query = useMediaQuery('min', 680);
	const max1024Query = useMediaQuery('max', 1024);

	useEffect(() => {
		if (!(min680Query && max1024Query)) setShowSiteNav(false);
	}, [min680Query, max1024Query]);

	useEffect(() => {
		if (min680Query) setPlaceholderText(true);
		if (!min680Query) {
			setPlaceholderText(false);
			setShowSearch(false);
		}
	}, [min680Query]);

	useEffect(() => {
		if (showSearch) {
			formSearchRef.current.classList.add('show-search');
			searchInputRef.current.classList.add('show-input');
			searchInputRef.current.focus();
		} else {
			formSearchRef.current.classList.remove('show-search');
			searchInputRef.current.classList.remove('show-input');
		}
	}, [showSearch]);

	useEffect(() => {
		if (scrollY > 25) {
			setNavColor(true);
		} else {
			setNavColor(false);
		}
	}, [scrollY]);

	useEffect(() => {
		if (min680Query) setShowHamburgerMenu(false);
	}, [min680Query]);

	useEffect(() => {
		if (showHamburgerMenu) {
			hamburgerBtnRef.current.classList.add('active');
		} else {
			hamburgerBtnRef.current.classList.remove('active');
		}
	}, [showHamburgerMenu]);

	const handleHideMenu = (e) => setShowHamburgerMenu(!showHamburgerMenu);

	const handleHideNav = (e) => setShowSiteNav(!showSiteNav);

	const handleSearch = (e) => setShowSearch(!showSearch);

	return (
		<header className={navColor ? 'active' : ''}>
			<div className='site-navigation'>
				<div className='menu-wrapper'>
					<button
						onClick={handleHideMenu}
						className='hamburger__btn material-icons'>
						menu
					</button>
					<picture className='logo-container'>
						<img src={logo} alt='Logo del sitio web Netflix' />
					</picture>
				</div>
				<span onClick={handleHideNav} className='menu-wrapper-explore'>
					<span>Explorar</span>
					<i className='material-icons'>arrow_drop_down</i>
				</span>
				<nav
					ref={navRef}
					className={
						showSiteNav
							? 'site-navigation__items dropdown'
							: 'site-navigation__items'
					}>
					<ul>
						<li>
							<a href='/'>Inicio</a>
						</li>
						<li>
							<a href='/'>Series</a>
						</li>
						<li>
							<a href='/'>Películas</a>
						</li>
						<li>
							<a href='/'>Novedades populares</a>
						</li>
						<li>
							<a href='/'>Mi lista</a>
						</li>
					</ul>
				</nav>
			</div>

			<div ref={hamburgerBtnRef} className='hamburger'>
				<nav className='hamburger__nav'>
					<div className='hamburger__nav__profile'>
						<picture>
							<img src={profile} alt='User profile' />
						</picture>
						<ul className='hamburger__nav__sections'>
							<li>Cuenta</li>
							<li>Centro de ayuda</li>
							<li>Cerrar sesión en Netflix</li>
						</ul>
					</div>
					<ul className='hamburger__nav__sections'>
						{sections.map((section, index) => (
							<li key={index}>{section}</li>
						))}
					</ul>
				</nav>
			</div>
			<nav className='account-navigation'>
				<ul>
					<li>
						<form ref={formSearchRef} className='search'>
							<label
								onClick={handleSearch}
								htmlFor='searchInput'
								name='searchInput'
								className='material-icons'>
								search
							</label>
							<input
								ref={searchInputRef}
								id='searchInput'
								type='text'
								name='searchInput'
								placeholder={
									placeholderText ? 'Títulos, personas, géneros' : 'Buscar'
								}
							/>
						</form>
					</li>
					<li>
						<i className='material-icons'>redeem</i>
					</li>
					<li>
						<i className='material-icons'>notifications</i>
					</li>
					<li className='profile-details'>
						<a href='/'>
							<img src={profile} alt='User profile' />
						</a>
						<i className='material-icons'>arrow_drop_down</i>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
