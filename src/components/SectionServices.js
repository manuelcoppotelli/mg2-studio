import React from 'react';
import _ from 'lodash';

import {htmlToReact, classNames, withPrefix, markdownify, getPages, Link} from '../utils';

export default class SectionServices extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);

        let display_services = _.orderBy(getPages(this.props.pageContext.pages, '/servizi'), 'frontmatter.date', 'desc');
        let services_by_category = _.map(
            _.groupBy(display_services, elem => elem.frontmatter.category),
            (vals, key) => {
                return {category: key, services: vals}
            }
        )

        let display_categories = getPages(this.props.pageContext.pages, '/categorie')
        let categories_data = _.map(display_categories, (vals, key) => {
            return {category:vals.name, data: vals}
        })

        let services_data = _.merge(_.keyBy(categories_data, 'category'), _.keyBy(services_by_category, 'category'))

        return (
            <section id={_.get(section, 'section_id', null)} className="block block-grid outer">
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
                {services_data && (
                <div className="block-content">
                  <div className={classNames('grid', {'grid-col-2': _.get(section, 'col_number', null) === 'two', 'grid-col-3': _.get(section, 'col_number', null) === 'three'})}>
                    {_.map(services_data, (item, item_idx) => (
                    <div key={item_idx} className="grid-item">
                      {_.get(section, 'is_numbered', null) && (
                      <span className="grid-item-counter" aria-hidden="true">{item_idx + 1}.</span>
                      )}
                      {_.get(item, 'data.frontmatter.image', null) && (
                      <div className="grid-item-image">
                        <img src={withPrefix(_.get(item, 'data.frontmatter.image', null))} alt={_.get(item, 'image_alt', null)} />
                      </div>
                      )}
                      {_.get(item, 'data.frontmatter.title', null) && (
                      <h3 className="grid-item-title">{_.get(item, 'data.frontmatter.title', null)}</h3>
                      )}
                      {_.get(item, 'data.html', null) && (
                      <div className="grid-item-content">
                        {markdownify(_.get(item, 'data.html', null))}
                        {_.get(item, 'services', null) && (
                          <ul>
                             {_.map(_.get(item, 'services', null), (service, service_idx) => (
                                  <li key={service_idx}>
                                      <Link to={withPrefix(_.get(service, 'url', null))}>
                                          {service.frontmatter.title}
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                        )}
                      </div>
                      )}
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
