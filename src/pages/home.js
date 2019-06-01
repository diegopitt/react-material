import React from 'react';
import clsx from 'clsx';
import { gql } from "apollo-boost";
import { Query } from 'react-apollo';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Deposits from './dashboard/Deposits';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

const GET_CITIES = gql`
  query {
    allCities{
      name
    }
  }`;

  const Cities = () => 
  <Query query={GET_CITIES} fetchPolicy="cache-and-network">
  {({ data, loading, refetch }) => loading ?
      <p>loading users...</p> :
      data.allCities.map(city => 
        <h3 key={city.name.toString()}>{city.name}</h3>
    ) 
  }
</Query> 
    
export default function Home() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (

      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Cities />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
        </Grid>
      </Container>
    );
  
}