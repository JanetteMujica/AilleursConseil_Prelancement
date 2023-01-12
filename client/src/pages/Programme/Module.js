import React from 'react';
import { useParams } from 'react-router-dom';
import { allModules } from '../../data';
import { titles } from '../../data';
import styled from 'styled-components';
import { device } from '../../components/MediaQueries';

const Module = () => {
	const { title } = useParams();

	console.log(title, 'USEPARAMS');

	return (
		<>
			<div></div>
			<div>
				{allModules.map((module) => {
					const image = require(`../../assets/${module.imageSrcId}.png`);
					if (module.title === title)
						return (
							<ModuleSection>
								<img src={image} alt={module.module} />
								<ModuleTitre>
									<Numero>
										<Id>{module.id}.</Id>
										<Titre>{module.module}</Titre>
									</Numero>
									<SousTitre>
										Contenu à venir. Rejoingnez notre liste de diffusion plus
										bas.
									</SousTitre>
								</ModuleTitre>
							</ModuleSection>
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

const ColorSection = styled.div``;

const ModuleTitre = styled.div``;

const SousTitre = styled.div``;

const Numero = styled.p``;

const Id = styled.span``;

const Titre = styled.span``;
