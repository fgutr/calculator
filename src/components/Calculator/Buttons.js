import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ButtonsArray from "./ButtonsArray";
const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: "50px",
  },
  grid: {
    width: "auto",
  },
}));
const Buttons = (props) => {
  const classes = useStyles();
  const onClickButton = (prop) => (event) => {
    switch (prop) {
      case "=":
        calculate();
        break;
      case "C":
        reset();
        break;
      case "CE":
        backspace();
        break;
      default:
        if (props.result === "0") {
          props.setResult(String(prop));
        } else {
          props.setResult(props.result + prop);
        }
        break;
    }
  };

  const calculate = (prop) => {
    var checkResult = "";
    if (props.result.includes("--")) {
      checkResult = props.result.replace("--", "+");
    } else {
      checkResult = props.result;
    }

    try {
      props.setResult(
        // eslint-disable-next-line
        (eval(checkResult) || "") + ""
      );
    } catch (e) {
      props.setResult("error");
    }
  };
  const reset = () => {
    props.setResult("0");
  };

  const backspace = () => {
    if (props.result !== "0") {
      props.setResult(props.result.slice(0, -1));
    }
  };
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
          className={classes.grid}
        >
          {ButtonsArray.map((btn, index) => (
            <Grid item xs={3} key={index}>
              <Button
                onClick={onClickButton(btn.symbol)}
                className={classes.button}
                variant={btn.variant}
                color={btn.color}
              >
                {btn.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Buttons;
