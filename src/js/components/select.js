import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'

import InputErrorList from './input_error_list'
import Saved from './saved'
import Label from './label'
import { sizeClassNames, formGroupCx } from '../util.js'
import defaultProps from '../default_props.js'
import defaultPropTypes from '../default_prop_types.js'

export default class Select extends React.Component {
  static displayName = 'FriggingBootstrap.Select'

  static defaultProps = Object.assign({}, defaultProps, {
    options: [],
  })

  static propTypes = Object.assign({},
    defaultPropTypes, {
      options: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          value: React.PropTypes.any.isRequired,
          label: React.PropTypes.string.isRequired,
        }).isRequired,
      ),
    }
  )

  componentWillMount() {
    const hasOptions = this.props.options.length !== 0
    if (hasOptions && this.props.value === '') {
      this._setInitialValue(this.props)
    }
  }

  componentWillReceiveProps(nextProps) {
    const hasOptions = nextProps.options.length !== 0
    // Setting the intial value of the select when the options load
    if (hasOptions && nextProps.value === '') {
      this._setInitialValue(nextProps)
    }
    // Blanking the select's value when the options are removed
    if (!hasOptions && nextProps.value !== '') {
      nextProps.onChange(undefined, { setModified: false })
    }
  }

  // Default a blank value to the first option (if there are no blank options)
  _setInitialValue(nextProps) {
    if (nextProps.options.filter(({ value }) => value === '').length > 0) {
      return
    }
    const value = nextProps.value || nextProps.options[0].value
    nextProps.onChange(value, { setModified: false })
  }

  // Reads the value from the DOM for the select input fields
  _getValue() {
    const el = ReactDOM.findDOMNode(this.refs.input)
    // The value is cast to a string when we get it from DOM.value. This is a
    // mapping of those strings to their original values in the options list.
    const originalValues = {}
    for (const option of this.props.options) {
      const valueHash = option.value.toString()
      originalValues[valueHash] = option.value
    }

    return originalValues[el.value] || el.value
  }

  _onChange() {
    this.props.onChange(this._getValue())
  }

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      key: 'input',
      ref: 'input',
      className: 'form-control',
      value: this.props.value,
      onChange: this.props.onChange,
    })
  }

  _selectOption(o) {
    const attrs = {
      key: `option-${o.label}`,
      value: o.value || '',
    }
    return <option {...attrs}>{o.label}</option>
  }

  render() {
    const labelProps = Object.assign({}, this.props, { className: '' })
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          <Label {...labelProps} />
          <div className="controls">
            <select {...this._inputHtml()}>
              {this.props.options.map(this._selectOption)}
            </select>
            <InputErrorList errors={this.props.errors} />
          </div>
          <Saved saved={this.props.saved} />
        </div>
      </div>
    )
  }

}
