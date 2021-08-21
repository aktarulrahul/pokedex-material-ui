import React, { useState } from "react";

import {
  AppBar,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import mockData from "../mockData";
const useStyles = makeStyles({
  pokedexContainer: {
    padding: "20px 50px 0",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
});

const toFirstCharUppercase = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);

const Pokedex = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(mockData);
  const getPokemonCard = (pokemonId) => {
    const { id, name } = pokemonData[`${pokemonId}`];
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <Grid item xs={12} sm={4} key={pokemonId}>
        <Card onClick={() => history.push(`/${pokemonId}`)}>
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
            style={{ width: "130px", height: "130px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}.${toFirstCharUppercase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map((pokemonId) =>
            getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;
