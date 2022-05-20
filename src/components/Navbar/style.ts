import styled from 'styled-components';

export const Navbar = styled.nav`
	height: ${({ theme }) => theme.size.nav_size};
	background-color: ${({ theme }) => theme.color.bg};
	padding: 0 1rem;
	border-bottom: ${({ theme }) => theme.other.border};
`;

export const NavList = styled.ul`
	max-width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
`;
