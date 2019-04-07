import MuuriGrid from "./components/MuuriGrid.vue";
import MuuriGridItemLink from "./components/Items/MuuriGridItemLink.vue";
import MuuriGridItem from "./components/Items/MuuriGridItem.vue";

var plugin = {
  install(Vue, store) {
    Vue.component("muuri-grid", MuuriGrid);
  }
};
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
export default plugin;
const version = "__VERSION__";

export { MuuriGrid, MuuriGridItem, MuuriGridItemLink, version };
