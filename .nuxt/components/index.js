export const AboutSection = () => import('../..\\components\\AboutSection.vue' /* webpackChunkName: "components/about-section" */).then(c => wrapFunctional(c.default || c))
export const AboutSection2 = () => import('../..\\components\\AboutSection2.vue' /* webpackChunkName: "components/about-section2" */).then(c => wrapFunctional(c.default || c))
export const AboutSection3 = () => import('../..\\components\\AboutSection3.vue' /* webpackChunkName: "components/about-section3" */).then(c => wrapFunctional(c.default || c))
export const Benefit = () => import('../..\\components\\Benefit.vue' /* webpackChunkName: "components/benefit" */).then(c => wrapFunctional(c.default || c))
export const ContactUs = () => import('../..\\components\\ContactUs.vue' /* webpackChunkName: "components/contact-us" */).then(c => wrapFunctional(c.default || c))
export const Features = () => import('../..\\components\\Features.vue' /* webpackChunkName: "components/features" */).then(c => wrapFunctional(c.default || c))
export const FooterSection = () => import('../..\\components\\FooterSection.vue' /* webpackChunkName: "components/footer-section" */).then(c => wrapFunctional(c.default || c))
export const FreeTrial = () => import('../..\\components\\FreeTrial.vue' /* webpackChunkName: "components/free-trial" */).then(c => wrapFunctional(c.default || c))
export const HomeSection = () => import('../..\\components\\HomeSection.vue' /* webpackChunkName: "components/home-section" */).then(c => wrapFunctional(c.default || c))
export const Integration = () => import('../..\\components\\Integration.vue' /* webpackChunkName: "components/integration" */).then(c => wrapFunctional(c.default || c))
export const Navigation = () => import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const Partnership = () => import('../..\\components\\Partnership.vue' /* webpackChunkName: "components/partnership" */).then(c => wrapFunctional(c.default || c))
export const Value = () => import('../..\\components\\Value.vue' /* webpackChunkName: "components/value" */).then(c => wrapFunctional(c.default || c))

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
