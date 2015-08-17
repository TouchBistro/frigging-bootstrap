let React = require("react")
let Colr = require('colr')
let cx = require("classnames")
let {div} = React.DOM

export default class extends React.Component {
  static defaultProps = Object.assign(require("../../default_props.js"))

  propTypes: {
    color: React.PropTypes.string.isRequired,
    origin: React.PropTypes.string.isRequired,
  }

  _loadOrigin() {
    this.props.onChange(this.props.origin)
  }

  render() {
    return div({
          className: "sample",
        },
        div({
          className: "current",
          style: {background: this.props.color},
        }),
        div({
          className: "origin",
          style:({background: this.props.origin}),
          onClick: this._loadOrigin.bind(this),
        })
      )
    }
}