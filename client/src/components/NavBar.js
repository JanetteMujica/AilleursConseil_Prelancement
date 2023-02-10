import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoGoldPng from '../assets/LogoGoldPng.png';
import LogoRedPng from '../assets/LogoRedPng.png';
import { device } from '../components/MediaQueries';

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
						<TitreLogo>ailleurs.</TitreLogo>
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
		height: 120px;
	}

	@media ${device.mobileM} {
		height: 120px;
	}

	@media ${device.mobileL} {
		height: 120px;
	}

	@media ${device.tablet} {
		height: 100px;
	}

	@media ${device.laptop} {
		height: 110px;
	}

	@media ${device.laptopL} {
	}

	@media ${device.desktop} {
		height: 160px;
	} ;
`;

const NavWrapper = styled.div`
	padding: 1em;
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
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

	@media ${device.tablet} {
		flex-wrap: nowrap;
		padding-top: 2em;
		padding-left: 2em;
		padding-right: 2em;
	}

	@media ${device.laptop} {
		padding-top: 2em;
		padding-left: 7em;
		padding-right: 7em;

		@media ${device.laptopL} {
			padding-left: 13em;
			padding-right: 13em;
		}

		@media ${device.desktop} {
			padding-top: 3em;
			padding-left: 20em;
			padding-right: 20em;
		}
	}
`;

const SecondSection = styled.section`
	width: 100%;
`;

const Logo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
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
	@media ${device.mobileM} {
		justify-content: flex-end;
	}
`;

const Page = styled.a`
	font-weight: 700;
	color: var(--darkgrey);
`;
