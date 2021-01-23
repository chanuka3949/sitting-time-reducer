import { Component } from "react";
import { db } from "../services/firebase";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      standup: [],
      reset: [],
    };
  }

  async componentDidMount() {
    try {
      db.ref("Stand Up/TimeStamp").on("value", (snapshot) => {
        let standups = [];
        snapshot.forEach((snap) => {
          standups.push([snap.val(), "Stand Up"]);
        });
        this.setState({ standup: standups });
        this.setState({
          values: [...this.state.reset, ...this.state.standup],
        });
        this.setState({values: this.state.values.sort((a, b) => b[0] - a[0])});
      });
      db.ref("Reset/TimeStamp").on("value", (snapshot) => {
        let resets = [];
        snapshot.forEach((snap) => {
          resets.push([snap.val(), "Reset"]);
        });
        this.setState({ reset: resets });
        this.setState({ values: [...this.state.standup, ...this.state.reset] });
        this.setState({values: this.state.values.sort((a, b) => b[0] - a[0])});
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const classes = this.props;
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date & Time</TableCell>
              <TableCell align="right">Reason</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.values.map((reading) => (
              <TableRow key={reading[0]}>
                <TableCell component="th" scope="row">
                  {new Date(reading[0]).toLocaleString()}
                </TableCell>
                <TableCell align="right">{reading[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
