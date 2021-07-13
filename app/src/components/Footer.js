import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { List, Box } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import Icon from '@material-ui/core/Icon';
import GitHubIcon from '@material-ui/icons/GitHub';
import ListSubheader from '@material-ui/core/ListSubheader';
import BarChartIcon from '@material-ui/icons/BarChart';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	
	root:{
		
		paddingTop: '50px',
		fontSize: '10px',
		alignText: 'left'
		
	},
	

	
	  imageIcon: {
    display: 'flex',
    height: 'inherit',
    width: 'inherit'
  },
  iconRoot: {
    textAlign: 'center'
  },
	
	footGrid: {
		
		[theme.breakpoints.only('xs')]: {
			
  display: 'flex',
  flexDirection: 'column',
   alignItems: 'center',
   textAlign: 'left',
			
		},
		[theme.breakpoints.between('sm', 'xl')]: {
			
  display: 'flex',
  flexDirection: 'row',
			
		}
		
	}
	
}))

const Footer = () => {
	
	const classes = useStyles();
	return (<>
	<Box className={classes.root}>
		<Box className={classes.footGrid}>
		<List
		
		aria-labelledby="nested-list-subheader"
		subheader={
        <ListSubheader component="div" id="Social">
          Social
        </ListSubheader>
		}
		
		>
			<ListItem button>
				<ListItemIcon>
					<TelegramIcon classes={{root: classes.iconRoot}} />
				</ListItemIcon>	
				<ListItemText primary="Telegram" />
			</ListItem>
			
			<ListItem button>
				<ListItemIcon>
					<RedditIcon classes={{root: classes.iconRoot}} />
				</ListItemIcon>	
				<ListItemText primary="Reddit" />
			</ListItem>
			
				
			<ListItem button>
				<ListItemIcon>
					<TwitterIcon classes={{root: classes.iconRoot}} />
				</ListItemIcon>	
				<ListItemText primary="Twitter" />
			</ListItem>
			

		</List>

		<List
		
		mr='55px'
		aria-labelledby="nested-list-subheader"
		subheader={
        <ListSubheader component="div" id="Social">
          Blockchain and Development
        </ListSubheader>
		}>
			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Pancake Swap" />
			</ListItem>
			
			<ListItem button>
				<ListItemIcon>
					<GitHubIcon />
				</ListItemIcon>	
				<ListItemText primary="GitHub" />
			</ListItem>
			
				
			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="https://bscscan.com/images/brandassets/BscScan-logo-circle.jpg"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="BSC Scan" />
			</ListItem>
			
			<ListItem button>
				<ListItemIcon>
					<GitHubIcon />
				</ListItemIcon>	
				<ListItemText primary="GitHub" />
			</ListItem>
			
			<ListItem button>
				<ListItemIcon>
					<BarChartIcon />
				</ListItemIcon>
				<ListItemText primary="Chart" />
			</ListItem>
		</List>		
		</Box>
	</Box>
	</>
)};

Footer.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  };

export default withWidth()(Footer);