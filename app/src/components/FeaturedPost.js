import React, { useEffect, useState } from 'react';
import { CardContent, 
		 Card, 
		 Typography, 
		 Box, 
		 Paper, 
		 Grid, 
		 Divider } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Web3 from 'web3';
import { getWeb3, web3 } from '../ethereum.js';
import BALANCE from '../contracts/BALANCE.json'
import CardMedia from '@material-ui/core/CardMedia';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import { positions } from '@material-ui/system';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';
import CastForEducationTwoToneIcon from '@material-ui/icons/CastForEducationTwoTone';
import { flexbox, spacing } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing.unit,
	[theme.breakpoints.down('md')]: {
		
		display: 'flex',
		flexDirection: 'columm'
		
	},
	[theme.breakpoints.up('md')]: {
		
				display: 'flex',
		flexDirection: 'columm'
	},
	[theme.breakpoints.up('lg')]: {
		
		display: 'flex',
		flexDirection: 'row'
		
	},
	
  },
  media: {
    height: 500,
  },
  cover: {
	  
	  color: 'black',
	  backgroundColor: 'white',
	  
  },
  
  paperIcon: {
	  
	  position: 'relative',
	  align: 'center',
	  width: '50px'
	  
  },
  
  infoWrapper: {
	  
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'center',
	  alignItems: 'center',
	  width: '100%',
	  backgroundColor: 'black',
	  
  },
  
  info: {
	  
	  width: '400px',
	  textAlign: 'justify',
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  flexDirection: 'columm',
	  marginTop: '5px'
	  
	  
	  
  },
  
  infoIcon: {
	  
	color: 'red'
	  
  },
  
  balanceBox: {
	  
	[theme.breakpoints.down('md')]: {
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'left',
	  width: '100%',
	  alignItems: 'flex-start',
	  spacing: 8,
	  backgroundColor: 'white',
	  color: 'black'

	},
	
    [theme.breakpoints.up('lg')]: {

	  display: 'flex',
	  flexDirection: 'row',
	  justifyContent: 'left',
	  width: '100%',
	  alignItems: 'flex-start',
	  spacing: 8,
      backgroundColor: 'white',
	  color: 'black'	
	
    },
		


	  
  },
  
    balanceBoxContent: {
	  

    [theme.breakpoints.down('md')]: {

		width: '100%',

		
    },
    [theme.breakpoints.up('lg')]: {

		width: '50%',
		marginLeft: '10px'
	
    },
		


	  
  }
  
})); 

const FeaturedPost = ({web3}, props) => {
	
	
	const [balanceName, setBalanceName] = useState('');
	const { width } = props;
	const classes = useStyles();
	console.log(width);	
	
	const init = async () => {
		
		const id = await web3.eth.net.getId();
		const deployedNetwork = BALANCE.networks[id];
		const balance = new web3.eth.Contract(BALANCE.abi, deployedNetwork.adress);
		
						const buyNft = async () => {
		
		const accounts = await window.ethereum.enable();
		const account = accounts[0];	
		const gas = await balance.methods
		.buy(1)
		.estimateGas();
		await balance.methods
		.buy(1)
		.send();
	}
	
		async function returnName() {
		
		const balanceDataName = await balance.methods.name().call();
		console.log(balanceDataName);
	}
	
	init();
	}	

	

	



	

    return(<>
	
		<Box className={classes.infoWrapper} mt={5}>
	
			<Box className={classes.info} flexDirection='column'>
				<Box className={classes.infoIcon}>
					<ShareTwoToneIcon  />
				</Box>	
					<Typography variant='body1'>
						Seth Ecossystem will be an dAPP with NFT orientation, intially on BSC but soon crosschain. In order
						to promote our token and our platform we will be selling NFT collections with awards of temporary taxes free
						SETH trading. In an near future we will run anf NFT cardgame with SETH and NFT airdrop award and charity
						NFT auctions.	
					</Typography>
			</Box>
			
			<Divider />

	
				<Box className={classes.info} flexDirection='column'>
				<Box className={classes.infoIcon}>	
					<AttachMoneyTwoToneIcon color='secundary' />
				</Box>	
				<Typography variant='body1'>
						In our ecosystem we will have NFT trading and auctions, profits will be share among SETH holders by adding 30% of the profit to the token liquidity. Holders of some unique
						contracts will be given zero taxes
					</Typography>
				</Box>

				<Divider />	


				<Box className={classes.info} flexDirection='column'>
				<Box className={classes.infoIcon}>
					<CastForEducationTwoToneIcon className={classes.infoIcon} color='error' />
				</Box>	
					<Typography variant='body1'>
						Our git repository is already avaiable for anyone to copy at will still. We will build an youtube channel
						to teach about ERC721 openzeppelin, web3, digital art and much more!
					</Typography>
				</Box>

		</Box>
		
		<Divider />
		
		
		<Box className={classes.balanceBox} pt={10}>
			<Box className={classes.balanceBoxContent}>	
			<Card className={classes.cover}>
				<CardMedia
				  className={classes.media}
				  image="https://seth-balance.herokuapp.com/BALANCE.png"
				  title="BALANCE"
				/>
				<CardContent>
					<Typography variant='caption'>Name: {balanceName}</Typography><br />
					<Typography variant='caption'>Author: {}</Typography><br />						
				</CardContent>
				<CardContent>
				<Button variant="contained" onClick={() => {}}>BUY 5 BNB</Button>
				</CardContent>
			</Card>
			</Box>
			<Box className={classes.balanceBoxContent}>
				<Typography varian='h5' >About BALANCE</Typography>
				<Typography paragraph='true' variant="body2">
					BALANCE is the first NFT of the artist Hanna Kowalska. It was designed for the token launch, to acquire funds to the marketing campaign. In horder to show gratitude for the buyer we will allow the address owner of BALANCE, perpetual license from trading taxes and wallet  upon SETH token. 30% of the value will be added to the token liquidity, 20% will be for the gallery and for the artist and 50% will be invested in the marketing campaing.
				</Typography>
			</Box>
			
			
				
			
		</Box>
		

    </>);

}

FeaturedPost.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  };

export default withWidth()(FeaturedPost);