/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Switch from '../../src/js/components/switch'
import td from 'testdouble'

import * as common from './_common.test'

describe('<Switch />', () => {
  const defaultProps = {
    valueLink: {
      value: true,
      requireChange: () => {},
    },
  }

  describe('common Bootstrap tests', () => {
    common.runInputErrorListTest(Switch, defaultProps)
    common.runSavedTest(Switch, defaultProps)
    common.runLabelTest(Switch, defaultProps)
  })

  const renderWrapper = (
    props = defaultProps,
    findClass = '.bootstrap-switch'
  ) => {
    const wrapper = mount(<Switch {...props} />)
    return wrapper.find(findClass)
  }

  describe('Default Props', () => {
    it('has width-switch=undefined', () => {
      const switchContainer = renderWrapper()

      expect(switchContainer.prop('width-switch')).to.be.undefined()
    })

    it('has style=marginLeft=0;width=undefined', () => {
      const switchComponent = renderWrapper(
        defaultProps,
        '.bootstrap-switch-container'
      )
      const switchComponentStyle = switchComponent.prop('style')

      expect(switchComponentStyle).to.have.property('marginLeft', '0')
      expect(switchComponentStyle).to.have.property('width', undefined)
    })
  })

  describe('prop.disable=true', () => {
    it('renders disable class', () => {
      const props = Object.assign({}, defaultProps, { disabled: true })
      const switchContainer = renderWrapper(props)

      expect(switchContainer.hasClass('bootstrap-switch-disabled')).to.be.true()
    })
  })

  describe('prop.handleWidth=50', () => {
    const handleWidth = 50

    it('outer switch has offset width of 102 (handleWidth * 2 + 2)', () => {
      const props = Object.assign({}, defaultProps, { handleWidth })
      const switchContainer = renderWrapper(props)
      const switchComponentStyle = switchContainer.prop('style')

      expect(switchComponentStyle).to.have.property('width', '102px')
    })

    describe('inner switch container', () => {
      it('offset marginLeft becomes 50 on valueLink.value=false', () => {
        const props = Object.assign({}, defaultProps, {
          handleWidth,
          valueLink: {
            value: false,
          },
        })
        const switchComponent = renderWrapper(props, '.bootstrap-switch-container')
        const switchComponentStyle = switchComponent.prop('style')

        expect(switchComponentStyle).to.have.property('marginLeft', '-50px')
      })

      it('offset width becomes 150 (handleWidth * 3)', () => {
        const props = Object.assign({}, defaultProps, { handleWidth })
        const switchComponent = renderWrapper(props, '.bootstrap-switch-container')
        const switchComponentStyle = switchComponent.prop('style')

        expect(switchComponentStyle).to.have.property('width', 150)
      })
    })
  })

  describe('on & off color', () => {
    it('renders class bootstrap-switch-onColour', () => {
      const props = Object.assign({}, defaultProps, { onColor: 'onColour' })
      const switchComponent = renderWrapper(props, '.bootstrap-switch-handle-on')

      expect(switchComponent.hasClass('bootstrap-switch-onColour')).to.be.true()
    })

    it('renders class bootstrap-switch-offColour', () => {
      const props = Object.assign({}, defaultProps, { offColor: 'offColour' })
      const switchComponent = renderWrapper(props, '.bootstrap-switch-handle-off')

      expect(switchComponent.hasClass('bootstrap-switch-offColour')).to.be.true()
    })
  })

  describe('private functions', () => {
    describe('_onClick()', () => {
      it('return false when disabled', () => {
        const props = Object.assign({}, defaultProps, { disabled: true })
        const booleanHOC = mount(<Switch {...props} />)
        const switchComponent = mount(booleanHOC.instance().render())
        const instance = switchComponent.instance()

        expect(instance._onClick()).to.be.false()
      })

      it('return true after updading valueLink.value', () => {
        const requestChange = td.function.call()
        const props = Object.assign({}, defaultProps, {
          valueLink: {
            value: true,
            requestChange,
          },
        })

        const booleanHOC = mount(<Switch {...props} />)
        const switchComponent = mount(booleanHOC.instance().render())
        const instance = switchComponent.instance()

        instance._onClick()

        td.verify(requestChange(false))
      })
    })
  })
})