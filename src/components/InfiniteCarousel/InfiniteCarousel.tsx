import styled, { keyframes } from 'styled-components';

export interface IInfiniteCarouselProps {
  photos: string[];
  currentIndex: number;
}

const CarouselContainer = styled.section`
	display: flex;
	overflow-x: hidden;
	position: relative;
	width: 100%;
	margin: 30px 0;
	@media (min-width: 576px) {
		justify-content: center;
		margin: 0;
	}
`;

// Animation for mobile
const animateSlide = keyframes`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-1250px); }
`;

const Photo = styled.div`
	flex: 0 0 auto;
	width: 250px;
	height: 400px;
	border-radius: 20px;
	margin: 0 10px;
	background-size: cover;
	background-position: center;
	@media (max-width: 576px) {
		animation-name: ${animateSlide};
		animation-duration: 15s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-direction: forward;
	}
`;

const InfiniteCarousel: React.FC<IInfiniteCarouselProps> = ({ photos, currentIndex }) => {
	const isMobile = window.innerWidth < 576;
	const doubledPhotos = [...photos, ...photos];

console.log('Current', currentIndex)
	return (
		<CarouselContainer>
			{isMobile ? (
				photos.map((photo: string, index: number) => (
					<Photo
						key={index}
						style={{ backgroundImage: `url(${photo})` }}
						data-photo
					/>
				))
			) : (
				<>
					{/* <Button onClick={goBack}>{'<'}</Button> */}
					{doubledPhotos
						.slice(currentIndex, currentIndex + 6)
						.map((photo, index) => (
							<Photo key={index} style={{ backgroundImage: `url(${photo})` }} />
						))}
					{/* <Button onClick={goForward}>{'>'}</Button> */}
				</>
			)}
		</CarouselContainer>
	);
};

export default InfiniteCarousel;
