import styled from 'styled-components';

export const NavItem = styled.li`
	width: calc(${({ theme }) => theme.size.nav_size} * 0.8);
	display: flex;
	align-items: center;
	justify-content: center;

`;

export const IconBtn = styled.a`
	width: calc(${({ theme }) => theme.size.nav_size} * 0.5);
	height: calc(${({ theme }) => theme.size.nav_size} * 0.5);
	border-radius: 50%;
	background-color: #484a4d;
	padding: 5px;
	margin: 2px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: filter 300ms;
	cursor: pointer;

	&:hover {
		filter: brightness(1.3);
	}

	svg {
		fill: ${({ theme }) => theme.color.text};

		width: 20px;
		height: 20px;
		> * {
		}
	}
`;
