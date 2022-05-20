import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { CSSTransition } from 'react-transition-group';

import { Navbar } from './components/Navbar';
import { NavItem } from './components/Navbar/NavItem';
// import { Dropdown } from './components/Navbar/Dropdown';
import { Dropdown } from './components/Navbar/Dropdown';

import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineBell } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Navbar>
				<NavItem icon={<AiOutlinePlus />} />
				<NavItem icon={<AiOutlineBell />} />
				<NavItem icon={<AiOutlineMessage />} />

				<NavItem icon={<FaAngleDown />}>
					<Dropdown />
				</NavItem>
			</Navbar>
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
