import * as React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';

import { staticCellStyles as styles } from './styles';

const StaticCell = (props) => {
	const {
		children,
		title, titleStyle,
		subtitle, subtitleStyle,
		iconComponent, contentComponent,
		theme, disabled,

		...remainingProps
	} = props;

	const getIcon = () => {
		if (iconComponent) {
			return (
				<View style={styles.iconContainer}>
					{iconComponent}
				</View>
			);
		}
	};

	const getTitle = () => {
		if (title) {
			const combinedStyles = [styles.title(theme, disabled), titleStyle];
			return <Text key='title' style={combinedStyles}>{title}</Text>;
		}
	};

	const getSubtitle = () => {
		if (subtitle) {
			const combinedStyles = [styles.subtitle(theme, disabled), subtitleStyle];
			return <Text key='subtitle' style={combinedStyles}>{subtitle}</Text>;
		}
	};

	const getContent = () => {
		let component;
		if (contentComponent) {
			component = contentComponent;
		} else {
			component = [getTitle(), getSubtitle()];
		}

		return (
			<View style={styles.contentContainer}>
				{component}
			</View>
		);
	};

	return (
		<AccessoryCell theme={theme} disabled={disabled} {...remainingProps}>
			{getIcon()}
			{getContent()}
		</AccessoryCell>
	);
};

StaticCell.propTypes = Object.assign({
	title: PropTypes.string.isRequired,
	titleStyle: Text.propTypes.style,
	subtitle: PropTypes.string,
	subtitleStyle: Text.propTypes.style,
	contentComponent: PropTypes.node,

	iconComponent: PropTypes.element,
}, AccessoryCell.propTypes);

StaticCell.defaultProps = {
	disabled: false,
};

delete StaticCell.propTypes.children;
export default StaticCell;
