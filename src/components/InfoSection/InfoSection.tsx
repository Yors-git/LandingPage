import { useState } from 'react';
import { colors, fonts } from '../../styles';
import styled from 'styled-components';
import InfiniteCarousel from '../InfiniteCarousel';
import image1 from '../../assets/images/image1.jpeg';
import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import image4 from '../../assets/images/image4.jpeg';
import image5 from '../../assets/images/image5.jpeg';
import image6 from '../../assets/images/image6.jpeg';
import ScrollLeft from '../svgs/ScrollLeft';
import ScrollRight from '../svgs/ScrollRight';

const FormContainer = styled.section`
	display: flex;
	padding: 70px 32px 64px 150px;
	justify-content: space-between;
	@media (max-width: 576px) {
		flex-direction: column;
		padding: 48px 32px 32px;
	}
`;

const FormLeft = styled.div`
	display: flex;
	flex-direction: column;
`;

const FormRight = styled.form`
	display: flex;
	flex-direction: row;
	@media (max-width: 576px) {
		flex-direction: column;
	}
`;

const CarouselContainer = styled.section`
	display: flex;
	flex-direction: column-reverse;
	@media (max-width: 576px) {
		flex-direction: column;
	}
`;

const BeAwareText = styled.h3`
	margin: 0;
	${fonts.main400mobile};
	font-size: 35px;
	color: ${colors.darkGrey};
	letter-spacing: -0.3px;
`;

const StayInfoText = styled.p`
	${fonts.secondary400};
	font-size: 18px;
	color: ${colors.opaqueBrown90};
	margin: 15px 0 10px;
	@media (max-width: 576px) {
		margin: 16px auto;
	}
`;

const LearnMoreLink = styled.a`
	text-decoration: none;
	${fonts.karla700};
	color: ${colors.brown};
	&::after {
		content: '>';
		vertical-align: middle;
	}
	@media (max-width: 576px) {
		margin: 16px 0;
		${fonts.karla700};
		font-size: 17px;
	}
`;

const EmailInput = styled.input`
	background-color: ${colors.clearGrey30};
	color: ${colors.blackOpacity45};
	${fonts.secondary400};
	font-size: 18px;
	padding: 12px 15px;
	border: none;
	border-radius: 1px;
	height: 50px;
	width: 296px;
	margin: 16px 0;
	box-sizing: border-box;
	@media (max-width: 576px) {
		width: 311px;
	}
`;

const EmailButton = styled.button`
  width: 143px;
  height: 50px;
  border: none;
	border-radius: 1px;
  background-color: ${colors.darkBrown};
  padding; 12px 30px;
  ${fonts.karla700};
  font-size: 17px;
  letter-spacing: 0.3px;
  box-sizing: border-box;
  margin: 16px 150px 16px 16px;
  @media (max-width: 576px) {
    width: 290px;
    margin: 0;
  }
`;

const InspirationsContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 40px 150px;
	justify-content: space-between;
	@media (max-width: 576px) {
		flex-direction: column;
		margin: 32px 32px 48px;
	}
`;

const InspirationsTitle = styled.p`
	margin: 0;
	color: ${colors.darkBrown};
	${fonts.main300mobile};
	font-size: 45px;
	letter-spacing: -0.3px;
	@media (max-width: 576px) {
		${fonts.main400mobile};
		font-size: 35px;
	}
`;

const InspirationsText = styled.p`
	display: flex;
	${fonts.secondary400};
	font-size: 18px;
	color: ${colors.opaqueBrown90};
	margin-top: 0;
	max-width: 359px;
	@media (max-width: 576px) {
		margin-top: 20px;
		margin-bottom: 0;
	}
`;

const CarouselBtnContainer = styled.div`
	width: 165px;
	height: 85px;
	@media (max-width: 576px) {
		display: none;
	}
`;

const Button = styled.button`
  background: none;
  border: none;
  margin-right: 11px;
  padding: 0;
	@media (max-width: 576px) {
		display: none;
	}
`;

const PhotoCount = styled.p`
  ${fonts.secondary400}
  font-size: 18px;
  color: ${colors.opaqueBrown90};
`;

const InfoSection = () => {
	const [email, setEmail] = useState<string>('');
	const [photoIndex, setPhotoIndex] = useState(0);
	const photos = [image1, image2, image3, image4, image5, image6];

	const handleInputChange = ({
		target: { value }
	}: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(value);
	};

	const handleSubmit = () => {
		console.log(email);
	};

	const goBack = () => {
		setPhotoIndex(prevIndex => (prevIndex - 1 + photos.length) % photos.length);
	};

	const goForward = () => {
		setPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
	};
	return (
		<>
			<FormContainer>
				<FormLeft>
					<BeAwareText>Be aware of the latest trends</BeAwareText>
					<StayInfoText>
						Stay informed of new trends, but also of our various offers.
					</StayInfoText>
					<LearnMoreLink href='#'>Learn more </LearnMoreLink>
				</FormLeft>
				<FormRight>
					<EmailInput
						placeholder='email@address.com'
						value={email}
						onChange={handleInputChange}
					/>
					<EmailButton onClick={handleSubmit}>Suscribe</EmailButton>
				</FormRight>
			</FormContainer>
			<CarouselContainer>
				<InspirationsContainer>
					<InspirationsTitle>Inspirations</InspirationsTitle>
					<InspirationsText>
						Our experts are keen to stay on top of trends in order to offer you
						new inspirations for your interior and exterior every day. Remember
						that to inspire you we have to inspire ourselves and we want to
						share that with you.
					</InspirationsText>
					<CarouselBtnContainer>
            <>
              <Button onClick={goBack}><ScrollLeft /></Button>
              <Button onClick={goForward}><ScrollRight /></Button>
            </>
            <PhotoCount>{photoIndex + 1} / {photos.length}</PhotoCount>
					</CarouselBtnContainer>
				</InspirationsContainer>
				<InfiniteCarousel photos={photos} currentIndex={photoIndex} />
			</CarouselContainer>
		</>
	);
};

export default InfoSection;
