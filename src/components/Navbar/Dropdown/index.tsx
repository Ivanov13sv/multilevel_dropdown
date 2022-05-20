import React, { FC, useState, useRef } from 'react';

import * as S from './style';
import { DropdownItem } from './DropdownItem';
import { BiCog } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';

interface DropdownProps {
	children?: React.ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState('main');

	const firstRef = useRef<HTMLDivElement>(null);
	const secondRef = useRef<HTMLDivElement>(null);
	const height =
		activeMenu === 'main' ? firstRef.current?.clientHeight : secondRef.current?.clientHeight;

	return (
		<S.Dropdown style={{ height: height && height + 35 }}>
			<S.MainMenu active={activeMenu === 'main'} ref={firstRef}>
				<DropdownItem>My profile</DropdownItem>
				<DropdownItem
					goToMenu="settings"
					setActiveMenu={setActiveMenu}
					leftIcon={<BiCog />}
					rightIcon={<BiChevronRight />}
				>
					Settings
				</DropdownItem>
			</S.MainMenu>

			<S.SecondaryMenu ref={secondRef} active={activeMenu === 'settings'}>
				<DropdownItem
					setActiveMenu={setActiveMenu}
					goToMenu="main"
					leftIcon={<BiChevronRight style={{ transform: 'rotate(180deg)' }} />}
				></DropdownItem>
				<DropdownItem>Test</DropdownItem>
				<DropdownItem>Test</DropdownItem>
				<DropdownItem>Test</DropdownItem>
				<DropdownItem>Test</DropdownItem>
				<DropdownItem>Test</DropdownItem>
				<DropdownItem>Test</DropdownItem>
				<DropdownItem>Test</DropdownItem>
			</S.SecondaryMenu>
		</S.Dropdown>
	);
};
