import React, { useState } from 'react';
import { Toolbar, Divider, Typography, IconButton, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon  from '@material-ui/icons/Menu';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SideDrawer from './SideDrawer';
import AppBar from '@material-ui/core/AppBar';

const useStyle = makeStyles((theme) => ({

	title: {

		flexGrow: 1,
		justifyContent: 'left',
	},

	tagLine: {

		fontSize: 20,
		textTransform: 'uppercase',
		justifyContent: 'center',
		fontFamily: 'Montserrat',
		},
		
	root: {
		flexGrow: 1,
	},
	

}));



const Header = () => {

	const classes = useStyle();
	const [wallet, setWallet] = useState(false);
	
	return(
	
		<>  
		

				<Toolbar style={{color: 'secundary'}}>	
					<Typography variant='h6' className={classes.title}> Seth Gallery </Typography>	

					<IconButton color='inherit'>
						<Badge badgeContent={1} color='secundary'>
							<AccountBalanceWalletIcon onClick={() => {setWallet(true);}} />
						</Badge>
					</IconButton>
					<SideDrawer>
						<IconButton color="inherit">
							<MenuIcon />
						</IconButton>
					</SideDrawer>
				</Toolbar>

				
			<Toolbar className={classes.tagLine}>
				<Typography variant="h6">NFT gallery governed by $SETH token</Typography>				
			</Toolbar>
			
			<Divider />
			

		
		</>
	
	);
	
}

export default Header;