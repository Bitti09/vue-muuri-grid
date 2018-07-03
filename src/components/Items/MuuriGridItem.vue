<template>
  <div :id="id" class="item"
    :style="{
      'width': '100%',
      'max-width': computedWidth,
      'height': computedHeight
    }">
    <div class="item-content" :class="size">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  import sizes from '../../sizes'

  export default {
    name: 'item',
    props: {
      id: {
        type: [Number, String],
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
</style>