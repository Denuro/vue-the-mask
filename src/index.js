import tokens from './tokens'
import mask from './directive'
import TheMaskFilter from './filter'
import TheMask from './component.vue'

function install(Vue) {
  Vue.component(TheMask.name, TheMask)
  Vue.directive('mask', mask)
  Vue.filter('mask', TheMaskFilter)
}

export default install
export { TheMask, mask, TheMaskFilter, tokens }

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
