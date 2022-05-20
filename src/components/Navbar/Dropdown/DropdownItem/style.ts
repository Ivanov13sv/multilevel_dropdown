import styled from 'styled-components';

export const DropdownItem = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	border-radius: ${({ theme }) => theme.other.border_radius};
	transition: background-color ${({ theme }) => theme.other.speed};
	padding: 0.5rem;
	color: ${({theme}) => theme.color.text};
	&:hover {
		background-color: #525357;
	}
    cursor: pointer;
`;

export const LeftIcon = styled.span``;
export const RightIcon = styled.span`
	width: 24px;
	height: 24px;
	margin-left: auto;
    svg{
        height: 100%;
        width: 100%;
    }
`;

export const ItemText = styled.span`
padding: 0 0 0 .5rem;
letter-spacing: .5px;

`