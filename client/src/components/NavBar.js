import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoGoldPng from '../assets/LogoGoldPng.png';
import LogoRedPng from '../assets/LogoRedPng.png';
import { device } from '../components/MediaQueries';
import { titles } from '../data';

const NavBar = () => {
	const [show, setShow] = useState(true);

	const controlNavbar = () => {
		if (window.scrollY > 100) {
			setShow(false);
		} else {
			setShow(true);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, []);

	return (
		<>
			<BeigeUnderWrapper>
				<NavWrapper style={{ display: { show } }}>
					<Logo>
						<Link to='/'>
							<img
								src={LogoGoldPng}
								alt='Logo'
								onMouseOver={(e) => (e.currentTarget.src = LogoRedPng)}
								onMouseOut={(e) => (e.currentTarget.src = LogoGoldPng)}
							/>
						</Link>
						<TitreLogo>
							Conseil en
							<br />
							apprentissage
							<br />
							collectif
						</TitreLogo>
					</Logo>

					<SecondSection>
						<Nav>
							<NavLink
								to='/'
								style={({ isActive }) => ({
									textDecoration: !isActive ? 'none' : 'underline',
									textDecorationThickness: !isActive ? 'none' : '2px',
								})}
							>
								<Page>accueil</Page>
							</NavLink>
							<NavLink
								to='/programme'
								style={({ isActive }) => ({
									textDecoration: !isActive ? 'none' : 'underline',
									textDecorationThickness: !isActive ? 'none' : '2px',
								})}
							>
								<Page>programme</Page>
							</NavLink>
							<NavLink
								to='/equipe'
								style={({ isActive }) => ({
									textDecoration: !isActive ? 'none' : 'underline',
									textDecorationThickness: !isActive ? 'none' : '2px',
								})}
							>
								<Page>équipe</Page>
							</NavLink>
						</Nav>
						<ModuleNav>
							{titles.map((title) => {
								return (
									<NavLink
										key={title}
										to={`/programme/${title}`}
										style={({ isActive }) => ({
											fontWeight: !isActive ? '400' : '700',
										})}
									>
										<div>{title}</div>
									</NavLink>
								);
							})}
						</ModuleNav>
					</SecondSection>
				</NavWrapper>
			</BeigeUnderWrapper>
		</>
	);
};

export default NavBar;

const BeigeUnderWrapper = styled.div`
	background-color: #fffaea;
	position: fixed;
	top: 0;
	z-index: 1500;
	width: 100%;
	padding: 0;
	margin: 0;

	@media ${device.mobileS} {
		height: 180px;
	}

	@media ${device.mobileM} {
		height: 234px;
	}

	@media ${device.mobileL} {
		height: 234px;
	}

	// 20px de marge de chaque coté
	@media ${device.tablet} {
		height: 168px;
	}

	// 40px de marge de chaque coté
	@media ${device.laptop} {
		height: 120px;
	}

	// 60px de marge de chaque côté
	@media ${device.laptopL} {
		height: 120px;
	}

	// 120px de marge de chaque côté
	@media ${device.desktop} {
	} ;
`;

const NavWrapper = styled.div`
	padding: 1em;
	max-width: 100%;
	margin-bottom: em;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	position: fixed;
	z-index: 2000;
	top: 0;
	transition-timing-function: ease-in;
	transition: 0.5s;

	a {
		&:hover {
			color: var(--red);
		}

		&:focus {
			box-shadow: none;
			outline: none;
		}
	}

	@media ${device.mobileS} {
		max-width: 320px;
	}

	@media ${device.mobileM} {
		max-width: 375px;
	}

	@media ${device.mobileL} {
		max-width: 425px;
	}

	// 20px de marge de chaque coté
	@media ${device.tablet} {
		max-width: 728px;
	}

	// 10px de marge de chaque coté
	@media ${device.laptop} {
		max-width: 1024px;
		margin-left: 175px;
	}

	// 60px de marge de chaque côté
	@media ${device.laptopL} {
		max-width: 13204px;
	}

	// 120px de marge de chaque côté
	@media ${device.desktop} {
		max-width: 2320px;
	} ;
`;

const SecondSection = styled.section`
	display: block;
	/* 	margin-right: 3em; */
`;

const Logo = styled.div`
	display: flex;
	flex-direction: row;
	font-weight: 700;
	gap: 0.5em;
	margin-bottom: 1em;
	width: 170px;
	img {
		width: 3.125em;
	}

	@media ${device.mobileM} {
	}

	@media ${device.mobileL} {
	}

	// 20px de marge de chaque coté
	@media ${device.tablet} {
		width: 190px;
	}

	// 40px de marge de chaque coté
	@media ${device.laptop} {
		width: 225px;
	}

	// 60px de marge de chaque côté
	@media ${device.laptopL} {
	}

	// 120px de marge de chaque côté
	@media ${device.desktop} {
	} ;
`;

const TitreLogo = styled.p`
	line-height: 1;
	&:hover {
		color: var(--darkgrey);
	}
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	gap: 1em;
	margin-bottom: 1em;
`;

const Page = styled.a`
	font-weight: 700;
	color: var(--darkgrey);
`;

const ModuleNav = styled.a`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 0.5em;
	font-size: 0.8em;
	color: var(--lightgrey);
	margin-bottom: 1em;
`;
