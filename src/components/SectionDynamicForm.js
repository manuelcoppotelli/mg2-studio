import React from 'react';
import _ from 'lodash';
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

import {htmlToReact, markdownify} from '../utils';
import FormField from './FormField';

export default function SectionDynamicForm(props) {

    let section = _.get(props, 'section', null);
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

              <NetlifyForm
                name={_.get(section, 'form_id', null)}
                {...(_.get(section, 'form_action', null) ? ({action: _.get(section, 'form_action', null)}) : null)}
                honeypotName='bot-field'
                enableRecaptcha
                onSuccess={(response, context) => {
                  context.formRef.current.reset()
                }}
              >
                {({ handleChange, success, error }) => (
                  <>
                    <Honeypot />
                    {success && (
                      <p>
                        Thanks for contacting us!
                      </p>
                    )}
                    {error && (
                      <p>
                        Sorry, we could not reach servers. Because it only works on Netlify,
                        our GitHub demo does not provide a response.
                      </p>
                    )}
                    {_.map(_.get(section, 'form_fields', null), (field, field_idx) => (
                      <FormField key={field_idx} {...props} field={field} changeHandle={handleChange} />
                    ))}
                    <div className="form-submit">
                      <button type="submit" className="button">{_.get(section, 'submit_label', null)}</button>
                    </div>
                  </>
                )}
              </NetlifyForm>
            </div>
          </div>
        </section>
    );
}
