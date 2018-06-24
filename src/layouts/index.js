import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

import '../../sass/style.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Fuck Token"
    />
    <Navigation />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
