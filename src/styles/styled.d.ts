import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			bg: string;
			bg_accent: string;
			text: string;
		};

		size: {
			nav_size: string;
		};

		other: {
			border: string;
			border_radius: string;
			speed: string;
		};
	}
}
