import React, { useEffect, useState } from 'react';
import { CardContent, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import getBlockchain from '../ethereum.js';
import Web3 from 'web3';
import BALANCE from '../contracts/BALANCE.json'
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 500,
  },
  cover: {
	  
	  color: 'security'
	  
  }
  
})); 

const FeaturedPost = ({}) => {
	
	const web3 = new Web3(Web3.givenProvider);
	const balanceWeb3 = new web3.eth.Contract(BALANCE.abi, '0x7933ae7e0F8287D9A5D1644508DF286b7E01FE47'); 
	
			const buyNft = async () => {
		
		const accounts = await window.ethereum.enable();
		const account = accounts[0];
		const gas = await balanceWeb3.methods
		.buy(1)
		.estimateGas();
		await balanceWeb3.methods
		.buy(1)
		.send();
		
		
		
	}
	
		const [tokenInfo, setTokenInfo] = useState(undefined);
	
	useEffect(() => {
		
		const init = async () => {
		const { balance } = await getBlockchain();
		const tokenURI = await balance.tokenURI(0);
		const { data } = await axios.get(tokenURI);
		setTokenInfo(data.result);
		
    };
    init();
	
	}, []);

	const classes = useStyles();
	
	  if(typeof tokenInfo === 'undefined') {
    return (<>
	
		<Card>
		
			<CardContent className={classes.cover} >
			
				 <Typography className={classes.title} variant='4'>Loading..</Typography>
			
			</CardContent>
		
		</Card>
	
	</>);
  }

    return(<>
	

        <Card className={classes.cover}>
			<CardMedia
			  className={classes.media}
			  image="https://seth-balance.herokuapp.com/BALANCE.png"
			  title="Contemplative Reptile"
			/>
            <CardContent>
                <Typography className={classes.title} variant='h5'>{tokenInfo.name}</Typography><br />
				<Typography className={classes.title} variant='caption'>Author: {tokenInfo.author}</Typography><br />
				<Typography className={classes.title} variant='body2'>{tokenInfo.description}</Typography>
            </CardContent>
            <CardContent>
            <Button variant="contained">BUY 5 BNB</Button>
            </CardContent>
        </Card>
		

    </>);

}

export default FeaturedPost;