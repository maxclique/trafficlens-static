
import React from 'react'
import classNames from 'classnames'
import { Grid, Button, Typography, Card, CardMedia, CardContent, } from '@material-ui/core'
import { PlayArrow, Check } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import { graphql } from "gatsby"


import Layout from '../components/layout'
import SEO from '../components/seo'
import PlansGrid from '../components/PlansGrid/PlansGrid'

import withRoot from '../withRoot'

const style = theme => {
  return {
    hero: {
      height: '100vh',
      maxHeight: '1600px',
      overflow: 'hidden',
      position: 'relative',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      margin: '0',
      padding: '0',
      border: '0',
      display: 'flex',
      alignItems: 'center',
      '&:before': {
        background: 'rgba(0, 0, 0, 0.5)',
      },
      '&:after,&:before': {
        position: 'absolute',
        zIndex: '1',
        width: '100%',
        height: '100%',
        display: 'block',
        left: '0',
        top: '0',
        content: "''",
      },
    },
    heroContainer: {
      paddingRight: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '80%',
      zIndex: '2',
    },
    heroTitle: {
      marginTop: theme.spacing.unit * 5,
      marginBottom: theme.spacing.unit * 4,
      color: theme.palette.background.default,
    },
    heroSubtitle: {
      color: theme.palette.background.default,
      marginBottom: theme.spacing.unit * 3,
    },
    icon: {
      width: '18px',
      height: '18px',
      top: '3px',
      position: 'relative',
    },
    benefitContainer: {
      [theme.breakpoints.up('md')]: {
        height: '80vh',
        maxHeight: '800px',
      },
      overflow: 'hidden',
      backgroundColor: '#fff',
      margin: '0',
      padding: theme.spacing.unit * 8,
      border: '0',
      display: 'flex',
      alignItems: 'center',
    },
    grey: {
      backgroundColor: '#f1f4f5',
      [theme.breakpoints.down('md')]: {
        flexWrap: 'wrap-reverse',
      },
    },
    benefitImageContainer: {
      textAlign: 'center',
    },
    benefitImage: {
      [theme.breakpoints.down('xs')]: {
        maxWidth: '450px',
        maxHeight: '300px',
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: '600px',
        maxHeight: '400px',
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: '800px',
        maxHeight: '500px',
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '1000px',
        maxHeignt: '700px',
      },
      boxShadow: theme.shadows[4],
    },
    title: {
      color: theme.palette.secondary.light,
      marginBottom: theme.spacing.unit * 4,
    },
    benefitSubtitle: {
      ...theme.typography.title,
      fontSize: '1.5rem',
      color: theme.palette.grey.A700,
      marginTop: theme.spacing.unit,
    },
    benefitBody: {
      ...theme.typography.body2,
      fontSize: '1.25rem',
      color: theme.palette.grey.A400,
    },
    testimonialsSection: {
      overflow: 'hidden',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      margin: '0',
      padding: theme.spacing.unit * 8,
      border: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      '&:before': {
        background: 'rgba(0, 0, 0, 0.5)',
      },
      '&:after,&:before': {
        position: 'absolute',
        zIndex: '1',
        width: '100%',
        height: '100%',
        display: 'block',
        left: '0',
        top: '0',
        content: "''",
      },
    },
    testimonialsSectionTitle: {
      zIndex: 2,
      color: theme.palette.background.default,
      marginBottom: theme.spacing.unit * 6,
    },
    testimonialsContainer: {
      zIndex: 2,
    },
    testimonialCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    testimonialTitle: {},
    testimonialSubtitle: {
      color: theme.palette.grey.A100,
    },
    testinmonialAvatar: {
      maxWidth: '100px',
      maxHeight: '100px',
      borderRadius: '50%',
      overflow: 'hidden',
      padding: '0',
      boxShadow: theme.shadows[3],
    },
    testimonialQuote: {
      marginTop: theme.spacing.unit * 4,
      color: theme.palette.grey.A700,
    },
    billingChipContainer: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 4,
    },
    pricingSection: {
      [theme.breakpoints.up('md')]: {
        maxWidth: '1000px',
      },
      overflow: 'hidden',
      margin: '0 auto',
      padding: theme.spacing.unit * 8,
      border: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    pricingSectionTitle: {
      zIndex: 2,
      color: theme.palette.background.default,
      marginBottom: theme.spacing.unit * 6,
    },
    pricingCard: {
      paddingBottom: theme.spacing.unit,
      '& ul': {
        listStyle: 'none',
        padding: 0,
        maxWidth: '240px',
        margin: '10px auto',
      },
      '& ul li': {
        color: '#999',
        textAlign: 'center',
        padding: '12px 0px',
        borderBottom: '1px solid rgba(153,153,153,0.3)',
      },
    },
    pricingCardRaised: {
      boxShadow: theme.shadows[8],
    },
    pricingHeader: {
      backgroundColor: theme.palette.grey[200],
    },
    price: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing.unit * 2,
    },
  }
}

