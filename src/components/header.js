import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import headerStyles from "./header.module.scss"
function Header() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={headerStyles.header}>
      <Link to="/" className={headerStyles.title}>
        {site.siteMetadata.title}
      </Link>
      <nav>
        <ul className={headerStyles.nav_list}>
          <li>
            <Link
              to="/"
              activeClassName={headerStyles.active_nav_item}
              className={headerStyles.nav_item}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              activeClassName={headerStyles.active_nav_item}
              className={headerStyles.nav_item}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerStyles.nav_item}
              activeClassName={headerStyles.active_nav_item}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyles.nav_item}
              activeClassName={headerStyles.active_nav_item}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
