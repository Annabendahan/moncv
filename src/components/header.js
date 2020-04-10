import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1rem`,
      maxWidth: 960,
      margin: `0 auto`,
      position: "relative",
    }}
  >
    <div
      className="header-content"
      style={{
        display: `flex`,
        justifyContent: `space-between`,

        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/#fonctionnement"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        <p> Fonctionnement </p>
      </Link>

      <Link
        to="/#contact"
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
