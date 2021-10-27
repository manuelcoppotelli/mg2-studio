import React from 'react';
import _ from 'lodash';
import GoogleMapReact from 'google-map-react'

import {htmlToReact, markdownify} from '../utils';

export default class SectionMap extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block block-form outer">
              <div className="inner">
                {(_.get(section, 'title', null) || _.get(section, 'subtitle', null)) && (
                <div className="block-header inner-sm">
                  {_.get(section, 'title', null) && (
                  <h2 className="block-title line-top">{_.get(section, 'title', null)}</h2>
                  )}
                  {_.get(section, 'subtitle', null) && (
                  <p className="block-subtitle">{htmlToReact(_.get(section, 'subtitle', null))}</p>
                  )}
                </div>
                )}
                <div className="block-content inner-sm">
                  {_.get(section, 'content', null) && (
                  markdownify(_.get(section, 'content', null))
                  )}
                  <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: process.env.GATSBY_APP_GOOGLE_MAPS_STATIC_API_KEY }}
                      defaultCenter={_.get(this.props, 'pageContext.site.siteMetadata.map.center', null)}
                      defaultZoom={_.get(this.props, 'pageContext.site.siteMetadata.map.zoom', null)}
                      onGoogleApiLoaded={({ map, maps }) => {
                        let marker = new maps.Marker({
                            position: { lat: _.get(this.props, 'pageContext.site.siteMetadata.map.lat', null), lng: _.get(this.props, 'pageContext.site.siteMetadata.map.lng', null) },
                            map,
                            title: 'Hello World!'
                        });
                        return marker;
                      }}
                    >
                    </GoogleMapReact>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
