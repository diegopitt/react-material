import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Summary } from "./Summary";

let names = ["Bob", "Alice", "Dora"]    

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 350,
  }
}));

function reverseNames() {
  names.reverse();
}

function promoteName(name) {
  names = [name, ...names.filter(val => val !== name)];
}

export default function Promote() {
  const [counter, setCounter] = useState(0);
  const classes = useStyles();
  const incrementCounter = (increment) => setCounter(counter + increment);

  return (  
    <div id="container">
      <Table size="small" className={classes.table}>
        <TableHead>
          <TableRow>
            {/* <TableCell>#</TableCell> */}
            <TableCell>Name</TableCell>
            <TableCell>Letters</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { names.map((name, index) => 
            <TableRow key={name}>
              <Summary index={index} name={name} 
                reverseCallback={reverseNames}
                promoteCallback={promoteName}
                counter={ counter }
                incrementCallback={ incrementCounter }
              />
            </TableRow>                       
          )}
        </TableBody>
      </Table>
    </div>
  )
}
