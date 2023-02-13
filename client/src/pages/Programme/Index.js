import React from 'react';
import { allModules } from '../../data';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ImSphere, ImGift } from 'react-icons/im';
import { FiClock } from 'react-icons/fi';
import { device } from '../../components/MediaQueries';
import Ceppp from '../../assets/ceppp.png';
import Ruiss from '../../assets/ruiss.png';
import Risuq from '../../assets/risuq.png';
import Ssa from '../../assets/ssa.png';
import heart from '../../assets/heart.png';
import { titles } from '../../data';
import { Link } from 'react-router-dom';

const Programme = () => {
	return (
		<>
			<BeigeModuleNav></BeigeModuleNav>
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
			<Wrapper>
				<TitreSection>
					<TitrePage>
						Réussir le démarrage d'une communauté de pratique
					</TitrePage>
				</TitreSection>
				<Apropos>
					<Introduction>
						<p>
							<BoldTitre>À PROPOS DU PROGRAMME</BoldTitre>
						</p>
						<p>
							Il s'adresse aux<Bold> facilitatrices </Bold>et
							<Bold> facilitateurs </Bold>de communauté de pratique
						</p>
						<p>
							Il vous donnera une démarche structurée pour démarrer une
							<Bold> communauté de pratique</Bold>, qui sera
							<Bold> mobilisatrice </Bold>
							et<Bold> pérenne </Bold>
						</p>
					</Introduction>

					<Table>
						<tr>
							<td>
								<ImSphere />
							</td>
							<td>100% en ligne et asynchrone</td>
						</tr>
						<tr>
							<td>
								<FiClock />
							</td>
							<td>Env. 5hrs pour compléter</td>
						</tr>
						<tr>
							<td>
								<ImGift />
							</td>
							<td>Sans frais</td>
						</tr>
					</Table>
				</Apropos>
				<div>
					{allModules.map((module) => {
						const image = require(`../../assets/${module.imageSrcId}.png`);
						const imageGold = require(`../../assets/${module.imageGoldSrcId}.png`);
						return (
							<ModuleSection>
								<NavLink key={module.titre} to={`/programme/${module.titre}`}>
									<ModuleTitre>
										<SousTitre>MODULE</SousTitre>
										<Numero>
											<Id>{module.id}.</Id>
											<Titre>{module.module}</Titre>
										</Numero>
									</ModuleTitre>
								</NavLink>

								<TexteExplicatif>
									<TexteExplicatifSection1>
										<NavLink
											key={module.titre}
											to={`/programme/${module.titre}`}
										>
											<img
												src={image}
												alt={module.module}
												onMouseOver={(e) => (e.currentTarget.src = imageGold)}
												onMouseOut={(e) => (e.currentTarget.src = image)}
											/>
										</NavLink>
									</TexteExplicatifSection1>

									<TexteExplicatifSection2>
										<SousTitre>OBJECTIF</SousTitre>
										<div>{module.objectif}</div>
										{/* 										<Question>
											{module.questions.map((question) => (
												<li>{question}</li>
											))}
										</Question> */}
									</TexteExplicatifSection2>
								</TexteExplicatif>
							</ModuleSection>
						);
					})}
				</div>
				<Merci>
					Merci
					<img src={heart} />
				</Merci>
				<TitrePage>au comité consultatif</TitrePage>
				<ParaPremier>
					Le programme
					<Link to='/programme'>
						<Italic> Réussir le démarrage d'une communauté de pratique </Italic>
					</Link>
					été conçu à l'aide d'un processus de coconstruction des connaissances.
				</ParaPremier>
				<Para>
					Un comité consultatif ayant une variété d'expériences en lien avec des
					communautés de pratique dans le domaine des soins de santé a été
					réuni.
				</Para>
				<Para>
					<Link to='/equipe'>
						<Italic>Mathieu Bouchard </Italic>
					</Link>
					a accompagné le comité dans une série de six séances ayant pour but de
					valider et enrichir les éléments de contenu qui composent ce
					programme.
				</Para>

				<Comite>
					<MembreDiv>
						<Membre>
							<a
								href='https://www.linkedin.com/in/samira-amil-a9b74b39/?originalSubdomain=ca'
								target='_blank'
								rel='noreferrer'
							>
								Samira Amil
							</a>
						</Membre>
						<TitreRouge>MÉDECIN GÉNÉRALISTE ET CODIRECTRICE</TitreRouge>
						<TitreNoir>SSA RUISS Université Laval</TitreNoir>
					</MembreDiv>
					<MembreDiv>
						<Membre>
							<a
								href='https://ceppp.ca/team/sylvain-bedard/'
								target='_blank'
								rel='noreferrer'
							>
								Sylvain Bédard
							</a>
						</Membre>
						<TitreRouge>PATIENT COORDONATEUR, CHARGÉ DE PROJET</TitreRouge>
						<TitreNoir>CEPPP</TitreNoir>
					</MembreDiv>
					<MembreDiv>
						<Membre>
							<a
								href='https://www.linkedin.com/in/st%C3%A9phane-dubuc-9706449/?originalSubdomain=ca'
								target='_blank'
								rel='noreferrer'
							>
								Stéphane Dubuc
							</a>
						</Membre>
						<TitreRouge>
							COORDONNATEUR DES ACTIVITÉS DE PERTINENCE CLINIQUE
						</TitreRouge>
						<TitreNoir>MSSS</TitreNoir>
					</MembreDiv>
					<MembreDiv>
						<Membre>
							<a
								href='https://ceppp.ca/team/myriam-fournier-tombs/'
								target='_blank'
								rel='noreferrer'
							>
								Myriam Fournier-Tombs
							</a>
						</Membre>
						<TitreRouge>CONSEILLÈRE STRATÉGIQUE</TitreRouge>
						<TitreNoir>CEPPP</TitreNoir>
					</MembreDiv>
					<MembreDiv>
						<Membre>
							<a
								href='https://www.linkedin.com/in/marcdanielfraser/?originalSubdomain=ca'
								target='_blank'
								rel='noreferrer'
							>
								Marc Fraser
							</a>
						</Membre>
						<TitreRouge>CO-DIRECTEUR EXÉCUTIF</TitreRouge>
						<TitreNoir>RISUQ</TitreNoir>
					</MembreDiv>

					<MembreDiv>
						<Membre>
							<a
								href='https://www.linkedin.com/in/marcdanielfraser/?originalSubdomain=ca'
								target='_blank'
								rel='noreferrer'
							>
								Marie-Hélène Vaillancourt
							</a>
						</Membre>
						<TitreRouge>CODIRECTRICE EXÉCUTIVE</TitreRouge>
						<TitreNoir>RISUQ</TitreNoir>
					</MembreDiv>
				</Comite>

				<Merci>
					Merci
					<img src={heart} />
				</Merci>
				<TitrePage>à nos collaborateurs</TitrePage>

				<Comite>
					<MembreDiv>
						<Membre>
							<a
								href='https://ceppp.ca/team/audrey-lesperance/'
								target='_blank'
								rel='noreferrer'
							>
								Audrey L'Espérance
							</a>
						</Membre>
						<TitreRouge>
							ASSOCIÉ DE RECHERCHE ET RESPONSABLE SCIENTIFIQUE
						</TitreRouge>
						<TitreNoir>CEPPP</TitreNoir>
					</MembreDiv>

					<MembreDiv>
						<Membre>
							<a
								href='https://ceppp.ca/team/caroline-wong/'
								target='_blank'
								rel='noreferrer'
							>
								Caroline Wong
							</a>
						</Membre>
						<TitreRouge>DIRECTRICE EXÉCUTIVE</TitreRouge>
						<TitreNoir>CEPPP</TitreNoir>
					</MembreDiv>
				</Comite>
				<Merci>
					Merci
					<img src={heart} />
				</Merci>
				<TitrePage>à nos partenaires</TitrePage>
				<PartenaireLogo>
					<CepppLogo href='https://ceppp.ca/' target='_blank'>
						<img src={Ceppp} />
					</CepppLogo>

					<SsaLogo href='https://ssaquebec.ca/' target='_blank'>
						<img src={Ssa} />
					</SsaLogo>

					<RisuqLogo href='https://risuq.uquebec.ca/' target='_blank'>
						<img src={Risuq} />
					</RisuqLogo>

					<RuissLogo href='https://ruisss.umontreal.ca/' target='_blank'>
						<img src={Ruiss} />
					</RuissLogo>
				</PartenaireLogo>
			</Wrapper>
		</>
	);
};

