import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import Calculator from "./components/Calculator/Calculator";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#1b1b2f"
  },
  calculatorIcon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar:{
    backgroundColor:"#162447"
  }
}));

function CalculatorIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fill="currentColor" d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H17V4H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z" />
    </SvgIcon>
  );
}
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <CalculatorIcon  className={classes.calculatorIcon}/>
          <Typography variant="h6" className={classes.title}>
            Calculator
        </Typography>
          <Button color="inherit">Fernando Gutiérrez R.</Button>
        </Toolbar>
      </AppBar>
      <Calculator initialValue="123"  />
    </div>
  );
}

export default App;
