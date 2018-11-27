import React from 'react'
import humanize from 'humanize-string'
import defaultProps from '../default_props.js'

export default class FormErrorList extends React.Component {
  static displayName = 'FriggingBootstrap.Errors'

  static defaultProps = defaultProps

  static propTypes = {
    errors: React.PropTypes.array.isRequired,
  }

  render() {
    const errorObj = this.props.errors
    // `errorObj` e.g. { name: ['is invalid'], phone: ['must be a number']}
    // convert to: [`name is invalid`, 'must be a number']
    const errors = Object.keys(errorObj).map(k => `${humanize(k)} ${errorObj[k]}`)
    return (
      <div>
        {
          errors.map((error) =>
            <div className="col-xs-12" key={`error-${error}`}>
              <div className="frigb-error" ref={`error-${error}`}>
                <div className="alert alert-danger">
                  <i className="fa fa-exclamation-circle" />
                  <span className="sr-only">Error:</span>
                  {` ${error}`}
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
