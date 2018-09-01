import * as React from 'react';
import {
	View,
	Platform,
	TouchableHighlight,
	TouchableNativeFeedback,
	ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

const Cell = ({ children, style, isEnabled, onPress, onLongPress, underlayColor }) => {
	const renderCell = () => (
		<View style={style}>
			{children}
		</View>
	);

	if (!onPress) {
		return renderCell();
	}

	const Touchable = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;
	const touchableProps = Platform.select({
		ios: {
			underlayColor,
		},
		android: {},
	});

	return (
		<Touchable {...touchableProps} disabled={!isEnabled} onPress={onPress} onLongPress={onLongPress}>
			{renderCell()}
		</Touchable>
	);
};

Cell.propTypes = {
	accentColor: PropTypes.string,
	underlayColor: PropTypes.string,

	children: PropTypes.node.isRequired,
	style: ViewPropTypes.style,

	isEnabled: PropTypes.bool,
	onPress: PropTypes.func,
	onLongPress: PropTypes.func,
};

Cell.defaultProps = {
	isEnabled: true,
};

export default Cell;
