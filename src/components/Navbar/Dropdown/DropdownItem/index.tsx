import React, { FC } from 'react';
import * as S from './style';
import { IconBtn } from '../../NavItem/style';

interface DropdownItemProps {
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	children?: React.ReactNode;
	setActiveMenu?: (goTo: string) => void;
	goToMenu?: any;
}

export const DropdownItem: FC<DropdownItemProps> = ({
	leftIcon,
	rightIcon,
	children,
	goToMenu,
	setActiveMenu,
}) => {
	const goTo = () => {
		if (goToMenu && setActiveMenu) {
			setActiveMenu(goToMenu);
		}
	};

	return (
		<S.DropdownItem onClick={goTo}>
			<IconBtn>{leftIcon}</IconBtn>
			<S.ItemText>{children}</S.ItemText>

			<S.RightIcon>{rightIcon}</S.RightIcon>
		</S.DropdownItem>
	);
};
