import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { findKey } from 'lodash';
import { rhythm, scale } from 'utils/typography';
import { config } from 'config';
import IcelandMap from '../components/IcelandMap';

import '../css/base.css';
import '../css/typography.css';
import '../css/utils.css';
import '../css/utils-display/index.css';
import '../css/shame.css';


class Template extends React.Component {
  render () {
    const { location, route, children } = this.props;
    const currentPageKey = findKey(route.pages, {path: location.pathname});
    const currentPageData = route.pages[currentPageKey].data;
    const mapLocation = currentPageData.location || false;
    const marker = currentPageData.marker || false;
    console.log(mapLocation);
    let header
    if (location.pathname === prefixLink('/')) {
      header = (
        <h1
          style={{
            position: 'relative',
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={prefixLink('/')}
          >
            {config.blogTitle}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={prefixLink('/')}
          >
            {config.blogTitle}
          </Link>
        </h3>
      )
    }
    return (
      <div className="Page" style={{ position: 'relative'}}>
        <IcelandMap longitude={mapLocation.longitude} latitude={mapLocation.latitude} zoom={mapLocation.zoom} marker={marker}/>
        <div className="Page-content" style={{ position: 'relative'}}>
          {header}
          {children}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
  route: PropTypes.object,
}

export default Template
