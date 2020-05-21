import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    height: "50px",
    fontSize: "20px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    marginBottom: "10px",
  }
}));
const Result = (prop) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12}>
        <p type="text" className={classes.textField}>
          {prop.result}
        </p>
      </Grid>
    </Grid>
  );
};
export default Result;
