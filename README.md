# The Mask

A lightweight (2KB gzipped) and dependency free mask input created specific for Vue.js

## [Docs and Demo](https://vuejs-tips.github.io/vue-the-mask)

### [JsFiddle](https://jsfiddle.net/neves/r8cL3msn/1/)

![The Mask Heart](https://raw.githubusercontent.com/vuejs-tips/vue-the-mask/master/img/the-mask-heart.gif)

## Install

```
yarn add vue-the-mask
or
npm i -S vue-the-mask
```

## Usage (two flavors)

### Global

```javascript
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)
```

### Local (inside the component)

```javascript
import {TheMask} from 'vue-the-mask'
export default {
  components: {TheMask}
}
```

### Local (as directive)

```javascript
import {mask} from 'vue-the-mask'
export default {
  directives: {mask}
}
```

### Local (as filter)

```javascript
import {TheMaskFilter} from 'vue-the-mask'
export default {
  directives: {TheMaskFilter}
}
```

## Tokens

```javascript
'#': {pattern: /\d/},
'X': {pattern: /[0-9a-zA-Z]/},
'S': {pattern: /[a-zA-Z]/},
'A': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase()},
'a': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase()},
'!': {escape: true}
```

![The Mask Money](https://raw.githubusercontent.com/vuejs-tips/vue-the-mask/master/img/the-mask-hammer.gif)

## Properties

| Property    | Required | Type                    | Default | Description                                |
|-------------|----------|-------------------------|---------|--------------------------------------------|
| value       | false    | String                  |         | Input value or v-model                     |
| mask        | **true** | String, Array           |         | Mask pattern                               |
| masked      | false    | Boolean                 | false   | emit value with mask chars, default is raw |
| placeholder | false    | String                  |         | Same as html input                         |
| type        | false    | String                  | 'text'  | Input type (email, tel, number, ...)       |
| tokens      | false    | Object                  | [tokens](#tokens) | Custom tokens for mask           |

## What about money?

We understand that money format is a totally different domain, which needs another specific component. You can use https://github.com/vuejs-tips/v-money

![The Mask Money](https://raw.githubusercontent.com/vuejs-tips/vue-the-mask/master/img/the-mask-money.gif)

