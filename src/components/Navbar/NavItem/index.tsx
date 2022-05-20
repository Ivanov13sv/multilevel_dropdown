import { FC, useState } from 'react';
import * as S from './style';

interface NavItemProps {
	icon: React.ReactNode;
	children?: React.ReactNode;
	style?: {};
}

export const NavItem: FC<NavItemProps> = ({ icon, children }) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

	const onToggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	return (
		<S.NavItem>
			<S.IconBtn  onClick={onToggleDropdown}>{icon}</S.IconBtn>
			{isDropdownOpen && children}
		</S.NavItem>
	);
};
