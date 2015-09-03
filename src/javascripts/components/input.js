let React = require("react")
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {savedNotification} = require("../util.js")
let {div, input, span, p} = React.DOM
let {inputContainerCx} = require("../util.js")
let cx = require("classnames")

export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.Input"

  static defaultProps = Object.assign(require("../default_props.js"), {
    // Bootstrap input addon texts
    prefix: undefined,
    suffix: undefined,
    inputWrapper: input,
    // Block changes inputs with layout: "horizontal" to use the full width of
    // their container and disables the label.
    block: false,
    // Label width for horizontal labels
    labelWidth: {sm: 2},
  })

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      className: `${this.props.inputHtml.className || ""} form-control`.trim(),
      valueLink: this.props.valueLink,
    })
  }

  _inputPrefix() {
    if (this.props.prefix == null) return ""
    return div({className: "input-group-addon"}, this.props.prefix)
  }

  _input() {
    return this.props.inputWrapper(this._inputHtml())
  }

  _inputSuffix() {
    if (this.props.suffix == null) return ""
    div({className: "input-group-addon"}, this.props.suffix)
  }

  _inputGroup() {
    if (this.props.prefix || this.props.suffix) {
      return div({className: "input-group"},
        this._inputPrefix(),
        this._input(),
        savedNotification({parentProps: this.props}),
        this._inputSuffix(),
      )
    }
    else {
      return div({},
        this._input(),
        savedNotification({parentProps: this.props}),
      )
    }
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        label(this.props),
        div({className: inputContainerCx(this.props)},
          this._inputGroup(),
          errorList(this.props.errors),
        ),
      ),
    )
  }

}
