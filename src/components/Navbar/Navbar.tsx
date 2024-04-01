import { useState } from 'react';
import styled, { css } from 'styled-components';
import Hotdog from '../svgs/Hotdog';
import { colors, fonts } from '../../styles';
import Contact from '../svgs/Contact';

const Bar = styled.nav`
	font-size: 18px;
	@media (max-width: 576px) {
		position: absolute;
		top: 41px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: calc(100% - 56px);
		left: 23px;
		right: 33px;
		height: fit-content;
	}
`;

const BarContainer = styled.div`
	display: flex;
	padding: 55px 52px 10px 150px;
	align-items: center;
	height: fit-content;
`;

const MainNav = styled.ul<{ displaynav: string }>`
	display: flex;
	flex-direction: row;
	list-style-type: none;
	padding: 0;
	margin: 3px auto 0 20px;
	@media (max-width: 576px) {
		${({ displaynav }) => css`
			display: ${displaynav};
		`}
		margin: 0;
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		justify-content: space-around;
		flex-direction: column;
		background-color: ${colors.whiteOpacity50};
		border-radius: 10px;
		height: 300px;
		width: 220px;
	}
`;

const NavLi = styled.li`
	text-align: center;
	margin: 0 12px;
	@media (max-width: 576px) {
		margin: 15px auto;
	}
`;

const NavLink = styled.a`
	list-style-type: none;
	display: flex;
	text-decoration: none;
	color: ${colors.opaqueBrown};
	${fonts.secondary400};
	font-size: 18px;
	@media (max-width: 576px) {
		color: ${colors.blackOpacity66};
		margin: 0px 10px;
	}
`;

const MessageLi = styled.li`
	display: none;
	@media (max-width: 576px) {
		display: flex;
		text-align: center;
		margin: 0 12px;
		margin: 15px auto;
	}
`;

const MessageLink = styled.a`
	display: none;
	@media (max-width: 576px) {
		list-style-type: none;
		display: flex;
		text-decoration: none;
		color: ${colors.blackOpacity66};
		margin: 0px 10px;
	}
`;

const Logo = styled(NavLink)`
	display: inline-block;
	font-size: 34px;
	color: ${colors.brown};
	${fonts.main700};
	@media (max-width: 576px) {
		letter-spacing: 2px;
		color: ${colors.white};
		margin: 10px;
	}
`;

const NavBarToggle = styled.div`
	@media (max-width: 576px) {
		display: flex;
		cursor: pointer;
		color: ${colors.whiteOpacity66};
		font-size: 24px;
	}
`;

const Navbar = () => {
	const [displayNav, setDisplayNav] = useState<string>('none');
	const toggleNavBar = () => {
		setDisplayNav(displayNav === 'flex' ? 'none' : 'flex');
	};

	return (
		<BarContainer>
			<Bar>
				<Logo href='#'>antic</Logo>
				<NavBarToggle onClick={() => toggleNavBar()}>
					<Hotdog />
				</NavBarToggle>
			</Bar>
			<MainNav displaynav={displayNav}>
				<NavLi>
					<NavLink href='#'>Products</NavLink>
				</NavLi>
				<NavLi>
					<NavLink href='#'>Rooms</NavLink>
				</NavLi>
				<NavLi>
					<NavLink href='#'>Services</NavLink>
				</NavLi>
				<NavLi>
					<NavLink href='#'>Inspirations</NavLink>
				</NavLi>
				<MessageLi>
					<MessageLink href='#'>Message Us</MessageLink>
				</MessageLi>
			</MainNav>
			<NavLink href='#'>
				<Contact />
			</NavLink>
		</BarContainer>
	);
};

export default Navbar;
