// index.android.js - place code in fere for Android

// Import a library to help create a component
import React from 'react'; //bagaimana component harus bekerja
import { Text, AppRegistry } from 'react-native'; //portal ke mobile device

// Create a component
const App = () => (
		<Text>Some Text</Text>
	);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
