import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import Icon from '@material-ui/core/Icon';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  imageIcon: {
    display: 'flex',
    height: 'inherit',
    width: 'inherit'
  },
  iconRoot: {
    textAlign: 'center'
  }
});

export default function TemporaryDrawer({children, anchor, left}) {
  const classes = useStyles();
  const [state, setState] = React.useState({left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Telegram', 'Reddit', 'Twitter'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 3 === 0 ? <TelegramIcon />  : index % 2 ? <RedditIcon /> : <TwitterIcon /> }</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['PancakeSwap', 'Chart', 'BSCScan'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{
            index % 3 === 0 ? 
            <Icon classes={{root: classes.iconRoot}}>
              <img className={classes.imageIcon} src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png"/>
            </Icon>  
            : 
            index % 2 ? 
            
              <BarChartIcon />
  
            : 
            <Icon classes={{root: classes.iconRoot}}>
              <img className={classes.imageIcon} src="https://bscscan.com/images/brandassets/BscScan-logo-circle.jpg"/>
            </Icon> 
            }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{children}</Button>
          <Drawer anchor={left} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      
    </>
  );
}
