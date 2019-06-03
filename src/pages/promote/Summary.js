import React, { Component } from "react";
import { SimpleButton } from "./SimpleButton";
import { HooksButton } from "./HooksButton";
import TableCell from '@material-ui/core/TableCell';
export class Summary extends Component {

  render() {
      const props = this.props;        
      return (
        <React.Fragment>
            <TableCell>{props.index + 1}</TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.name.length}</TableCell>
            <TableCell>
              <SimpleButton className="btn btn-warning btn-sm m-1"
                callback={ props.reverseCallback }
                text={ `Reverse (${ props.name })`}       
                { ...this.props }
              />
              <HooksButton className="btn btn-info btn-sm m-1"
                callback={ () => props.promoteCallback(props.name)}
                text={ `Promote (${ props.name})`}
                { ...this.props }
              />
            </TableCell>
        </React.Fragment>    
      )
  }
}
