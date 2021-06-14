import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row() {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      {/* R1 */}

      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          How to be a millionaire in 69 seconds?
        </TableCell>
        <TableCell align="right">
          <a href="https://www.youtube.com/"> sawaal ka jawab </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                <b>Description</b>
                <br /> A bird in hand is worth two in the bush. A bird in hand
                is worth two in the bush. A bird in hand is worth two in the
                bush. A bird in hand is worth two in the bush. A bird in hand is
                worth two in the bush.
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      {/* R2 */}

      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          How to be in a relationshop in BITS ?
        </TableCell>
        <TableCell align="right">
          <a href="https://www.youtube.com/"> sawaal ka jawab </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                <b>Description</b> <br /> A bird in hand is worth two in the
                bush. A bird in hand is worth two in the bush. A bird in hand is
                worth two in the bush. A bird in hand is worth two in the bush.
                A bird in hand is worth two in the bush.
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      {/* R3 */}
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Kaun hai ye log , kaha se aate hai?
        </TableCell>
        <TableCell align="right">
          <a href="https://www.youtube.com/"> sawaal ka jawab </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                <b>Description</b> <br /> A bird in hand is worth two in the
                bush. A bird in hand is worth two in the bush. A bird in hand is
                worth two in the bush. A bird in hand is worth two in the bush.
                A bird in hand is worth two in the bush.
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      {/* R4 */}
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Campus kab khulega?
        </TableCell>
        <TableCell align="right">
          <a href="https://www.youtube.com/"> sawaal ka jawab </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                <b>Description</b> <br /> A bird in hand is worth two in the
                bush. A bird in hand is worth two in the bush. A bird in hand is
                worth two in the bush. A bird in hand is worth two in the bush.
                A bird in hand is worth two in the bush.
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      {/* R5 */}
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Campus kab khulega?
        </TableCell>
        <TableCell align="right">
          <a href="https://www.youtube.com/"> sawaal ka jawab </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                <b>Description</b> <br /> A bird in hand is worth two in the
                bush. A bird in hand is worth two in the bush. A bird in hand is
                worth two in the bush. A bird in hand is worth two in the bush.
                A bird in hand is worth two in the bush.
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <b>Resource Name</b>
            </TableCell>
            <TableCell align="right">
              <b>Resource Link</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Row />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
