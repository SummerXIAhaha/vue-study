/* @flow */

import { toArray } from '../util/index'

// 在 Vue 构造函数上添加 use 方法
// 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
// 该方法需要在调用 new Vue() 之前被调用。
// 当 install 方法被同一个插件多次调用，插件将只会被安装一次。
export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      // 如果插件是一个对象，必须提供 install 方法。
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      // 如果插件是一个函数，它会被作为 install 方法。
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
