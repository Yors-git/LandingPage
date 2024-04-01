import styled from 'styled-components';

const SvgContainer = styled.div`
	display: none;
	@media (max-width: 576px) {
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0.66;
	}
`;

const Hotdog = () => {
	return (
		<SvgContainer>
			<svg
				width='24'
				height='12'
				viewBox='0 0 25 13'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M1.08262 1.5V0.5H24.72V1.5V2.5H1.08262V1.5Z' fill='white' />
				<path
					d='M1.08262 11.5C1.08262 10.9477 0.266722 10.5 1.08262 10.5H24.72V11.5V12.5H1.08262C0.266722 12.5 1.08262 12.0523 1.08262 11.5Z'
					fill='white'
				/>
			</svg>
		</SvgContainer>
	);
};

export default Hotdog;
