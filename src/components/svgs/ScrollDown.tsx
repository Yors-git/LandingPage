import { colors } from '../../styles';
import styled from 'styled-components';

const SvgContainer = styled.div`
	display: flex;
  --stroke-color: ${colors.brown};
  margin-top: 48px;
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    --stroke-color: ${colors.white};
    margin-top: 0;
  }
`;

const ScrollDown = () => {
	return (
    <SvgContainer>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: 'var(--stroke-color)' }}
      >
        <rect
          x="1.00002"
          y="1.5"
          width="48"
          height="48"
          rx="24"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.2929 22.7071C16.9024 22.3166 16.9024 21.6834 17.2929 21.2929C17.6834 20.9024 18.3166 20.9024 18.7071 21.2929L25 27.5858L31.2929 21.2929C31.6834 20.9024 32.3166 20.9024 32.7071 21.2929C33.0976 21.6834 33.0976 22.3166 32.7071 22.7071L25.7071 29.7071C25.3166 30.0976 24.6834 30.0976 24.2929 29.7071L17.2929 22.7071Z"
          fill="currentColor"
        />
      </svg>
    </SvgContainer>
	);
};

export default ScrollDown;
