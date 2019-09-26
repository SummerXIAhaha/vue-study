/* @flow */

import { mergeOptions } from '../util/index'

// 全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为。
export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    // 其实就是把传递的参数通过mergeOptions方法合并进options
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
