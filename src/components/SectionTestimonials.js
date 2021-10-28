import React from 'react';
import _ from 'lodash';

import {htmlToReact, classNames, withPrefix, getPages} from '../utils';

export default class SectionTestimonials extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let display_testimonials = getPages(this.props.pageContext.pages, '/testimonials');
        return (
            <section id={_.get(section, 'section_id', null)} className="block block-testimonials outer">
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
                {display_testimonials && (
                <div className="block-content">
                  <div className={classNames('grid', {'grid-col-2': _.get(section, 'col_number', null) === 'two', 'grid-col-3': _.get(section, 'col_number', null) === 'three'})}>
                    {_.map(display_testimonials, (testimonial, testimonial_idx) => (
                    <div key={testimonial_idx} className="grid-item">
                      <blockquote className="testimonial">
                        <p className="testimonial-content">{htmlToReact(_.get(testimonial, 'html', null))}</p>
                        <footer className="testimonial-footer">
                          {_.get(testimonial, 'frontmatter.avatar', null) && (
                          <img className="testimonial-avatar" src={withPrefix(_.get(testimonial, 'frontmatter.avatar', null))} alt={_.get(testimonial, 'frontmatter.avatar_alt', null)}/>
                          )}
                          <cite className="testimonial-author">{_.get(testimonial, 'frontmatter.title', null)}</cite>
                        </footer>
                      </blockquote>
                    </div>
                    ))}
                  </div>
                </div>
                )}
              </div>
            </section>
        );
    }
}
