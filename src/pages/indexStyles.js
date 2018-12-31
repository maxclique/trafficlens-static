
const indexStyle = theme => ({

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
  testimonialTitle: {
  },
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
})

export default indexStyle
