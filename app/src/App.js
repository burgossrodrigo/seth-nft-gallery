import './App.css';
import { Container, Box, Divider } from '@material-ui/core';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import MyComponent from "./MyComponent";
import React, { useState, useEffect } from 'react';
import getWeb3 from './ethereum.js';
import Footer from './components/Footer';
import RoadMap from './components/Timeline';

const drizzle = new Drizzle(drizzleOptions);

function App() {
		
		const theme = createMuiTheme({
		palette: {
		  type: "dark",
		},
		spacing: 2,

		});

		getWeb3();

		useEffect(() => {
			document.title = `Seth NFT Gallery`;
		  });

  return (
    
    <ThemeProvider theme={theme}>
		<Container maxWidth='lg'>
			
			<Header />
			<RoadMap />
			<FeaturedPost />
			<br />

			<Box>
			<DrizzleContext.Provider drizzle={drizzle}>
				<DrizzleContext.Consumer>
					{drizzleContext => {
					  const { drizzle, drizzleState, initialized } = drizzleContext;

					  if (!initialized) {
						return "Carregando Seth..."
					  }

					  return (
						<MyComponent drizzle={drizzle} drizzleState={drizzleState} />
					  )
					}}
				  </DrizzleContext.Consumer>
			</DrizzleContext.Provider>
			</Box>
			<Divider /> 	
			<Footer />	
		</Container>
	</ThemeProvider>
  );
}

export default App;
