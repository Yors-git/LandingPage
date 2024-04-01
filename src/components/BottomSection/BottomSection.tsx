import { colors, fonts } from '../../styles';
import styled from 'styled-components';
import GenericList from '../GenericList';
import respectImage from '../../assets/images/respectimg.jpeg';
import Facebook from '../svgs/Facebook';
import Twitter from '../svgs/Twitter';
import Linkedin from '../svgs/Linkedin';
import Instagram from '../svgs/Instagram';

const MainContainer = styled.section`
	background-color: ${colors.beige};
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 70px 150px;
	box-sizing: border-box;
	align-items: baseline;
	@media (max-width: 576px) {
		flex-direction: column;
		justify-content: center;
		padding: 48px 32px 40px;
	}
`;

const MainTitle = styled.h4`
	${fonts.main700};
	font-size: 34px;
	color: ${colors.darkBrown};
	margin: 0 64px 0 0;
	@media (max-width: 576px) {
		width: 326px;
		height: 25px;
		text-align: center;
	}
`;

const HelperContainer = styled.div`
	display: flex;
	margin-right: 64px;
	justify-content: space-between;
	width: calc(100% - 128px);
	@media (max-width: 576px) {
		flex-direction: column;
		margin: 0;
	}
`;

const RespectContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 235px;
	width: 235px;
	@media (max-width: 576px) {
		width: 326px;
	}
`;

const RespectTitle = styled.h5`
	${fonts.secondary600};
	font-size: 25px;
	letter-spacing: -0.2px;
	color: ${colors.darkBrown};
	margin-bottom: 24px;
	@media (max-width: 576px) {
		margin: 32px 0 20px;
	}
`;

const RespectImg = styled.img`
	width: 235px;
	@media (max-width: 576px) {
		width: 311px;
	}
`;

const RespectText = styled.p`
	${fonts.secondary400};
	font-size: 16px;
	color: ${colors.opaqueBrown};
	width: 235px;
	margin: 16px 0;
	@media (max-width: 576px) {
		font-size: 18px;
		color: ${colors.blackOpacity45};
		width: 290px;
	}
`;

const LearnMoreLink = styled.a`
	text-decoration: none;
	${fonts.karla700};
	color: ${colors.brown};
	letter-spacing: 0.3px;
	&::after {
		content: '>';
		vertical-align: middle;
	}
	@media (max-width: 576px) {
		${fonts.karla700};
		font-size: 17px;
	}
`;

const FooterContainer = styled.div`
	background-color: ${colors.beige};
	display: flex;
	align-items: center;
	padding: 0 150px;
	flex-direction: column;
	@media (max-width: 576px) {
		padding: 0 32px;
	}
`;

const FooterIconsContainer = styled.div`
	display: flex;
	width: 326px;
	justify-content: center;
	& > * {
		margin: 0 12px;
	}
	@media (max-width: 576px) {
		& > * {
			margin: 0 10px;
		}
	}
`;

const FooterLinksContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 9px 24px;
	@media (max-width: 576px) {
		width: 311px;
	}
`;

const FooterLink = styled.a`
	list-style-type: none;
	display: flex;
	text-decoration: none;
	${fonts.secondary400};
	font-size: 18px;
	color: ${colors.opaqueBrown70};
	white-space: nowrap;
	@media (max-width: 576px) {
		color: ${colors.blackOpacity45};
	}
`;

const FooterBottomContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin: 20px 0 64px;
	@media (max-width: 576px) {
		margin: 40px 32px;
		flex-direction: column;
	}
`;

const FooterCopyright = styled.p`
	${fonts.secondary400};
	font-size: 18px;
	color: ${colors.opaqueBrown90};
	margin: 0;
	@media (max-width: 576px) {
		margin: 32px 0 8px;
	}
`;

const BottomSection = () => {
	const isMobile = window.innerWidth < 576;
	const responsibilityText1 =
		'We’re taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly.';
	const responsibilityText2 = 'We’ve set a number of goals to get us there.';
	return (
		<>
			<MainContainer>
				<MainTitle>antic</MainTitle>
				<HelperContainer>
					<GenericList
						order={4}
						title='About'
						listItems={['Our story', 'Our stories', 'Our partners']}
					/>
					<GenericList
						order={3}
						title='Services'
						listItems={[
							'Click and collect',
							'Conception',
							'Installation',
							'Advices',
							'Gift card'
						]}
					/>
					<GenericList
						order={1}
						title='Products'
						listItems={[
							'Furniture',
							'Decoration',
							'Storage',
							'Baby and child',
							'Connected home'
						]}
					/>
					<GenericList
						order={2}
						title='Rooms'
						listItems={[
							'Living room',
							'Dining room',
							'Cooked',
							'Bedroom',
							'Bathroom',
							'Office',
							'Laundry',
							'Garage'
						]}
					/>
				</HelperContainer>
				<RespectContainer>
					<RespectTitle>We respect our planet</RespectTitle>
					<RespectImg src={respectImage} />
					<RespectText>
						{`${responsibilityText1} ${isMobile ? responsibilityText2 : ''}`}
					</RespectText>
					<LearnMoreLink href='#'>Learn more</LearnMoreLink>
				</RespectContainer>
			</MainContainer>
			<FooterContainer>
				<FooterIconsContainer>
					<Facebook />
					<Twitter />
					<Linkedin />
					<Instagram />
				</FooterIconsContainer>
				<FooterBottomContainer>
					<FooterLinksContainer>
						<FooterLink href='#'>Privacy policy</FooterLink>
						<FooterLink href='#'>Term of service</FooterLink>
						<FooterLink href='#'>Language</FooterLink>
					</FooterLinksContainer>
					<FooterCopyright>&copy; 2021 Agence Dnd</FooterCopyright>
				</FooterBottomContainer>
			</FooterContainer>
		</>
	);
};

export default BottomSection;
