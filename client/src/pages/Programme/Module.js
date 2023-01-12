import React from 'react';
import { useParams } from 'react-router-dom';
import { allModules } from '../../data';
import styled from 'styled-components';
import { device } from '../../components/MediaQueries';

const Module = () => {
	const { title } = useParams();

	console.log(title, 'USEPARAMS');

	return (
		<>
			<div>
				{allModules.map((module) => {
					const image = require(`../../assets/${module.imageSrcId}.png`);
					if (module.title === title)
						return (
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
						);
				})}
			</div>
		</>
	);
};

export default Module;

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

const ColorSection = styled.div``;

const ModuleTitre = styled.div``;

const SousTitre = styled.div``;

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
