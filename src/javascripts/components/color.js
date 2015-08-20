let React = require("react")
let Colr = require('colr')
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {div, input} = React.DOM
let cx = require("classnames")

let colorMap = React.createFactory(require("./color/map"))
let hue_slider =  React.createFactory(require("./color/hue_slider"))

export default class extends React.Component {

  static displayName = "Frig.friggingBootstrap.Color"

  static defaultProps = Object.assign(require("../default_props.js"))

  state = { showPopup: false }

  _onInputClick() {
    this.setState({
      showPopup: !this.state.showPopup,
    })
  }

  _setHex(hex) {
    hex = hex.replace(/[^\w\s]/gi, '')
    if(hex.length !== 3 && hex.length !== 6) return false

    let color = Colr.fromHex(hex)
    this.setState({
      color: color,
      hsv: color.toRawHsvObject(),
    })
  }

  _displayColor(){
    if (this.state.showPopup === false) return false
    return div({className: "controls colorpicker"},
      div({ className: "hue-slider" },
        hue_slider({
          max: 360,
          valueLink: this.props.valueLink,
        })
      ),
      colorMap({
        max: 100,
        valueLink: this.props.valueLink,
      })
    )
  }

  _getContrastYIQ(){
<<<<<<< HEAD
    let hexColor = this.props.valueLink.value || "000000"
=======
    let [, hexColor, colorLen] = getHSV(this.props, "#000")
>>>>>>> 07710c8... Remove Duplicated Functionality From Color

    if (this.refs.colorText === undefined
      || this.props.valueLink.value.length === 0) return hexColor

    let currentTextColor = this.refs.colorText.props.style.color

    if (colorLen !== 3 && colorLen !== 6) return currentTextColor
    if (colorLen === 3) hexColor = hexColor.concat(hexColor)

    let r = parseInt(hexColor.substr(0,2),16)
    let g = parseInt(hexColor.substr(2,2),16)
    let b = parseInt(hexColor.substr(4,2),16)
    let yiq = ((r*299)+(g*587)+(b*114))/1000

    return (yiq >= 128) ? "#000" : "#FFF"
  }

<<<<<<< HEAD
  _changeBackgroundColor(){
    let newBGColor = this.props.valueLink.value || "FFF"
=======
  _changeBackgroundColor() {
    let [, newBGColor, bgColorLen] = getHSV(this.props)
>>>>>>> 07710c8... Remove Duplicated Functionality From Color
    if (this.refs.colorText === undefined) return newBGColor

    let currentBG = this.refs.colorText.props.style.backgroundColor

    return bgColorLen === 3 || bgColorLen === 6 ? `#${newBGColor}` : currentBG
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        label(this.props),
        input(Object.assign({}, this.props.inputHtml, {
            valueLink: this.props.valueLink,
            ref: "colorText",
            className: cx(this.props.inputHtml.className, "form-control"),
            onClick: this._onInputClick.bind(this),
            style: {
               backgroundColor: this._changeBackgroundColor(),
               color: this._getContrastYIQ(),
            },
          }),
        ),
        this._displayColor(),
        errorList(this.props.errors),
      )
    )
  }

}
