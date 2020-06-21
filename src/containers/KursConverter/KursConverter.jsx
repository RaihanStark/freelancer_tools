import React, { Component } from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";

class KursConverter extends Component {
  state = {
    amount: 0,
    kurs: 13800,
    receive: 0,
    includeTax: false,
  };

  includeTaxHandler = () => {
    this.setState({ includeTax: !this.state.includeTax });
  };

  handleChange = (props) => (e) => {
    this.setState({ [props]: parseInt(e.target.value) });
  };

  calculateHandler = () => {
    let amount = this.state.amount;

    if (this.state.includeTax) {
      amount -= 0.99;
    }

    console.log(amount);

    const total = amount * this.state.kurs;

    console.log(total);
    this.setState({ receive: total });
  };
  render() {
    return (
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ marginTop: "2.5em" }}
        >
          <Paper style={{ padding: "1.5em" }}>
            <Typography style={{ paddingBottom: "1.5em" }}>
              Kurs Calculator
            </Typography>
            <div>
              <TextField
                id="amount"
                label="Amount"
                variant="outlined"
                onChange={this.handleChange("amount")}
                error={isNaN(this.state.amount)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                required
              />
            </div>

            <div style={{ marginTop: "1.5em" }}>
              <TextField
                id="kurs"
                label="Kurs per Dollar"
                variant="outlined"
                onChange={this.handleChange("kurs")}
                error={isNaN(this.state.kurs)}
                value={this.state.kurs}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Rp</InputAdornment>
                  ),
                }}
                required
              />
            </div>

            <div style={{ marginTop: ".5em" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.includeTax}
                    onChange={this.includeTaxHandler}
                    name="includeTax"
                    color="primary"
                  />
                }
                label="Include Upwork Tax"
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              style={{ width: "100%", marginTop: ".5em" }}
              disabled={isNaN(this.state.amount) || isNaN(this.state.kurs)}
              onClick={this.calculateHandler}
            >
              Calculate
            </Button>
            {isNaN(this.state.kurs) && isNaN(this.state.kurs)}

            <div style={{ marginTop: "1.5em" }}>
              <TextField
                id="receive"
                label="You will receive"
                disabled
                variant="outlined"
                value={this.state.receive}
                error={isNaN(this.state.kurs)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Rp</InputAdornment>
                  ),
                }}
              />
            </div>
          </Paper>
        </Grid>
      </Container>
    );
  }
}

export default KursConverter;
