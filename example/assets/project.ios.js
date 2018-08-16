import * as React from 'react';
import { Svg, Path } from 'react-native-svg';

export default props => (
	<Svg viewBox='0 0 26 24' height='24' width='26' {...props}>
		<Path
			d='M2,6 C1.44771525,6 1,5.55228475 1,5 C1,4.44771525 1.44771525,4 2,4 L24,4 C24.5522847,4 25,4.44771525 25,5 C25,5.55228475 24.5522847,6 24,6 L2,6 Z M4,2 C3.44771525,2 3,1.55228475 3,1 C3,0.44771525 3.44771525,0 4,0 L22,0 C22.5522847,0 23,0.44771525 23,1 C23,1.55228475 22.5522847,2 22,2 L4,2 Z M2,8 L24,8 C25.1045695,8 26,8.8954305 26,10 L26,22 C26,23.1045695 25.1045695,24 24,24 L2,24 C0.8954305,24 0,23.1045695 0,22 L0,10 C0,8.8954305 0.8954305,8 2,8 Z M22,22 C22,20.8954305 22.8954305,20 24,20 L24,12 C22.8954305,12 22,11.1045695 22,10 L4,10 C4,11.1045695 3.1045695,12 2,12 L2,20 C3.1045695,20 4,20.8954305 4,22 L22,22 Z M21.7071,15.2929 C22.097624,15.683424 22.097624,16.31659 21.7071,16.70711 C21.316576,17.097634 20.68341,17.097634 20.29289,16.70711 C19.902366,16.316586 19.902366,15.68342 20.29289,15.2929 C20.683414,14.902376 21.31658,14.902376 21.7071,15.2929 Z M5.70711,15.2929 C6.097634,15.683424 6.097634,16.31659 5.70711,16.70711 C5.316586,17.097634 4.68342,17.097634 4.2929,16.70711 C3.902376,16.316586 3.902376,15.68342 4.2929,15.2929 C4.683424,14.902376 5.31659,14.902376 5.70711,15.2929 Z M10.514,20 C9.598,19.175 9,17.922 9,16.5 C9,14.015 10.791,12 13,12 C15.209,12 17,14.015 17,16.5 C17,17.922 16.402,19.175 15.486,20 L10.514,20 Z'
			fill={props.tintColor}
		/>
	</Svg>
);
