import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";
import { CardContent, Card, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

const { AccountData, ContractData, ContractForm,  } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (<>


		<Card>
		<CardContent>
			<Typography variant='h5'>Tokenomics</Typography>
			<Typography>Total supply</Typography>
			<Typography variant='body2' componente='p'>  
			  <ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="Seth"
				method="totalSupply"
			  />
			 </Typography> 
		</CardContent>
		<CardContent>
			<Typography>Name</Typography>
			<Typography variant='h6'>
			<ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="Seth"
				method="name"
			/>
			</Typography>
			</CardContent>
			<CardContent>			
			<Typography>Symbol</Typography>
			<Typography variant='6'> 
			<ContractData
				drizzle={drizzle}
				drizzleState={drizzleState}
				contract="Seth"
				method="symbol"
			/>	
			</Typography>
			</CardContent>
			<CardContent>			
			<Typography>Taxes:</Typography>
			<Typography variant='h6'>
				8% liquidity
				2% Redistribution
			</Typography>
			
		</CardContent>  
		</Card>
          

  </>);
};
