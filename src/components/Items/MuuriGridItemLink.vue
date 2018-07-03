<template>
  <div
    :id="id"
    class="item"
    :style="{
      'width': '100%',
      'max-width': computedWidth,
      'height': computedHeight
    }">
    <div class="item-content link-item" :class="size">
      <div class="handle"></div>
      <div class="clickable" v-on:click="goTo">
        <form :id="id + '-form'" method="get" :action="route">
          <div class="icon text-center" v-if="iconClass !== null">
            <i :class="iconClass"></i>
          </div>
          <div class="content text-center">
            <h5>{{ text }}</h5>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

  import sizes from '../../sizes'

  export default {
    name: 'item-link',
    props: {
      id: {
        type: [Number, String],
        default: 'tile'
      },
      text: {
        type: String,
        default: 'tile-text'
      },
      iconClass: {
        type: String,
        default: null
      },
      size: {
        type: [String],
        default : 'small'
      },
      width: {
        type: String,
        default: null
      },
      height: {
        type: String,
        default: null
      },
      route: {
        type: String,
        default: '',
      }
    },
    methods: {
      goTo() {
        this.$emit('MuuriGridItemLinkClick')
      }
    },
    computed: {
      computedWidth() {
        if(this.width){
          return this.width
        }
        return sizes[this.size].width
      },
      computedHeight() {
        if(this.height){
          return this.height
        }
        return sizes[this.size].height
      }
    }
  }
</script>

<style scoped>
.item {
  display: block;
  position: absolute;
  margin: 5px;
  z-index: 1;
}

.item.muuri-item-dragging {
  z-index: 3;
}

.item.muuri-item-releasing {
  z-index: 2;
}

.item.muuri-item-hidden {
  z-index: 0;
}

.item-content {
  position: relative;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
}

.clickable {
  height: 100%;
  font-weight: bold;
}
.clickable:hover {
  cursor: pointer
}

.clickable .icon{
  display: inline-block;
}

.clickable .content{
  display: inline-block;
}
</style>