import styled from 'styled-components';

export const Dropdown = styled.div`
	position: absolute;
	top: 58px;
	width: 300px;
	transform: translateX(-45%);
	background-color: ${({ theme }) => theme.color.bg};
	border: ${({ theme }) => theme.other.border};
	border-radius: ${({ theme }) => theme.other.border_radius};
	padding: 1rem;
	overflow: hidden;
	transition: .3s all;
	* > {
	}
`;

interface MenuProps {
	active?: boolean;
}

export const MainMenu = styled.div<MenuProps>`
	position: absolute;
	left: 0;
	padding: 0 1rem;
	width: 100%;
	transition: all 0.3s;
	transform: ${props => (props.active ? 'translateX(0)' : 'translateX(-100%)')};
`;

export const SecondaryMenu = styled.div<MenuProps>`
	width: 100%;
	position: absolute;
	left: 0;
	padding: 0 1rem;
	transition: all 0.3s;
	transform: ${props => (props.active ? 'translateX(0)' : 'translateX(110%)')};
`;
