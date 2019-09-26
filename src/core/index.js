// 从 Vue 的出生文件导入 Vue
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

// 将 Vue 构造函数作为参数，传递给 initGlobalAPI 方法，
initGlobalAPI(Vue)

// 在 Vue.prototype 上添加 $isServer 属性，是否为服务器渲染（只读属性）
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

// 在 Vue.prototype 上添加 $ssrContext 属性（只读属性）
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue

/**
 * 在这个文件里，它首先将核心的 Vue，也就是在 core/instance/index.js 文件中的 Vue，也可以说是原型被包装(添加属性和方法)后的 Vue 导入，然后使用 initGlobalAPI 方法给 Vue 添加静态方法和属性，除此之外，在这个文件里，也对原型进行了修改，为其添加了两个属性：$isServer 和 $ssrContext，最后添加了 Vue.version 属性并导出了 Vue。
 * */
