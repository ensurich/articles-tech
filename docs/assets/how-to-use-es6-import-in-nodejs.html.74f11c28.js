import{e as n}from"./app.cb330742.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="how-to-use-es6-import-in-node-js" tabindex="-1"><a class="header-anchor" href="#how-to-use-es6-import-in-node-js" aria-hidden="true">#</a> How to use ES6 import in Node.js</h1><h2 id="cannot-use-import-statement-outside-a-module" tabindex="-1"><a class="header-anchor" href="#cannot-use-import-statement-outside-a-module" aria-hidden="true">#</a> Cannot use import statement outside a module</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/Users/<span class="token punctuation">..</span>./src/.vuepress/config.js:2
<span class="token function">import</span> <span class="token punctuation">{</span> navbar, sidebar <span class="token punctuation">}</span> from <span class="token string">&#39;./configs&#39;</span>
^^^^^^

SyntaxError: Cannot use <span class="token function">import</span> statement outside a module
    at Object.compileFunction <span class="token punctuation">(</span>node:vm:352:18<span class="token punctuation">)</span>
    at wrapSafe <span class="token punctuation">(</span>node:internal/modules/cjs/loader:1031:15<span class="token punctuation">)</span>
    at Module._compile <span class="token punctuation">(</span>node:internal/modules/cjs/loader:1065:27<span class="token punctuation">)</span>
    at Object.Module._extensions<span class="token punctuation">..</span>js <span class="token punctuation">(</span>node:internal/modules/cjs/loader:1153:10<span class="token punctuation">)</span>
    at Module.load <span class="token punctuation">(</span>node:internal/modules/cjs/loader:981:32<span class="token punctuation">)</span>
    at Function.Module._load <span class="token punctuation">(</span>node:internal/modules/cjs/loader:822:12<span class="token punctuation">)</span>
    at Module.require <span class="token punctuation">(</span>node:internal/modules/cjs/loader:1005:19<span class="token punctuation">)</span>
    at require <span class="token punctuation">(</span>node:internal/modules/cjs/helpers:102:18<span class="token punctuation">)</span>
    at loadUserConfigEs <span class="token punctuation">(</span>/Users/tenghui/Develop/Github/ensurich/articles/node_modules/@vuepress/cli/lib/config/loadUserConfigEs.js:9:22<span class="token punctuation">)</span>
    at loadUserConfig <span class="token punctuation">(</span>/Users/tenghui/Develop/Github/ensurich/articles/node_modules/@vuepress/cli/lib/config/loadUserConfig.js:16:20<span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,3);function t(o,p){return e}var c=s(a,[["render",t]]);export{c as default};
