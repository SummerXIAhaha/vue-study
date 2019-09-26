/* @flow */

import { ASSET_TYPES } from 'shared/constants'
import { isPlainObject, validateComponentName } from '../util/index'

export function initAssetRegisters (Vue: GlobalAPI) {
  /**
   * Create asset registration methods.
    Vue.component  注册或获取全局组件。注册还会自动使用给定的id设置组件的名称
    Vue.directive
    Vue.filter
   */
   
  ASSET_TYPES.forEach(type => {
    Vue[type] = function (
      id: string,
      definition: Function | Object
    ): Function | Object | void {
      if (!definition) {
        // 获取注册的组件 (始终返回构造器)
        // 返回已注册的指令
        // 获取全局过滤器。
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id)
        }
        // 注册组件，传入一个选项对象 (自动调用 Vue.extend)
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id
          definition = this.options._base.extend(definition)
        }
        // 注册 (指令函数) 会被 `bind` 和 `update` 调用
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition }
        }
        // 注册组件，传入一个扩展过的构造器
        // 注册指令对象 对象中需要包含一些函数x
        /**
        bind: function () {},
        inserted: function () {},
        update: function () {},
        componentUpdated: function () {},
        unbind: function () {} */
        // 注册全局过滤器。
        this.options[type + 's'][id] = definition
        return definition
      }
    }
  })
}
