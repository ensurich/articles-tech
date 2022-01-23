# How to use ES6 import in Node.js

## Cannot use import statement outside a module


```shell
/Users/.../src/.vuepress/config.js:2
import { navbar, sidebar } from './configs'
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1031:15)
    at Module._compile (node:internal/modules/cjs/loader:1065:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at loadUserConfigEs (/Users/tenghui/Develop/Github/ensurich/articles/node_modules/@vuepress/cli/lib/config/loadUserConfigEs.js:9:22)
    at loadUserConfig (/Users/tenghui/Develop/Github/ensurich/articles/node_modules/@vuepress/cli/lib/config/loadUserConfig.js:16:20)

```