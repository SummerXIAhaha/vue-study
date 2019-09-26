## vue技术内幕 + vue源码学习

### 起点  npm run dev
rollup -w -c scripts/config.js --environment TARGET:web-full-dev

### 起点配置文件 scripts/config.js
* 起点配置项 ：'web-full-dev': {
              entry: resolve('web/entry-runtime-with-compiler.js'),
              dest: resolve('dist/vue.js'),
              format: 'umd',
              env: 'development',
              alias: { he: './entity-decoder' },
              banner
            },

### 起点文件 web/entry-runtime-with-compiler.js

### vue构造函数起点文件 core/instance/index

* initMixin(Vue)  // 在Vue的原型上添加_init方法
* stateMixin(Vue)  // 挂载数据处理方法以及数据存储对象 $data，$props，$watch,$set，$delete
* eventsMixin(Vue) // 挂载$on，$off,$emit,$once等事件挂载方法
* lifecycleMixin(Vue) // 把 VNode 渲染成真实的 DOM 挂载$forceUpdate ，$destroy ,_update 与dom相关方法
* renderMixin(Vue) // 挂载render函数和nextTick方法

### 全局方法挂载文件 core/global-api/index

* Vue.config
* Vue.set
* Vue.delete
* Vue.nextTick
* Vue.use
* Vue.mixin
* Vue.extend
* Vue.component
* Vue.directive
* Vue.filter
* Vue.version = '__VERSION__'
* Vue.compile = compileToFunctions

* 初始options：  Vue.options = {
                  components: {
                    KeepAlive
                  },
                  directives: Object.create(null),
                  filters: Object.create(null),
                  _base: Vue
                }
