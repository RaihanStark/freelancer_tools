import React from "react";
import { Container, Typography } from "@material-ui/core";
import CardList from "../../UI/CardList/CardList";
import Grid from "@material-ui/core/Grid";

const Homepage = () => {
  return (
    <Container>
      <Typography variant="h6">List of Tools:</Typography>

      <CardList title="Kurs Calculator" />
    </Container>
  );
};

export default Homepage;
