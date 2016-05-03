import React from 'react'
import { sizeClassNames } from '../util.js'
import cx from 'classnames'

export default class Label extends React.Component {
  static displayName = 'FriggingBootstrap.Label'

  static propTypes = {
    labelWidth: React.PropTypes.object.isRequired,
    layout: React.PropTypes.string.isRequired,
    block: React.PropTypes.bool,
    label: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element,
    ]),
  }

  static defaultProps = {
    block: false,
    label: '',
  }

  isEmpty() { return !this.props.label }

  render() {
    const horizontalClasses = sizeClassNames(
      this.props.labelWidth, { offsets: false }
    )

    if (this.props.block) return null
    if (this.props.layout === 'horizontal' && this.isEmpty()) {
      return <div className={horizontalClasses} />
    }

    const labelHtml = Object.assign({}, this.props)
    labelHtml.className = cx(labelHtml.className, {
      [horizontalClasses]: this.props.layout === 'horizontal',
    })

    return (
      <div>
        <label {...labelHtml}>
          {this.props.label}
        </label>
      </div>
    )
  }
}
