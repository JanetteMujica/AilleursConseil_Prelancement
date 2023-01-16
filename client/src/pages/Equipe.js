import React from 'react';
import styled from 'styled-components';
import Janette from '../assets/janette.png';
import Codes from '../assets/codes.png';
import Famille from '../assets/collation.png';
import Mathieu from '../assets/mathieu.png';
import { device } from '../components/MediaQueries';

const Equipe = () => {
	return (
		<>
			<Wrapper>
				<TitrePage>ÉQUIPE</TitrePage>
				<LesBios>
					<section>
						<img
							src={Janette}
							alt='Logo'
							onMouseOver={(e) => (e.currentTarget.src = Codes)}
							onMouseOut={(e) => (e.currentTarget.src = Janette)}
						/>

						<Intro>
							<Nom>Janette Mujica</Nom>
							<Titre>DÉVELOPPEUSE ET DESIGNER</Titre>
						</Intro>
						<Statement>
							Chez Ailleurs, je m’intéresse à mobiliser la connaissance vers
							l'action.
						</Statement>
						<Bio>
							Durant une douzaine d’année, j’ai optimisé la productivité de
							dirigeants en tant qu’adjointe exécutive. J’entreprends une
							réorientation de carrière visant à prioriser l’expérience
							utilisateur. Je suis diplomée en gestion de l'innovation à HEC
							Montréal et en développement web à Concordia.
						</Bio>
						<Bio>
							J’étudie l’analytique d'affaires à HEC et les humanités numériques
							à l'UdeM. Mon objectif est d’élaborer des services qui sont bons
							pour les utilisateurs, les organisations et la société.
						</Bio>
						<LesLiens>
							<a
								href='https://www.linkedin.com/in/janette-mujica-59272a6a/'
								target='_blank'
								rel='noreferrer'
							>
								Ajoutez-moi sur LinkedIn
							</a>

							<a
								href='https://janettemujica.com/'
								target='_blank'
								rel='noreferrer'
							>
								Visitez mon portfolio
							</a>
						</LesLiens>
					</section>

					<section>
						<img
							src={Mathieu}
							alt='Logo'
							onMouseOver={(e) => (e.currentTarget.src = Famille)}
							onMouseOut={(e) => (e.currentTarget.src = Mathieu)}
						/>
						<Intro>
							<Nom>Mathieu Bouchard</Nom>
							<Titre>CRÉATEUR DE CONTENU</Titre>
						</Intro>
						<Statement>
							Chez Ailleurs, je m’intéresse à la gouvernance et au financement
							de l'innovation sociale.
						</Statement>
						<Bio>
							Après des études en économie appliquée, j’ai travaillé huit ans
							comme analyste en investissements et conseiller stratégique pour
							des grandes caisses de retraite. J’ai ensuite quitté le milieu de
							l’investissement pour compléter un doctorat en management à HEC
							Montréal.
						</Bio>
						<Bio>
							Mes travaux de recherche portent sur l’entraide, la pair-aidance,
							l’apprentissage collectif et l’organisation par et pour les
							usagers dans les systèmes professionnels.
						</Bio>

						<LesLiens>
							<a
								href='https://www.linkedin.com/in/mathieubcd/?originalSubdomain=ca'
								target='_blank'
								rel='noreferrer'
							>
								Ajoutez-moi sur LinkedIn
							</a>

							<a
								href='https://www.mathieubcd.com/'
								target='_blank'
								rel='noreferrer'
							>
								Visitez mon site web académique
							</a>
						</LesLiens>
					</section>
				</LesBios>
			</Wrapper>
		</>
	);
};

export default Equipe;

const Wrapper = styled.div`
	margin-top: 13em;
	padding-left: 1em;
	padding-right: 1em;
	padding-bottom: 1em;

	@media ${device.tablet} {
		margin-top: 10em;
		padding-left: 2em;
		padding-right: 2em;
	}

	@media ${device.laptop} {
		margin-top: 12em;
		padding-left: 7em;
		padding-right: 7em;
	}

	@media ${device.laptopL} {
		padding-left: 13em;
		padding-right: 13em;
	}

	@media ${device.desktop} {
		padding-left: 20em;
		padding-right: 20em;
		margin-top: 14em;
	}
`;

const LesBios = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 5em;
	img {
		width: 150px;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 16px;
		width: 100%;
	}

	@media ${device.laptop} {
		section {
			width: 40%;
		}
	}
`;

const TitrePage = styled.h1`
	font-weight: 700;
	margin-bottom: 1.5em;
`;

const Intro = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
`;

const Nom = styled.div`
	font-size: 1.6em;
	font-weight: 700;
`;

const Titre = styled.div`
	color: var(--red);
	font-size: 0.8em;
	font-weight: 700;
`;

const Statement = styled.div`
	font-size: 1.2em;
	font-style: italic;
	font-weight: 700;
`;

const Bio = styled.div``;

const LesLiens = styled.section`
	margin-top: 1em;
	font-weight: 700;
	text-decoration: underline;
	font-style: italic;
	font-size: 1em;
`;
