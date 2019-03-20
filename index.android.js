// index.android.js - place code in fere for Android

// Import a library to help create a component
import React from 'react'; //bagaimana component harus bekerja
import { AppRegistry } from 'react-native'; //portal ke mobile device
import Header from './src/components/header';

// Create a component
const App = () => (
		<Header />
	);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
