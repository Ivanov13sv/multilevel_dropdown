import React, { FC, useState, useRef, useEffect } from 'react';

import * as S from './style';
import { DropdownItem } from './DropdownItem';
import { BiCog } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';

interface DropdownProps {
	children?: React.ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState('main');
	const [height, setHeight] = useState<number>();

	const mainMenuRef = useRef<HTMLDivElement>(null);
	const secondMenuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const getHeight = () => {
			setHeight(
				activeMenu === 'main'
					? mainMenuRef.current?.clientHeight
					: secondMenuRef.current?.clientHeight
			);
		};
		getHeight();
	}, [activeMenu]);

	return (
		<S.Dropdown style={{ height: height && height + 35 }}>
			<S.MainMenu active={activeMenu === 'main'} ref={mainMenuRef}>
				<DropdownItem>My profile</DropdownItem>
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

			<S.SecondaryMenu ref={secondMenuRef} active={activeMenu === 'settings'}>
				<DropdownItem
					setActiveMenu={setActiveMenu}
					goToMenu="main"
					leftIcon={<BiChevronRight style={{ transform: 'rotate(180deg)' }} />}
				></DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
			</S.SecondaryMenu>
		</S.Dropdown>
	);
};
