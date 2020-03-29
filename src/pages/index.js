import React from 'react';

import Layout from '../components/layout';
import Footer from '../components/Footer';

import Sidebar from '../components/Sidebar';

import Intro from '../sections/Intro';
import Panels from '../sections/Panels';
import Notices from '../sections/Notices';
import Services from '../sections/Services';
import Contact from '../sections/Contact';



const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <Intro/>
      <Panels/>
      <Notices/>
      <Services/>
      <Contact/>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
