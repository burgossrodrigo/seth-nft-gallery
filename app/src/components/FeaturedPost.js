import React, { useEffect, useState } from 'react';
import { CardContent, 
		 Card, 
		 Typography, 
		 Box, 
		 Divider } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';
import CastForEducationTwoToneIcon from '@material-ui/icons/CastForEducationTwoTone';
import BALANCE from '../contracts/BALANCE.json';
import Web3 from 'web3';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  media: {
    height: 500,
  },
  cover: {
	  
	  
  },
  
  paperIcon: {
	  
	  position: 'relative',
	  align: 'center',
	  width: '50px'
	  
  }, 
  
  infoWrapper: {
	  

	  
	  	[theme.breakpoints.only('xs')]: {
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'center',
	  alignItems: 'center',
	  width: '100%',

	},
	
    [theme.breakpoints.between('sm', 'xl')]: {

	  display: 'flex',
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'flex-start',
	  width: '100%',
	
    },
	  
  },
  
  info: {
	  
	  width: '400px',
	  textAlign: 'justify',
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  flexDirection: 'columm',
	  marginTop: '5px',
	  padding: '20px'	
	  
	  
	  
	  
  },
  
  infoIcon: {
	  
	color: 'red',
	paddingBottom: '10px'
	  
  },
  
  balanceBox: {
	  
	[theme.breakpoints.only('xs')]: {
	  display: 'grid',
	  gridTemplateColumns: '1fr',
	  gap: '5px',
	  paddingBottom: '40px',
	  justifyContent: 'left',
	  alignItems: 'flex-start',
	  spacing: 8,

	},
	
    [theme.breakpoints.between('sm', 'xl')]: {

	  display: 'flex',
	  flexDirection: 'row',
	  paddingBottom: '40px',
	  justifyContent: 'left',
	  alignItems: 'flex-start',
	  spacing: 8,	
	
    },
		


	  
  },
  
    balanceBoxContent: {
	  

    [theme.breakpoints.only('sx')]: {

		width: '100%',

		
    },
    [theme.breakpoints.between('sm', 'xl')]: {

		width: '50%',
		marginLeft: '10px'
	
    },
		


	  
  }
  
})); 

const FeaturedPost = (props, {blockchain, drizzle, drizzleState, contracts}) => {
	
	
	const [balanceName, setBalanceName] = useState('');
	const { width } = props;
	const classes = useStyles();
	

		// Declare this call to be cached and synchronized. We'll receive the store key for recall.
		const buyNFT = async () => {

			const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://agitated-leakey:sprung-film-balmy-expose-uneven-atop@ws-nd-896-839-440.p2pify.com'));			
			const networkId = await web3.eth.net.getId();
			const deployedNetwork = BALANCE.networks[networkId];
			const balance = new web3.eth.Contract(
			  BALANCE.abi,
			  deployedNetwork && deployedNetwork.address,
			);
			const addresses = await web3.eth.getAccounts();
			const gas = await 
    		balance.methods.buy(0).estimateGas();
			await balance.methods.buy(0).send({from: addresses[0], value: '5000000000000000000'});
		};

	
		// Use the dataKey to display data from the store.


 
    return(<>
	
		<Box className={classes.infoWrapper} mt={5}>
	
			<Box className={classes.info} flexDirection='column'>
				<Box className={classes.infoIcon}>
					<ShareTwoToneIcon  fontSize="large" />
				</Box>	
					<Typography variant='caption'>
						Seth Ecossystem will be an dAPP with NFT orientation, intially on BSC but soon crosschain. In an near future we will run anf NFT cardgame with SETH and NFT airdrop award and charity
						NFT auctions.	
					</Typography>
			</Box>
			
			<Divider />

	
				<Box className={classes.info} flexDirection='column'>
				<Box className={classes.infoIcon}>	
					<AttachMoneyTwoToneIcon fontSize="large" color='secundary' />
				</Box>	
				<Typography variant='caption'>
						In our ecosystem we will have NFT trading and auctions, profits will be share among SETH holders by adding 30% of the profit to the token liquidity. Holders of some unique
						contracts will be given zero taxes
					</Typography>
				</Box>

				<Divider />	


				<Box className={classes.info} flexDirection='column'>
				<Box className={classes.infoIcon}>
					<CastForEducationTwoToneIcon fontSize="large" className={classes.infoIcon} color='error' />
				</Box>	
					<Typography variant='caption'>
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
					<Typography variant='caption'>Name: {} </Typography><br />
					<Typography variant='caption'>Author: {}</Typography><br />						
				</CardContent>
				<CardContent>
				<Button variant="contained" color="primary" onClick={() => {buyNFT();}}>BUY 5 BNB</Button>
				</CardContent>
			</Card>
			</Box>
			<Box className={classes.balanceBoxContent}>
				<Typography variant='h5' >About BALANCE</Typography>
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