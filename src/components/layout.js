import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'An all in one system which helps hotels, hostels, vacation rentals, guesthouses and homestays save time and automate operations.' },
            { name: 'keywords', content: 'site, web' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="app-container">
          {children}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
