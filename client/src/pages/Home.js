import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import { device } from '../components/MediaQueries';
import { Link } from 'react-router-dom';
import BdOne from '../assets/Bd1.png';
import BdTwo from '../assets/Bd2.png';
import BdThree from '../assets/Bd3.png';
import BdFour from '../assets/Bd4.png';

const Home = () => {
	return (
		<>
			<Wrapper>
				<Titre>ailleurs.</Titre>

				<Para>
					À l'intersection de la recherche et du terrain, nous soutenons les
					initiatives de praticiens, d'utilisateurs et de gestionnaires visant à
					humaniser les services de santé et d'éducation.
				</Para>
				<Bold>
					#allerailleurs #contenuouvert #donneesouvertes #gouvernancedescommuns
					#innovationsociale
				</Bold>

				<Titre>Pouvoirs patients</Titre>

				<Para>
					Le système de santé doit comprendre, valoriser, et déployer la
					diversité des pouvoirs patients.
				</Para>

				<Button to='/pouvoirs'>POUVOIRS PATIENTS</Button>

				<CarouselSection>
					<Carousel slide={false} variant='dark'>
						<Carousel.Item>
							<img
								src={BdOne}
								alt="Tout le monde travaille en silos! Qu'est-ce qu'on peut faire?"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src={BdTwo}
								alt='Facile! On démarre une communcauté de pratique'
							/>
						</Carousel.Item>

						<Carousel.Item>
							<img src={BdThree} alt='Bonne idée!' />
						</Carousel.Item>

						<Carousel.Item>
							<img
								src={BdFour}
								alt="Oui, mais .. qu'est-ce qu'on faite pour que ça marche?"
							/>
						</Carousel.Item>
					</Carousel>
				</CarouselSection>

				<Titre>Réussir le démarrage d'une communauté de pratique</Titre>
				<RightSection>
					<Introduction>
						<p>
							Ce programme s'adresse aux<Bold> facilitatrices </Bold>et
							<Bold> facilitateurs </Bold> de communauté de pratique
						</p>
						<p>
							Il vous donnera une démarche structurée pour démarrer une
							<Bold> communauté de pratique</Bold>, qui sera
							<Bold> mobilisatrice </Bold>
							et<Bold> pérenne </Bold>
						</p>
					</Introduction>

					<Button to='/programme'>APERÇU DU PROGRAMME</Button>
				</RightSection>
			</Wrapper>
		</>
	);
};

export default Home;

const Wrapper = styled.section`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding-left: 1em;
	padding-right: 1em;
	gap: 1.5em;
	align-items: flex-start;
	margin-top: 11em;
	width: 100%;
	margin-left: auto;
	margin-right: auto;

	@media ${device.tablet} {
		margin-top: 10em;
		padding-left: 2em;
		padding-right: 2em;
		gap: 2em;
	}

	@media ${device.laptop} {
		margin-top: 12em;
		padding-left: 7em;
		padding-right: 7em;
	}

	@media ${device.laptopL} {
		padding-left: 13em;
		padding-right: 13em;
		gap: 3em;
	}

	@media ${device.desktop} {
		padding-left: 20em;
		padding-right: 20em;
		margin-top: 14em;
		gap: 2em;
	}
`;

const Para = styled.div``;

const Titre = styled.h1`
	@media ${device.tablet} {
		width: 290px;
	}
	@media ${device.laptop} {
		font-size: 1.6em;
	}

	@media ${device.laptopL} {
		width: 420px;
		font-size: 2em;
	}

	@media ${device.desktop} {
		width: 700px;
		font-size: 3em;
	}
`;

const RightSection = styled.div`
	margin-bottom: 1em;
	@media ${device.tablet} {
		width: 50%;
	}

	@media ${device.laptop} {
		font-size: 1.6em;
	}
	@media ${device.laptopL} {
		font-size: 1em;
	}

	@media ${device.desktop} {
		font-size: 1.7em;
	}
`;

const Introduction = styled.p`
	display: flex;
	flex-direction: column;
	gap: 1em;
	color: var(--lightgrey);
	margin-bottom: 2em;

	@media ${device.tablet} {
	}

	@media ${device.laptop} {
		margin-bottom: 2em;
	}

	@media ${device.laptopL} {
		margin-bottom: 2em;
	}

	@media ${device.desktop} {
		margin-bottom: 2em;
	}
`;

const Bold = styled.span`
	font-weight: 700;
`;

const Button = styled(Link)`
	border: none;
	background-color: var(--red);
	color: #fffaea;
	border-radius: 1em;
	padding: 0.8em 1.6em 0.8em;
	font-weight: 700;
	font-size: 0.8em;
	&:hover {
		background-color: var(--green);
		color: #fffaea;
	}
`;

const CarouselSection = styled.div`
	@media ${device.tablet} {
		padding-right: 2em;
		padding-left: 2em;
		gap: 2em;
	}

	@media ${device.laptop} {
		margin-top: 7em;
		padding-right: 7em;
		padding-left: 7em;
		padding-bottom: 4em;
		gap: 3em;
	}

	@media ${device.laptopL} {
		margin-top: 7em;
		padding-right: 13em;
		padding-left: 13em;
		padding-bottom: 4em;
		gap: 3em;
	}

	@media ${device.desktop} {
		margin-top: 7em;
		padding-right: 20em;
		padding-left: 20em;
		padding-bottom: 4em;
		gap: 3em;
	}

	img {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
		height: auto;

		@media ${device.tablet} {
			width: 415px;
		}

		@media ${device.laptop} {
			width: 460px;
		}

		@media ${device.laptopL} {
			width: 600px;
		}

		@media ${device.desktop} {
			width: 900px;
		}
	}
`;
