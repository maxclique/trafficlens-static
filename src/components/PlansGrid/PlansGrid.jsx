// @flow

import * as React from 'react'
import Dinero from 'dinero.js'
import {connect} from "react-redux";
import plansGridStyle from "./plansGridStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, List, ListItem, Card, CardHeader, CardContent, Typography, Button, CardActions, CircularProgress } from '@material-ui/core'

type Props = {
  plans: Array<{

  }>,
  onSelectPlan: Function,
}

const planFeatures = {
  Staging: {
    title: 'Staging',
    subheader:
      'For testing in non-production environments',
    features:
      [
        '1000 monthly requests',
        '1 app',
        '1s request timeout',
        'Encryption in transit and at rest',
        'Email support',
      ],
    buttonText: 'Sign up',
    buttonVariant: 'outlined',
  },
  Production: {
    title: 'Production',
    subheader:
      'For secured production workload',
    features:
      [
        'Unlimited requests',
        'Unlimited apps',
        'No request timeout',
        'End to end encryption',
        'Phone and email support',
      ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
    raised: true,
  }
  ,
}

const PlansGrid = (props: Props) => {
  const  { classes, plans } = props
  let planNodes = (
    <Grid item lg={12}>
      <CircularProgress />
    </Grid>
  )

  if (plans && plans.length) {
    planNodes = plans.map((plan) => {
      const {id, amount, name, currency } = plan.node
      const amountDinero = Dinero({
        amount,
        currency,
      })
      const { subheader, buttonVariant, features } = planFeatures[name]
      return (
        <Grid item key={id} xs={12} md={6}>
          <Card>
            <CardHeader
              title={name}
              subheader={subheader}
              titleTypographyProps={{align: 'center'}}
              subheaderTypographyProps={{align: 'center'}}
              className={classes.pricingHeader}
            />
            <CardContent>
              {amount &&
              <div className={classes.price}>
                <Typography component="h2" variant="h3" color="textPrimary">
                  {amountDinero.toFormat('$0,0.00')}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  /month
                </Typography>
              </div>
              }
              {features && features.length >= 1 &&
              <List>
                {features.map(line => (
                  <ListItem>
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  </ListItem>
                ))}
              </List>
              }
            </CardContent>
            <CardActions>
              <Button fullWidth variant={buttonVariant} color="primary" href="https://app.trafficlens.io/register">
                Select {name}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )
    })
  }
  return (
    <Grid container spacing={32} className={classes.container}>
      { planNodes }
    </Grid>
  )
}


export default withStyles(plansGridStyle)(PlansGrid)
