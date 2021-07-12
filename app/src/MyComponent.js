import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";
import { Divider, CardContent, Card, Typography, Grid, Paper } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import style from './style.module.css';

const { AccountData, ContractData, ContractForm,  } = newContextComponents;

	const useStyles = makeStyles((theme) => ({
	  root: {
		flexGrow: 0,
	[theme.breakpoints.down('sm')]: {

    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.up('lg')]: {


    },
  },
	  
	  div: {
		color: theme.palette.text.secondary,
		widht: '25px',
		height: '60px'
	  },
	  
	  
	}));

export default ({ drizzle, drizzleState }) => {
	
	const classes = useStyles();
	
  return (<>
	
	
		 <div className={classes.root}>
		 <Typography variant='h5'>Token metadata:</Typography>
			<Grid container spacing={4}>
			

					
					<Grid item  xs={12} sm={6}>	
						<Paper className={classes.div} elevation={3}>
							<Typography>Total supply</Typography>
							<Typography variant='h6'>
							<ContractData
								drizzle={drizzle}
								drizzleState={drizzleState}
								contract="Seth"
								method="totalSupply"
							/>
							</Typography>
						</Paper>		
					</Grid>
					

					<Grid item  xs={12} sm={6}>	
						<Paper className={classes.div} elevation={3}>
							<Typography>Name</Typography>
							<Typography variant='h6'>
							<ContractData
								drizzle={drizzle}
								drizzleState={drizzleState}
								contract="Seth"
								method="name"
							/>
							</Typography>
						</Paper>		
					</Grid>

					<Grid item  xs={12} sm={6}>	
						<Paper className={classes.div} elevation={3}>
							<Typography>Symbol</Typography>
							<Typography variant='h6'>
							<ContractData
								drizzle={drizzle}
								drizzleState={drizzleState}
								contract="Seth"
								method="symbol"
							/>
							</Typography>
						</Paper>		
					</Grid>						

					
				
					<Grid item className={classes.div} xs={12} sm={6}>	
						<Paper className={classes.div} elevation={3}>
							<Typography>Owner</Typography>
							<Typography variant='h6'>
							<ContractData
								drizzle={drizzle}
								drizzleState={drizzleState}
								contract="Seth"
								method="owner"
							/>
							</Typography>
						</Paper>		
					</Grid>
			</Grid>
		</div>
  </>);
};