export default Programme;

const BeigeModuleNav = styled.div`
	background-color: #fffaea;
	position: fixed;
	top: 50px;
	z-index: 200;
	width: 100%;
	padding: 0;
	margin: 0;

	@media ${device.mobileS} {
		height: 125px;
	}

	@media ${device.mobileM} {
		height: 125px;
	}

	@media ${device.mobileL} {
		height: 125px;
	}

	@media ${device.tablet} {
		height: 85px;
	}

	@media ${device.laptop} {
		height: 95px;
	}

	@media ${device.laptopL} {
	}

	@media ${device.desktop} {
	} ;
`;

const ModuleNav = styled.a`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 0.5em;
	font-size: 0.8em;
	color: var(--lightgrey);
	margin-bottom: 1em;
	z-index: 10000;
	margin-left: 1em;
	margin-right: 1em;
	position: fixed;
	top: 120px;

	@media ${device.mobileM} {
	}

	@media ${device.mobileL} {
	}

	@media ${device.tablet} {
	}

	@media ${device.tablet} {
		margin-top: 60px;
		padding-right: 7.5em;
	}
`;

const Wrapper = styled.section`
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

const Italic = styled.span`
	font-style: italic;
	font-weight: bold;
`;

const Para = styled.div`
	margin-bottom: 1em;
`;

const ParaPremier = styled.div`
	margin-top: 1.5em;
	margin-bottom: 1em;
