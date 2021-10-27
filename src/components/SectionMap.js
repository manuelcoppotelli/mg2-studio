import React from 'react';
import _ from 'lodash';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {htmlToReact, markdownify} from '../utils';

export default class SectionMap extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let image = getImage(this.props.data.staticMap.childFile);
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
                  <GatsbyImage image={image} alt="" />
                </div>
              </div>
            </section>
        );
    }
}
