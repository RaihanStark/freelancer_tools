import React from "react";
import Layout from "./layout/Layout";
import KursConverter from "./containers/KursConverter/KursConverter";
import HourConverter from "./containers/HourConverter/HourConverter";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
function App() {
  return (
    <Layout>
      <Container maxWidth="md">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm={6}>
            <KursConverter />
          </Grid>
          <Grid item sm={6}>
            <HourConverter />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default App;
