import React, { useState } from 'react';
import { Toolbar, 
		 Divider, 
		 Typography, 
		 IconButton, 
		 Badge, 
		 Breadcrumbs,
		 Button,
		 Box,
		 Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon  from '@material-ui/icons/Menu';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SideDrawer from './SideDrawer';
import AppBar from '@material-ui/core/AppBar';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Carousel from '../Carousel';
import Countdown from 'react-countdown';

const useStyle = makeStyles((theme) => ({

	title: {

		flexGrow: 1,
		justifyContent: 'left',
		color: 'red'
	},

	tagLine: {

		fontSize: 20,
		textTransform: 'uppercase',
		justifyContent: 'center',
		fontFamily: 'Montserrat',
		flexGrow: 1
		},
		
	root: {
		flexGrow: 1,
	},
	
	  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  
  link: {
	  

	  fontSize: 15,
	  textTransform: 'uppercase',
	  justifyContent: 'center',
	  fontFamily: 'arial'
	  
  },
  
  breadcrumb: {
	
     flexGrow: 1,
	  
  },
  
    imageIcon: {
    display: 'flex',
    height: 'inherit',
    width: 'inherit',
  },
  
  toolbar: {
	  
	  spacing: 8,
	  
  },

  countdown: {

	[theme.breakpoints.only('xs')]: {
			
		display: 'flex',
		flexDirection: 'column',
		padding: '10px',
	  
				  
	  },
	 [theme.breakpoints.between('sm', 'xl')]: {

	   display: 'flex',
	   flexDirection: 'column',
	   padding: '20px'
				  
	}

  },

  countdownItens: {

	[theme.breakpoints.only('xs')]: {
			

		padding: '10px',
	  
				  
			  },
	[theme.breakpoints.between('sm', 'xl')]: {

		padding: '20px'
				  
			  }


  },
  
  toolBar:{
	  
	  	[theme.breakpoints.only('xs')]: {
			
  display: 'flex',

			
		},
		[theme.breakpoints.between('sm', 'xl')]: {
			
		display: 'none',
			
		}
	  
  },
  
  breadCrumbs:{
	  
	  		[theme.breakpoints.only('xs')]: {
			
		display: 'none',
			
		},
		[theme.breakpoints.between('sm', 'xl')]: {
			
		display: 'flex',
		fontSize: '35px'
			
		}
	  
  }
  
  
	

}));



const Header = (props) => {
	
	

	
	const classes = useStyle();
	const [wallet, setWallet] = useState(false);
	const { width } = props;

	
	return(
	
		<>  

		
		<Toolbar className={classes.breadCrumbs} style={{color: 'secundary'}} >	
			<Typography variant='h4' className={classes.title}> Seth Gallery </Typography>
		<Box mr={5}>		
			<Breadcrumbs aria-label="breadcrumb" separator='|'>
			  <Link color="inherit" href='https://t.me/SethNFT' className={classes.link} variant='inherit' >
				Telegram
			  </Link>
			  <Link underline='hover' href='https://www.reddit.com/r/SethNFT/' className={classes.link} variant='inherit' color="inherit" >
				Reddit
			  </Link>
			  <Link underline='hover' href='https://twitter.com/SethNft' className={classes.link} variant='inherit' color="inherit" >
				Twitter
			  </Link>
			  <Link underline='hover' className={classes.link} variant='inherit' color="inherit" >
				BSC Scan
			  </Link>
			  <Link underline='hover' className={classes.link} variant='inherit' color="inherit" >
				Chart
			  </Link>
			</Breadcrumbs>
		</Box>	
				  <Button
			variant="contained"
			color="primary"
			className={classes.button}
			startIcon={            <Icon classes={{root: classes.iconRoot}}>
				  <img className={classes.imageIcon} src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png"/>
				</Icon>  }
		  >
			Buy
		  </Button>
		</Toolbar>
	
		
		

				<Toolbar className={classes.toolBar} style={{color: 'secundary'}}>	
					<Typography variant='h5' className={classes.title}> Seth Gallery </Typography>	
					

					<IconButton color='inherit'>
						<Badge badgeContent={1} color='secundary'>
							<AccountBalanceWalletIcon color="primary" onClick={() => {setWallet(true);}} />
						</Badge>
					</IconButton>
					<SideDrawer>
						<IconButton>
							<MenuIcon color="primary" />
						</IconButton>
					</SideDrawer>
					
		</Toolbar> 
				
			<Toolbar className={classes.title}>
				<Typography variant="h2"><Carousel /></Typography>				
			</Toolbar>

			<Toolbar className={classes.countdown}>
				<Typography>
					<Typography variant='h3'>Countdown</Typography>
				</Typography>
				<Typography variant='h2'>
					<Countdown date={Date.parse('2021-07-17T21:00:00Z')} />
				</Typography>
			</Toolbar>

			<Divider /> 	
			

		
		</>
	
	);
	
}

Header.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Header);