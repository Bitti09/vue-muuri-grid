import MuuriGrid from './components/MuuriGrid.vue'
import MuuriGridItemLink from './components/Items/MuuriGridItemLink.vue'
import MuuriGridItem from './components/Items/MuuriGridItem.vue'

const VueMuuriGrid = {

  install(Vue, options) {
    Vue.component('muuri-grid', MuuriGrid)
  }
}

export default VueMuuriGrid

export {
  MuuriGrid,
  MuuriGridItem,
  MuuriGridItemLink
}