`;

const TitreSection = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const TitrePage = styled.h1`
	font-weight: 700;

	@media ${device.laptop} {
		font-size: 1.6em;
	}

	@media ${device.laptopL} {
		font-size: 2em;
	}

	@media ${device.desktop} {
		font-size: 3em;
	}
`;

const Apropos = styled.section`
	margin-top: 2em;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 2em;

	@media ${device.tablet} {
	}

	@media ${device.laptop} {
		gap: 3em;
	}
`;

const Introduction = styled.p`
	display: flex;
	flex-direction: column;
	gap: 1em;
	color: var(--lightgrey);
	margin-bottom: 1em;
	width: 343px;

	@media ${device.tablet} {
		width: 49%;
	}

	@media ${device.laptop} {
		padding-right: 2em;
	}
`;

const Bold = styled.span`
	font-weight: 700;
`;

const BoldTitre = styled.span`
	font-weight: 700;
`;

const Table = styled.table`
	color: var(--darkgrey);
	font-weight: 700;
	width: 450px;

	@media ${device.tablet} {
		width: 45%;
	}

	tr {
		display: flex;
		flex-direction: row;
		gap: 1em;
		padding-bottom: 1em;
	}

	td {
	}
`;

const ModuleSection = styled.section`
	img {
		margin-top: 1em;
		width: 100%;
		height: auto;

		@media ${device.tablet} {
			width: 250px;
		}

		@media ${device.laptop} {
			width: 250px;
		}

		@media ${device.laptopL} {
			width: 250px;
		}

		@media ${device.desktop} {
			width: 400px;
		}
	}
`;

const ModuleTitre = styled.section`
	margin-top: 4em;
	display: flex;
	flex-direction: column;
	font-weight: 700;
	align-items: baseline;

	@media ${device.desktop} {
		margin-bottom: 0.5em;
	}
`;

const Numero = styled.section`
	display: flex;
	flex-direction: row;
	gap: 0.5em;
`;

const Id = styled.div`
	font-size: 2em;
`;
const Titre = styled.div`
	font-size: 2em;
`;

const TexteExplicatif = styled.section`
	@media ${device.tablet} {
		display: flex;
		flex-direction: row;
		gap: 2em;
	}
`;

const TexteExplicatifSection1 = styled.section`
	width: 25%;

	@media ${device.tablet} {
		width: 250px;
	}

	@media ${device.laptop} {
		width: 250px;
	}

	@media ${device.laptopL} {
		width: 250px;
	}

	@media ${device.desktop} {
		width: 400px;
	}
`;

const TexteExplicatifSection2 = styled.section`
	@media ${device.laptop} {
		width: 720px;
	}
	@media ${device.desktop} {
		width: 720px;
	}
`;

const SousTitre = styled.p`
	margin-top: 1em;
	font-size: 1em;
	font-weight: 700;
`;

const Question = styled.ul`
	margin-top: 1em;
	padding-left: 1em;
	color: var(--lightgrey);
	font-style: italic;
	list-style-type: disc;

	li {
	}
`;

const Merci = styled.div`
	margin-top: 1.5em;
	font-family: 'Permanent Marker', cursive;
	font-size: 4em;
	color: var(--darkgrey);
	img {
		margin-left: 0.2em;
		width: 70px;
		height: auto;
	}
`;

const TitreRouge = styled.div`
	color: var(--red);
	font-size: 0.8em;
	font-weight: 700;
`;

const TitreNoir = styled.div`
	color: var(--darkgrey);
	font-size: 0.8em;
	font-weight: 700;
`;

const Comite = styled.section`
	margin-top: 1.5em;
	display: flex;
	flex-direction: row;
	gap: 1em;
	flex-wrap: wrap;
`;

const MembreDiv = styled.h2`
	width: 255px;
`;

const Membre = styled.h2`
	font-weight: 700;
	font-size: 1.4em;
`;

const SectionPartenaire = styled.div`
	background-color: #fada80;
	padding-top: 3em;
	padding-bottom: 3em;
	margin-top: 6em;
	margin-bottom: 0;

	@media ${device.tablet} {
		padding-left: 3em;
		padding-right: 3em;
	}

	p {
		padding-left: 1em;
		padding-right: 1em;
	}
`;

const PartenaireLogo = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1em;

	@media ${device.tablet} {
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1em;
	}

	@media ${device.laptop} {
		gap: 3em;
	}
`;

const CepppLogo = styled.a`
	img {
		margin-top: 2em;
		width: 280px;
		height: auto;

		@media ${device.laptop} {
			width: 400px;
		}
	}
`;

const SsaLogo = styled.a`
	img {
		margin-top: 2em;
		width: 230px;
		height: auto;

		@media ${device.laptop} {
			width: 300px;
		}
	}
`;

const RisuqLogo = styled.a`
	img {
		margin-top: 1em;
		width: 180px;
		height: auto;

		@media ${device.laptop} {
			width: 250px;
		}
	}
`;

const RuissLogo = styled.a`
	img {
		margin-top: 1em;
		margin-bottom: 2em;
		width: 240px;
		height: auto;

		@media ${device.laptop} {
			width: 280px;
		}
	}
`;
