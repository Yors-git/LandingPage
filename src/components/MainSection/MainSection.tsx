import { colors, fonts } from '../../styles';
import styled from 'styled-components';
import Navbar from '@components/Navbar';
import ScrollDown from '@components/svgs/ScrollDown';
import backgroundImage from '../../assets/images/2e3130d914626b07ec182fc5179ca5d0.jpeg';

const TopContainer = styled.section`
	background-color: ${colors.beige};
	width: 100%;
	max-width: 100%;
	background-image: url(${backgroundImage});
	background-size: 50% 100%;
	background-position: 100% 0px;
	background-repeat: no-repeat;
	@media (max-width: 576px) {
		display: flex;
		flex-direction: column;
		padding: 10px 0;
		align-items: center;
		height: 667px;
		background-image: linear-gradient(#70645833, #70645833),
			url(${backgroundImage});
		background-size: cover;
		background-position: top center;
	}
`;

const MainText = styled.div`
	display: flex;
	flex-direction: column;
	margin: 131px 150px 0 150px;
	@media (max-width: 576px) {
		text-align: center;
		margin: 101px 10px 0 10px;
	}
`;

const TextHD = styled.small`
	color: ${colors.brown};
	${fonts.secondary700};
	font-size: 14px;
	letter-spacing: 1px;
	@media (max-width: 576px) {
		color: ${colors.white};
		height: 20px;
	}
`;

const EleganceText = styled.h4`
	${fonts.main300}
	font-size: 50px;
	color: ${colors.brown};
	margin: 50px 0 30px;
	@media (max-width: 576px) {
		color: ${colors.white};
		${fonts.main300mobile};
		font-size: 35px;
		margin: 24px auto;
		height: 120px;
	}
`;

const ProvideText = styled.p`
  color: ${colors.opaqueBrown90};
  ${fonts.secondary300};
	@media (max-width: 576px) {
		${fonts.secondary400};
    font-size 18px;
		color: ${colors.white};
    margin: 0 0 24px 0;
	}
`;

const BottomContainer = styled.section`
	background-color: ${colors.beige};
	display: flex;
	@media (max-width: 576px) {
		flex-direction: column;
	}
`;

const BottomLeftCont = styled.div`
	display: flex;
	flex: 1 0 50%;
	flex-direction: column;
	padding: 64px 48px 50px 150px;
	box-sizing: border-box;
	@media (max-width: 576px) {
		padding: 48px 32px 0 32px;
	}
`;

const BottomRightCont = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr); /* Creates two columns */
	grid-template-rows: auto auto; /* Creates two rows, each sized according to its content */
	gap: 30px;
	padding: 64px 150px 40px 12px;
	box-sizing: border-box;
	@media (max-width: 576px) {
		display: flex;
		gap: 0;
		flex: 1 0 50%;
		flex-direction: column;
		padding: 0 0 40px;
		box-sizing: border-box;
	}
`;

const StayText = styled.p`
	margin: 0px;
	${fonts.main400};
	font-size: 55px;
	color: ${colors.opaqueBrown};
	@media (max-width: 576px) {
		${fonts.main400mobile};
		font-size: 35px;
		color: ${colors.darkBrown};
		letter-spacing: -0.3px;
	}
`;

const FindMoreLink = styled.a`
	text-decoration: none;
	margin: 30px 0;
	${fonts.karla700};
	color: ${colors.brown};
	@media (max-width: 576px) {
		${fonts.lato900};
		margin: 32px 0 0 4px;
	}
`;

const FeatureContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 576px) {
		margin: 40px 32px 0;
	}
`;

const FeatureTitle = styled.p`
	margin: 0;
	color: ${colors.brown};
	${fonts.secondary600};
	font-size: 25px;
	letter-spacing: -0.2px;
`;

const FeatureText = styled.div`
	display: flex;
	${fonts.secondary400};
	font-size: 18px;
	color: ${colors.opaqueBrown90};
	margin-top: 5px;
`;

const MainSection = () => {
	return (
		<>
			<TopContainer>
				<Navbar />
				<MainText>
					<TextHD>HOME DESIGN</TextHD>
					<EleganceText>
						Elegance for <br /> Interiors & <br /> Exteriors
					</EleganceText>
					<ProvideText>
						We provide everyone with modern, <br />
						trendy, quality furniture
					</ProvideText>
					<ScrollDown />
				</MainText>
			</TopContainer>
			<BottomContainer>
				<BottomLeftCont>
					<StayText>
						We stay by your <br /> side to design <br /> your projects
					</StayText>
					<FindMoreLink href='#'>Find out more &gt;</FindMoreLink>
				</BottomLeftCont>
				<BottomRightCont>
					<FeatureContainer>
						<FeatureTitle>Our Advices</FeatureTitle>
						<FeatureText>
							What if you took advantage of this rather special period to
							rethink your interior? You spend more time at home so you might as
							well feel good there.
						</FeatureText>
					</FeatureContainer>
					<FeatureContainer>
						<FeatureTitle>Click and Collect</FeatureTitle>
						<FeatureText>
							Adapted and contactless. Free from € 200 of purchases in stores
							offering the service.
						</FeatureText>
					</FeatureContainer>
					<FeatureContainer>
						<FeatureTitle>Conception Service</FeatureTitle>
						<FeatureText>
							Personalized service with an expert advisor for your interior and
							exterior decoration or layout projects.
						</FeatureText>
					</FeatureContainer>
					<FeatureContainer>
						<FeatureTitle>Installation Service</FeatureTitle>
						<FeatureText>
							Our furniture packaged in flat packs are designed for easy
							assembly. But you can call on our partner.
						</FeatureText>
					</FeatureContainer>
				</BottomRightCont>
			</BottomContainer>
		</>
	);
};

export default MainSection;
