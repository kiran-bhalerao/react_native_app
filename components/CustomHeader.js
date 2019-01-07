import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class CustomHeader extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Icon
					name="menu"
					size={26}
					color="#7f7f7f"
					onPress={() => this.props._toggleDrawer()}
				/>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>SICCA</Text>
				</View>
				<Icon name="notifications" size={25} color="#7f7f7f" />
			</View>
		)
	}
}

const styles = {
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#F4FAFF',
		paddingRight: 10,
		paddingLeft: 10
	},
	titleContainer: {
		height: 70,
		justifyContent: 'center'
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		color: 'black'
	}
}

export default CustomHeader
