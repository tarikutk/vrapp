import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class vrapp extends React.Component {
	state = {
		count: 0,
	};
	_incrementCount = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};
	render() {
		return (
			<View style={styles.panel}>
				<VrButton onClick={this._incrementCount} style={styles.greetingBox}>
					<Text style={styles.greeting}>
						{`You have visited Simmes ${this.state.count} times`}
					</Text>
				</VrButton>
			</View>
		);
	}
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('vrapp', () => vrapp);
