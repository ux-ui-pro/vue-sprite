<div align="center">
<br>

# vue-sprite

[![npm](https://img.shields.io/npm/v/vue-sprite.svg?colorB=brightgreen)](https://www.npmjs.com/package/vue-sprite)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/vue-sprite.svg)](https://github.com/ux-ui-pro/vue-sprite)
[![NPM Downloads](https://img.shields.io/npm/dm/vue-sprite.svg?style=flat)](https://www.npmjs.org/package/vue-sprite)

<sup>700B gzipped</sup>

<h3><a href="https://p3jt9k.csb.app/">Demo</a></h3>
</div>
<br>

&#10148; **Install**
 
```
yarn add vue-sprite
```
<br>

&#10148; **Import**

```javascript
import AppIcon from 'vue-sprite'
```
<br>

&#10148; **Use**

<sub>main.js</sub>
```javascript
import { createApp } from 'vue'
import AppIcon from 'vue-sprite'
import App from './App.vue';

const app = createApp(App)

app.component('AppIcon', AppIcon)
app.mount('#app')
```
<sub>The default path to the sprite file is `'./sprite.svg'`. You can pass your sprite file path:</sub>
```javascript
AppIcon.props.file.default = 'my_file_path/my_file.svg'
```
<sub>sprite.svg</sub>
```HTML
<svg id="sprite" aria-hidden="true" style="width: 0; height: 0; position: absolute;">
	<symbol id="icon-one" viewBox="0 0 100 100">
		<path ... />
	</symbol>
	<symbol id="icon-two" viewBox="0 0 100 100">
		<path ... />
	</symbol>
	...
</svg>
```
<sub>Use icons in any app component</sub>
```html
<AppIcon name="icon-one" />
```
<br>

&#10148; **License**

vue-sprite is released under MIT license