const testimonials = [
  {
    key: 'testimonial#1',
    avatar: require('../images/john.jpeg'),
    name: 'John McIntosh',
    title: 'Senior Software Engineer @ DOSH',
    quote: '"I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye"',
  },
  {
    key: 'testimonial#2',
    avatar: require('../images/eric.jpeg'),
    name: 'Eric Fennell',
    title: 'Senior Engineer Software @ Lifesize',
    quote: '"I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye"',
  },
  {
    key: 'testimonial#3',
    avatar: require('../images/linh.jpeg'),
    name: 'Linh Vo',
    title: 'Software Engineer @ IBM',
    quote: '"I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye"',
  },
]

export default withRoot(withStyles(style)((props) => {
  const { classes } = props
  const plans = props.data.allPlan.edges;

  const testimonialNodes = testimonials.map(
    ({
       key, avatar, name, title, quote,
     }) => (
      <Grid item xs={12} sm={12} md={4} key={key}>
        <Card className={classes.testimonialCard}>
          <CardMedia
            component="img"
            image={avatar}
            className={classes.testinmonialAvatar}
          />
          <CardContent>
            <Typography align="center" variant="h4" className={classes.testimonialTitle}>{name}</Typography>
            <Typography align="center" variant="subtitle1" className={classes.testimonialSubtitle}>
              {title}
            </Typography>
            <Typography variant="h5" className={classes.testimonialQuote}>
              {quote}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <React.Fragment>
        {/* Section hero */}
        <div
          className={classes.hero}
          style={{
            backgroundImage: `url(${require('../images/hero-bakground.jpg')})`,
          }}
        >
          <Grid container className={classes.heroContainer}>
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant="h2" className={classes.heroTitle}>Develop or consumer API?</Typography>
              <Typography variant="h5" className={classes.heroSubtitle}>
                Do so more efficiently with TrafficLens
              </Typography>
              <Button
                color="primary"
                variant="contained"
                size="large"
              >
                <PlayArrow className={classes.icon} /> See How
              </Button>
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={16} justify="center" className={classes.benefitContainer}>
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <Typography variant="h3" className={classes.title}>Save at least 10 minutes a day</Typography>
            <Typography className={classes.benefitBody}>
              TrafficLens notifies you in real-time of all requests to any URL, so that you can immediately discover issues rather than search through endless lines of code
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {/*<Img fixed={data.benefitImage1.childImageSharp.fluid} />*/}
            <img
              src={require('../images/screenshot-app.png')}
              alt="TrafficLens screenshot"
              className={classes.benefitImage}
            />
          </Grid>
        </Grid>
        <Grid container spacing={16} justify="center" className={classNames(classes.benefitContainer, classes.grey)}>
          <Grid item xs={12} sm={12} md={12} lg={6} className={classes.benefitImageContainer}>
            <img
              src={require('../images/screenshot-graphql.png')}
              alt="GraphQL support screenshot"
              className={classes.benefitImage}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} >
            <Typography variant="h3" className={classes.title}>Most important data at your fingertips</Typography>
            <Typography className={classes.benefitBody}>
              Rapidly see any GraphQL queries or mutations at a glance with our native GraphQL support
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={16} justify="center" className={classes.benefitContainer}>
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <Typography variant="h3" className={classes.title}>Built with security in mind</Typography>
            <Typography className={classes.benefitSubtitle}>
              <Check /> Encryption in transit
            </Typography>
            <Typography className={classes.benefitBody}>
              TLS or SSL keeps your data secured while it is in transit
            </Typography>
            <Typography className={classes.benefitSubtitle}>
              <Check /> Encryption in at rest
            </Typography>
            <Typography className={classes.benefitBody}>
              We use bank-level encryption (AES-256) to protect your data when it's stored in our database.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className={classes.benefitImageContainer}>
            <img
              src={require('../images/database-lock.png')}
              alt="Security"
              className={classes.benefitImage}
              style={{
                boxShadow: 'none',
              }}
            />
          </Grid>
        </Grid>

        <div
          className={classes.testimonialsSection}
          style={{
            backgroundImage: `url(${require('../images/ExcellentCustomerService6GoldenStars..jpg')})`,
          }}
        >
          <Typography variant="h3" className={classes.testimonialsSectionTitle}>From Happy Users</Typography>
          <Grid container spacing={32} className={classes.testimonialsContainer}>
            { testimonialNodes }
          </Grid>
        </div>

        <div className={classes.pricingSection} >
          <Typography variant="h3" className={classes.title}>Pricing</Typography>
          <Typography variant="h5">Start for free with 30 days trial</Typography>
          <PlansGrid plans={plans}/>
        </div>

      </React.Fragment>
    </Layout>
  )
}))

export const query = graphql`
query PlanQuery {
	allPlan {
    edges {
      node {
        name
        id
        amount
        currency
        isDefault
      }
    }
  }
}
`

