import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
     <Header />
     <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">404 page not found</h1>

          <p>Looks like this page does not exist, head over to our <Link to="/">home page</Link> to get back on track. </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;
