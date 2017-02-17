# VueUniqIds

A [Vue.js](https://vuejs.org/) plugin that helps to use id-related attributes with no side-effect

[![NPM version](https://img.shields.io/npm/v/vue-uniq-ids.svg?style=flat-square)](https://www.npmjs.com/package/vue-uniq-ids)
![Bower version](https://img.shields.io/bower/v/vue-uniq-ids.svg?style=flat-square)

It is a trend to use components. Components are cool, they are small, obvious, easy to use and  modular. Untill it comes to the `id` property.

Some HTML tag attributes requires using an `id` property, like `label[for]`, `input[form]` and many of `aria-*` attributes. And the problem with the `id` is that it is not modular. If several `id` properties on the page will has the same value they can affect each other.

**VueUniqIds** helps you to get rid of this problem. It provides the set of id-related directives which value is automatically modified by adding [unique string](https://www.npmjs.com/package/qinu) while keeping the attrbitue easy to read.

## Installation

### Via NPM

Install the package

```bash
$ npm install vue-uniq-ids
```

### Via Bower

Install the package

```bash
$ bower install vue-uniq-ids
```

add script on page

```html
<script src="/bower_components/vue-uniq-ids/dist/vue-uniq-ids.js"></script>
```

or you can do it with [RequireJS](http://requirejs.org/) or any similar tool.

## Setup

There are three ways to setup **VueUniqIds**:

### 1. As a plugin

```js
// Import the plugin
import VueUniqIds from 'vue-uniq-ids'
// or
import { UniqIdsPlugin } from 'vue-uniq-ids'

// Install it with Vue.use()
import Vue from 'vue'
Vue.use(VueUniqIds, /* options */)
```

### 2. As a global mixin

```js
import Vue from 'vue'

// Import the mixin generator
import { createUniqIdsMixin } from 'vue-uniq-ids'

// Create the mixin
const uniqIdsMixin = createUniqIdsMixin(/* options */)

// Install it with Vue.mixin()
Vue.mixin(uniqIdsMixin)
```

### 3. As a local mixin

```js
import Vue from 'vue'

// Import the mixin generator
import { createUniqIdsMixin } from 'vue-uniq-ids'

// Create the mixin
const uniqIdsMixin = createUniqIdsMixin(/* options */)

// Add it to the instance
new Vue({
  mixins: [uniqIdsMixin],
  // …
})
// … or to the component
Vue.component('name', {
  mixins: [uniqIdsMixin],
  // …
})
```

## Usage

You can use those directives at any template if you add this extension by `Vue.use()` or `Vue.mixin()`, and in the template of the component where you specify the extension by `mixin: []` property.

Here is an example of using directives in `*.vue` file:

```html
<template>
  <form>
    <!-- Directives are expecting the string literal or a variable -->
    <label v-uni-for="'username'">Username</label>
    <!-- As well you can pass the list of items by array or a string where ids are separated by space -->
    <input v-uni-id="'username'"
        v-uni-aria-describedby="['username-description', 'username-hint']" />
    <p v-uni-id="'username-description'">Your public name</p>
    <p v-uni-id="'username-hint'">Use only latin characters</p>
  </form>
</template>
```

This will generate something like an example below:

```html
  <form>
    <label for="username-pc0k8g5b">Username</label>
    <input id="username-pc0k8g5b"
        aria-describedby="username-description-dnw4bvwy username-hint-oytscr4i" />
    <p id="username-description-dnw4bvwy">Your public name</p>
    <p id="username-hint-oytscr4i">Use only latin characters</p>
  </form>
```

The list of available attributes:
* id
* for
* form
* aria-activedescendant
* aria-controls
* aria-describedby
* aria-flowto
* aria-labelledby
* aria-owns

## Options and customization

There are several options to customize the behavior of directives. You can pass them in several ways:

0. With the plugin
   ```js
   import VueUniqIds from 'vue-uniq-ids'
   Vue.use(VueUniqIds, options)
   ```
0. With the mixin
   ```js
   import { createUniqIdsMixin } from 'vue-uniq-ids'
   Vue.mixin(createUniqIdsMixin(options))
   // or
   new Vue({
     mixins: [createUniqIdsMixin(options)],
     // …
   })
   ```
0. By uniqIdsConfig property
   ```js
   new Vue({
     uniqIdsConfig: options
   })
   ```

The options is an object, that can contain several properties from the example below:
```js
const options = {

  /*
   * scope {object|boolean} — is an object to store a list of generated ids
   *
   * If object is passed it will be used to store generated ids, so you can
   * share the same scope between several components
   * If the value is not object, but it is equivalent to true, the scope
   * object will be created automatically for current instance
   * Otherwise, plugin will use the global scope if the plugin was
   * initialized by Vue.use or Vue.mixin or it will create a new scope.
   * 
   * By default it is using the global scope
   */
  scope: true,

  /*
   * prefix {string} — a prefix for directive names
   * By default it is 'uni-'
   */
  prefix: 'uni-',

  /*
   * attrs: {array} — a list of attributes for which directives will be created
   * By default it is ['id', 'for', 'form', 'aria-activedescendant', 'aria-controls', 'aria-describedby', 'aria-flowto', 'aria-labelledby', 'aria-owns']
   */
  attrs: ['id', 'for'],
  
  /*
   * The rest are options for qinu — a unique string generator
   * Check the link for more details https://www.npmjs.com/package/qinu
   */

  /*
   * template {string} — the template for unique identifiers
   * 
   * The %qinu% will be replaced with generated uniq code, and %args[N]%'s are
   * replaced by args and directive value
   * 
   * By default it is '%arg[0]%-%qinu%'
   */
  template: '%arg[0]%-%arg[1]%-%qinu%',

  /*
   * args {array} — predefined args for template string
   *
   * This are values for template string, can be useful when you want to scope
   * ids with an additional name, or to avoid using value for directives in
   * the components with one id only.
   * 
   * By default it is empty
   */
  args: [],

  /*
   * chars {string|array} — a list of characters to generate the unique string
   */
  chars: '1234567890abcdef',

  /*
   * length {integer} — a length of unique string
   */
  length: 8
}
```

### An example of usage without specifying the value in template

```js
Vue.use(VueUniqIds)
Vue.component('input-section', {
  props: ['label'],
  template: '\n\
    <div>\n\
      <label v-uni-for>{{label}}</label>\n\
      <input v-uni-id />\n\
    </div>',
  uniqIdsConfig: {
    args: ['input-section'],
    scope: true
  }
})
```

This component will be rendered to code similar to the example below:

```html
    <div>
      <label for="input-section-97muvl55">LABEL</label>
      <input id="input-section-97muvl55" />
    </div>
```

## License

MIT © [Stanislav Termosa](https://github.com/termosa)

