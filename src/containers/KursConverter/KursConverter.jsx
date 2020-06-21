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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@material-ui/core";

class KursConverter extends Component {
  state = {
    amount: 0,
    kurs: 13800,
    receive: 0,
    tax: 0,
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

    // Calculate Tax Upwork
    if (this.state.includeTax) {
      amount -= 0.99;
    }

    // Calculate Tax
    const taxAmount = this.state.tax / 100;
    const afterTax = amount - amount * taxAmount;

    // Calculate Kurs
    const total = afterTax * this.state.kurs;

    this.setState({ receive: total.toFixed(2) });
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
              Fixed Price Calculator
            </Typography>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="amount"
                label="Amount"
                variant="outlined"
                onChange={this.handleChange("amount")}
                error={isNaN(this.state.amount)}
                value={isNaN(this.state.amount) ? null : this.state.amount}
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
                label="IDR/USD Rates"
                variant="outlined"
                onChange={this.handleChange("kurs")}
                error={isNaN(this.state.kurs)}
                value={isNaN(this.state.kurs) ? null : this.state.kurs}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Rp</InputAdornment>
                  ),
                }}
                required
              />
            </div>

            <FormControl
              variant="outlined"
              style={{ marginTop: "1.5em", width: "100%" }}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Tax
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="tax"
                label="Tax"
                value={this.state.tax}
                onChange={this.handleChange("tax")}
              >
                <MenuItem value={0}>0%</MenuItem>
                <MenuItem value={5}>5%</MenuItem>
                <MenuItem value={10}>10%</MenuItem>
                <MenuItem value={20}>20%</MenuItem>
              </Select>
            </FormControl>

            <div style={{ marginTop: ".5em" }}>
              <Tooltip
                title="Upwork withdrawal tax for 0.99 USD per transaction"
                placement="right"
              >
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
              </Tooltip>
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
