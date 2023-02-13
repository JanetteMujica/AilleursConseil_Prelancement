import React from 'react';
import { useParams } from 'react-router-dom';
import { allModules } from '../../data';
import styled from 'styled-components';
import { device } from '../../components/MediaQueries';
import { titles } from '../../data';
import { NavLink } from 'react-router-dom';

const Module = () => {
	const { title } = useParams();

	console.log(title, 'USEPARAMS');

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

			<div>
				{allModules.map((module) => {
					const image = require(`../../assets/${module.imageSrcId}.png`);
					if (module.title === title)
						return (
							<>
								<ColorSection style={{ backgroundColor: module.couleur }}>
									<ModuleSection>
										<img src={image} alt={module.module} />
										<ModuleTitre>
											<Numero>
												<Id>{module.id}.</Id>
												<Titre> {module.module}</Titre>
											</Numero>
											{/* 	<SousTitre>Contenu à venir</SousTitre> */}
										</ModuleTitre>
									</ModuleSection>
								</ColorSection>

								<TexteExplicatifSection>
									<SousTitre>OBJECTIF</SousTitre>
									<div>{module.objectif}</div>
									<Question>
										{module.questions.map((question) => (
											<li>{question}</li>
										))}
									</Question>
								</TexteExplicatifSection>
							</>
						);
				})}
			</div>
		</>
	);
};

export default Module;

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

const ModuleSection = styled.section`
	margin-top: 13em;
	padding-left: 1em;
	padding-right: 1em;
	padding-bottom: 1em;

	@media ${device.tablet} {
		margin-top: 10em;
		padding-left: 2em;
		padding-right: 2em;
		display: flex;
		flex-direction: row;
		gap: 3em;
		align-items: center;
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
const TexteExplicatifSection = styled.section``;

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

const ColorSection = styled.div``;

const ModuleTitre = styled.div``;

const Numero = styled.h1`
	color: #fffaea;
	padding-top: 1em;
	font-size: 2.3em;

	@media ${device.tablet} {
		font-size: 2.8em;
	}

	@media ${device.laptop} {
	}

	@media ${device.laptopL} {
	}

	@media ${device.desktop} {
	}
`;

const Id = styled.span``;

const Titre = styled.span``;
