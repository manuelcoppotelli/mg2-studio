import React from 'react';
import _ from 'lodash';
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';

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
                  <LoadScript
                      googleMapsApiKey={process.env.GATSBY_APP_GOOGLE_MAPS_STATIC_API_KEY}
                  >
                      <GoogleMap
                        mapContainerStyle={{ width: '100%', height: '50vh' }}
                        center={_.get(this.props, 'pageContext.site.siteMetadata.map.center', null)}
                        zoom={_.get(this.props, 'pageContext.site.siteMetadata.map.zoom', null)}
                      >
                          <InfoWindow
                            position={_.get(this.props, 'pageContext.site.siteMetadata.map.marker.position', null)}
                          >
                            <div style={{ padding: 15, fontSize: 16}}>
                              {htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.map.marker.label', null))}
                            </div>
                          </InfoWindow>
                      </GoogleMap>
                  </LoadScript>
                </div>
              </div>
            </section>
        );
    }
}
