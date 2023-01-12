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

const Programme = () => {
	return (
		<>
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
										<Question>
											{module.questions.map((question) => (
												<li>{question}</li>
											))}
										</Question>
									</TexteExplicatifSection2>
								</TexteExplicatif>
							</ModuleSection>
						);
					})}
				</div>
				<SectionPartenaire>
					<SousTitre>PARTENAIRES À LA CONCEPTION</SousTitre>
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

					<SousTitre>MERCI À NOS COLLABORATEURS</SousTitre>
					<Participants>
						Myriam Fournier-Tombs, Caroline Wong, Sylvain Bédard, Samira Amil,
						Audrey L'Espérance, Marc Fraser, Marie-Hélène Vaillancourt et
						Stéphane Dubuc
					</Participants>
				</SectionPartenaire>
			</Wrapper>
		</>
	);
};

export default Programme;

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
		padding-left: 1em;
		padding-right: 1em;

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
		padding-left: 1em;
		padding-right: 1em;

		@media ${device.laptop} {
			width: 300px;
		}
	}
`;

const RisuqLogo = styled.a`
	img {
		margin-top: 1em;
		padding-left: 0.5em;
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
		padding-left: 0.5em;

		@media ${device.laptop} {
			width: 280px;
		}
	}
`;

const Participants = styled.p`
	margin-top: 1em;

	@media ${device.laptop} {
		max-width: 800px;
	}
`;
