export { default as AboutSection } from '../..\\components\\AboutSection.vue'
export { default as AboutSection2 } from '../..\\components\\AboutSection2.vue'
export { default as AboutSection3 } from '../..\\components\\AboutSection3.vue'
export { default as Benefit } from '../..\\components\\Benefit.vue'
export { default as ContactUs } from '../..\\components\\ContactUs.vue'
export { default as FooterSection } from '../..\\components\\FooterSection.vue'
export { default as FreeTrial } from '../..\\components\\FreeTrial.vue'
export { default as HomeSection } from '../..\\components\\HomeSection.vue'
export { default as Integration } from '../..\\components\\Integration.vue'
export { default as Partnership } from '../..\\components\\Partnership.vue'
export { default as Value } from '../..\\components\\Value.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
