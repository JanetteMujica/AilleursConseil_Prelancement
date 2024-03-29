import React, { useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Couche from '../assets/couche.png';
import { Link } from 'react-router-dom';
import Attribution from '../assets/attribution.png';
import CreativeCommon from '../assets/common.png';
import { device } from '../components/MediaQueries';
import emailjs from '@emailjs/browser';

const Footer = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const form = useRef();

	const emailValidation = () => {
		const regEx = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
		if (regEx.test(email)) {
			setMessage('Merci =) Vous recevrez un courriel de confirmation.');
		} else if (!regEx.test(email)) {
			setMessage(
				'Invalide. Les courriels ont le format suivant: usager@domaine.com'
			);
		} else if (email !== '') {
			setMessage(
				'Invalide. Les courriels ont le format suivant: usager@domaine.com'
			);
		} else {
			setMessage('');
		}
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_npwa0nc',
				'template_4mlscme',
				form.current,
				'YchMfkccv_yEaO1uI'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	return (
		<WholeWrapper>
			<FormWrapper>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='email'
						placeholder='Courriel'
						name='user_email'
						value={email}
						onChange={(e) => {
							handleChange(e);
						}}
					/>

					<ButtonWrapper>
						<Button type='submit' onClick={emailValidation} value='Send'>
							REJOIGNEZ
						</Button>
					</ButtonWrapper>
					<Message>{message}</Message>
				</form>
			</FormWrapper>

			<WrapperBlue>
				<Wrapper>
					<FirstSection>
						<SectionDate>
							<Date>Lancement en juin 2023</Date>

							<Reussir>Rejoignez la liste de diffusion</Reussir>
						</SectionDate>
					</FirstSection>
					<SecondSection>
						<img src={Couche} alt='' />
					</SecondSection>
				</Wrapper>
			</WrapperBlue>
			<GreenSectionWrapper>
				<GreenSection>
					<LicenseSection>
						<LicenseLogo
							href='https://creativecommons.org/licenses/by/4.0/deed.fr'
							target='_blank'
						>
							<img src={CreativeCommon} alt='cc' />
							<img src={Attribution} alt='attribution' />
						</LicenseLogo>

						<p>
							<Bold>license: </Bold>
							<a
								href='https://creativecommons.org/licenses/by/4.0/deed.fr'
								target='_blank'
								rel='noreferrer'
							>
								CC BY 4.0
							</a>
						</p>

						<p>
							<Bold>attribution: </Bold>
							<Link to='/programme'>
								Réussir le démarrage d'une communauté de pratique
							</Link>{' '}
							et/ou <Link to='/pouvoirs'>Pouvoirs patients</Link>
						</p>

						<p>
							<Bold>par: </Bold>
							<Link to='/equipe'> l'équipe d'Ailleurs conseil</Link>
						</p>
					</LicenseSection>
				</GreenSection>
			</GreenSectionWrapper>
		</WholeWrapper>
	);
};

export default Footer;

const WholeWrapper = styled.div``;

const WrapperBlue = styled.div`
	position: relative;
	height: 450px;
	background-color: #4083bb;
	z-index: -1000;
	@media ${device.laptop} {
		height: 420px;
	}

	@media ${device.laptopL} {
		height: 500px;
	}
`;

const Wrapper = styled.section`
	position: relative;
	height: 410px;
	background-color: #4083bb;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;

	@media ${device.tablet} {
		margin-left: 1em;
	}

	@media ${device.laptop} {
		margin-left: 6em;
	}

	@media ${device.laptopL} {
		margin-left: 12em;
	}

	@media ${device.desktop} {
		margin-left: 19em;
	}

	img {
		position: absolute;
		z-index: 0;
		bottom: -60px;
		right: 0;

		@media ${device.mobileM} {
			right: 1em;
		}
		@media ${device.tablet} {
			right: 2em;
		}

		@media ${device.laptop} {
			right: 6em;
			bottom: -50px;
		}

		@media ${device.laptopL} {
			right: 12em;
			bottom: -120px;
		}

		@media ${device.desktop} {
			right: 19em;
		}
	}
`;

const FirstSection = styled.section``;
const SecondSection = styled.section`
	img {
		width: 320px;
	}

	@media ${device.tablet} {
		img {
			width: 450px;
		}
	}
	@media ${device.laptop} {
		img {
			width: 450px;
		}
	}

	@media ${device.laptopL} {
		img {
			width: 550px;
		}
	}

	@media ${device.desktop} {
		img {
			width: 600px;
		}
	}
`;

const SectionDate = styled.section`
	color: #fffaea;
	padding-left: 16px;
	padding-right: 16px;
	font-weight: 700;
`;

const Date = styled.div`
	font-size: 1.6em;
	z-index: 1000;
	position: absolute;
	top: 80.6px;
	left: 16px;
`;

const Reussir = styled.div`
	max-width: 300px;
	margin-top: 1em;
	font-style: italic;
	font-size: 1em;
	z-index: 1000;
	position: absolute;
	top: 122.6px;
	left: 16px;
	color: #fada80;

	@media ${device.desktop} {
		max-width: 400px;
	}
`;

const FormWrapper = styled.div`
	position: relative;
	z-index: 3000;
	bottom: -252px;

	@media ${device.tablet} {
		bottom: -272px;
		left: 1em;
	}

	@media ${device.laptop} {
		left: 6em;
	}

	@media ${device.laptopL} {
		left: 12em;
		bottom: -285px;
	}

	@media ${device.desktop} {
		left: 19em;
		bottom: -300px;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 16px;
		margin-left: 16px;
		margin-right: 16px;
	}

	input {
		width: 100%;
		height: 35px;
		z-index: 1000;
		border: none;
		outline: none;
		transition: 0.5s;
		font-size: 1em;
		&:focus {
			border: 3px solid var(--red);
		}

		@media ${device.tablet} {
			height: 40px;
			width: 400px;
		}
	}
`;

const Button = styled.button`
	border: none;
	background-color: var(--red);
	color: #fffaea;
	border-radius: 1em;
	padding: 0.8em 1.6em 0.8em;
	font-weight: 700;
	font-size: 0.8em;
	z-index: 1000;

	&:hover {
		background-color: var(--green);
		color: ${(props) => (props.disabled ? '#FFFAEA' : '#FFFAEA')};
		background-color: ${(props) =>
			props.disabled ? 'var(--darkgrey)' : 'var(--green);'};
		border-radius: 15px;
		cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;

	@media ${device.tablet} {
		justify-content: flex-start;
	}
`;

const Message = styled.div`
	position: absolute;
	width: 320px;
	left: 1em;
	bottom: -45px;
	color: #fffaea;
	font-weight: 700;

	@media ${device.mobileM} {
		width: 375px;
	}

	@media ${device.mobileL} {
		/* width: 375px; */
	}

	@media ${device.tablet} {
		bottom: -55px;
	}

	@media ${device.desktop} {
		width: 600px;
	}
`;

const GreenSectionWrapper = styled.div`
	background-color: #53b675;
	@media ${device.laptop} {
	}
`;

const GreenSection = styled.div`
	background-color: #53b675;
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 2em;
	padding-bottom: 2em;
	z-index: 1000;
	position: relative;
	bottom: 0;
	right: 0;

	@media ${device.tablet} {
		margin-left: 1em;
	}

	@media ${device.laptop} {
		margin-left: 6em;
	}

	@media ${device.laptopL} {
		margin-left: 12em;
	}

	@media ${device.desktop} {
		margin-left: 19em;
	}
`;

const LicenseSection = styled.div`
	font-size: 0.8em;
	img {
		width: 1.8em;
	}
`;

const LicenseLogo = styled.a`
	display: flex;
	flex-direction: row;
	gap: 0.6em;
	margin-bottom: 0.6em;
`;

const Bold = styled.span`
	font-weight: 700;
`;
