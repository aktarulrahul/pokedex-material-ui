import React from "react";
import { AppBar, CardContent, Grid, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
const useStyles = makeStyles({
  pokedexContainer: {
    padding: "20px 50px 0",
  },
});

const getPokemonCard = () => {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>hi</CardContent>
      </Card>
    </Grid>
  );
};

const Pokedex = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Grid container spacing={2} className={classes.pokedexContainer}>
        {getPokemonCard()}
        {getPokemonCard()}
        {getPokemonCard()}
        {getPokemonCard()}
        {getPokemonCard()}
        {getPokemonCard()}
      </Grid>
    </>
  );
};

export default Pokedex;
