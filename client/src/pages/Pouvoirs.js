import styled from 'styled-components';
import { device } from '../components/MediaQueries';

const Pouvoirs = () => {
	return (
		<>
			<Wrapper>
				<Titre>Pouvoirs patients</Titre>
			</Wrapper>
		</>
	);
};

export default Pouvoirs;

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
