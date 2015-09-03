var React = require("react")
var {div, span, label} = React.DOM
var cx = require("classnames")

module.exports = {
  errorList(errors) {
    let i = 0
    return (errors || []).map( (msg) => module.exports.error(msg, i++))
  },

  error(msg, i=0) {
    return span({className: "help-block", key: `error-${i}`},
      React.DOM.i({className: "fa fa-exclamation-circle"}, ` ${msg}`),
    )
  },

  label(props, overrides = {}) {
    let width = (props.labelWidth||{}).sm || 3
    if (!props.label || props.block) {
      if (props.layout === "horizontal" && !props.block) {
        return div({className: `col-sm-${width}`})
      }
      else {
        return ""
      }
    }
    let labelHtml = Object.assign({}, props, overrides)
    labelHtml.className = cx(labelHtml.className, {
      [`col-sm-${width}`]: props.layout === "horizontal",
    })
    return div({},
      label(labelHtml, props.label),
      savedText({saved: props.saved && props.layout === "vertical"}),
    )
  },

  savedText({saved, className}) {
    className = className || "frigb-saved pull-right"
    if (!saved) return ""
    return span({className, key: "saved"}, "saved")
  },

  savedNotification({layout, label, saved, className}) {
    className = className || "frigb-saved-inline"
    let savedInline = savedText({saved, className})

    if (label === false && saved) return savedInline
    if (label && saved && layout == "horizontal") return savedInline
  },

  inputContainerCx(props) {
    let width = 12 - ((props.labelWidth||{}).sm || 3)
    return cx("col-xs-12", {
      [`col-sm-${width}`]: props.layout == "horizontal" && !props.block,
    })
  },

  sizeClassNames(props) {
    var classes = {}
    var sizes = ["xs", "sm", "md", "lg"]
    // Adding column classes
    for (var k of sizes) {
      if (props[k] != null) classes[`col-${k}-${props[k]}`] = true
    }
    // Adding offset classes
    for (var size of sizes) {
      k = `${size}Offset`
      if (props[k] == null) continue
      classes[`col-${size}-offset-${props[k]}`] = true
    }
    return classes
  },

  formGroupCx(props, overrides = {}) {
    let isCheckbox = props.inputHtml.type === "checkbox"
    return cx(Object.assign({
      "form-group": !isCheckbox,
      "checkbox": isCheckbox,
      "has-error": props.errors != null,
      "has-success": props.modified && props.errors == null,
    }, overrides))
  },

}

var {savedText} = module.exports
