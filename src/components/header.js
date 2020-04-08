import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1rem`,
      maxWidth: 960,
      margin: `0 auto`,
    }}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        width: `300px`,
        marginLeft: `80%`,

        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        <p> Fonctionnement </p>
      </Link>

      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        <p> Contact </p>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
