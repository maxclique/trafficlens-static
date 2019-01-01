/* eslint-disable global-require */
// @flow
import React from 'react'
import classNames from 'classnames'

import { connect } from 'react-redux'
import { graphql, StaticQuery } from "gatsby"
import withStyles from '@material-ui/core/styles/withStyles'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import Img from "gatsby-image"
import headerStyle from './headerStyle'

import { Link } from 'gatsby'

type Props = {
  dispatch: Function,
}

class Header extends React.Component<Props, {}> {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes, } = this.props

    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes.dark]: 'dark',
    })

    return (
      <AppBar position="static" className={appBarClasses}>
        <Toolbar>
          <StaticQuery
            query={graphql`
             query {
              file(relativePath: { eq: "logo-light-2.png" }) {
                childImageSharp {
                  # Specify the image processing specifications right in the query.
                  # Makes it trivial to update as your page's design changes.
                  fixed(width: 150) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }`}
            render={data => <Img fixed={data.file.childImageSharp.fixed} />}
          />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" color="primary" href="https://app.trafficlens.io/sign-in">Sign In</Button>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(headerStyle)(Header)
