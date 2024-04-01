import { colors } from '../../styles';
import styled from 'styled-components';

const SvgContainer = styled.div`
	display: flex;
	--stroke-color: ${colors.brown};
`;

const ScrollLeft = () => {
	return (
		<SvgContainer>
			<svg
				width='40'
				height='40'
				viewBox='0 0 40 40'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
        style={{ color: 'var(--stroke-color)' }}
			>
				<rect
					x='39'
					y='1'
					width='38'
					height='38'
					rx='19'
					transform='rotate(90 39 1)'
					stroke='currentColor'
					stroke-width='2'
				/>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M22.7929 12.2929C23.1834 11.9024 23.8166 11.9024 24.2071 12.2929C24.5976 12.6834 24.5976 13.3166 24.2071 13.7071L17.9142 20L24.2071 26.2929C24.5976 26.6834 24.5976 27.3166 24.2071 27.7071C23.8166 28.0976 23.1834 28.0976 22.7929 27.7071L15.7929 20.7071C15.4024 20.3166 15.4024 19.6834 15.7929 19.2929L22.7929 12.2929Z'
					fill='currentColor'
				/>
			</svg>
		</SvgContainer>
	);
};

export default ScrollLeft;
