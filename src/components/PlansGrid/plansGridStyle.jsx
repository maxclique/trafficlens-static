export default (theme) => ({
  container: {
    marginTop: theme.spacing.unit,
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
