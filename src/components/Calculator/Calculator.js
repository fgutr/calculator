import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


import Result from "./Result";
import Buttons from "./Buttons";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    backgroundColor: "#fff",
    height: "100vh",
    flexGrow: 1,
    width: "50%",
  }
}));
const Calculator = (props) => {
  const classes = useStyles();
  const [result, setResult] = useState("0");

  useEffect(() => {
    if (props.initialValue) {
      setResult(props.initialValue);
    }
  }, [props.initialValue]);

  
  return (
    <div>
      <Container maxWidth="sm" className={classes.root}>
        <Card variant="outlined">
          <Result result={result} />
          <CardContent>
            <Buttons result={result} setResult={setResult}/>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
export default Calculator;
