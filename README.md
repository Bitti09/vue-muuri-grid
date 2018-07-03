# vue-muuri-grid

> A Vue.js wrapper for the Muuri.js library - * W.I.P. / **Not** ready for production*

## Build Setup

# install dependencies
``` bash
npm install --save vue-muuri-grid

```

# Usage

## Initialising the plugin
```
import Vue from 'vue'
import VueMuuriGrid from 'vue-muuri-grid'

Vue.use(VueMuuriGrid)
```

## Using the plugin
Insert the grid by adding the following in your Vue application: 

```
<muuri-grid id="grid">

</muuri-grid>
```

Next you can import the necessary grid items

```
import { MuuriGridItemLink, MuuriGridItem } from 'vue-muuri-grid'
``` 
and add them as components.

After which you are able to insert the following into the grid:

```
<muuri-grid id="grid">

    // Item with a clickable action

    <muuri-grid-item-link id="link"
      text="Example Link"
      route="/">
    </muuri-grid-item-link>

    // A small grid item 

    <muuri-grid-item id="item-1"
                     size="small">
      <p>Small item.</p>
    </muuri-grid-item>

    // Which is the default

    <muuri-grid-item id="item-2">
      <p>Small item.</p>
    </muuri-grid-item>

    // A medium and large grid item

    <muuri-grid-item id="item-3"
                     size="medium">
      <p>Medium item.</p>
    </muuri-grid-item>
    <muuri-grid-item id="item-6"
                     size="large">
      <p>Large item.</p>
    </muuri-grid-item>

    // A grid item with custom size

    <muuri-grid-item id="item-6"
                     width="350px"
                     height="500px">
      <p>Custom length item.</p>
    </muuri-grid-item>

</muuri-grid>
```

## Events
*Coming soon*

## Default sizes
*Coming soon*

For further documentation on how Muuri.js works, go to the Muuri.js [docs]("https://github.com/haltu/muuri#table-of-contents")