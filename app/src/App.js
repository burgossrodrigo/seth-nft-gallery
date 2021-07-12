import './App.css'
import { Container, Grid, Box, Typography } from '@material-ui/core';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import MyComponent from "./MyComponent";
import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import getWeb3 from './ethereum.js';

const drizzle = new Drizzle(drizzleOptions);


const getWeb3Object = getWeb3();

function App() {
	

	
		const theme = createMuiTheme({
		palette: {
		  type: "dark",
		},
		spacing: 2,
		});

  return (
  
  
  
    <ThemeProvider theme={theme}>
		<Container maxWidth='lg'>
			
			<Header />
			<FeaturedPost {...getWeb3Object} />
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
		</Container>
	</ThemeProvider>
  );
}

export default App;
