import{d as n}from"./app.bacc663a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><p>\u5B89\u88C5 git</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u67E5\u770B git \u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5\u540E\u89E3\u51B3 link \u6587\u4EF6\u51B2\u7A81</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To force the link and overwrite all conflicting files:</span>
brew <span class="token function">link</span> --overwrite <span class="token function">git</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u4E9B\u662F\u5404\u79CD\u573A\u5408\u5E38\u89C1\u7684 Git \u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5F00\u59CB\u4E00\u4E2A\u5DE5\u4F5C\u533A\uFF08\u53C2\u89C1\uFF1Agit help tutorial\uFF09
   clone     \u514B\u9686\u4ED3\u5E93\u5230\u4E00\u4E2A\u65B0\u76EE\u5F55
   init      \u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684 Git \u4ED3\u5E93\u6216\u91CD\u65B0\u521D\u59CB\u5316\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684\u4ED3\u5E93

\u5728\u5F53\u524D\u53D8\u66F4\u4E0A\u5DE5\u4F5C\uFF08\u53C2\u89C1\uFF1Agit help everyday\uFF09
   add       \u6DFB\u52A0\u6587\u4EF6\u5185\u5BB9\u81F3\u7D22\u5F15
   mv        \u79FB\u52A8\u6216\u91CD\u547D\u540D\u4E00\u4E2A\u6587\u4EF6\u3001\u76EE\u5F55\u6216\u7B26\u53F7\u94FE\u63A5
   restore   \u6062\u590D\u5DE5\u4F5C\u533A\u6587\u4EF6
   rm        \u4ECE\u5DE5\u4F5C\u533A\u548C\u7D22\u5F15\u4E2D\u5220\u9664\u6587\u4EF6

\u68C0\u67E5\u5386\u53F2\u548C\u72B6\u6001\uFF08\u53C2\u89C1\uFF1Agit help revisions\uFF09
   bisect    \u901A\u8FC7\u4E8C\u5206\u67E5\u627E\u5B9A\u4F4D\u5F15\u5165 bug \u7684\u63D0\u4EA4
   diff      \u663E\u793A\u63D0\u4EA4\u4E4B\u95F4\u3001\u63D0\u4EA4\u548C\u5DE5\u4F5C\u533A\u4E4B\u95F4\u7B49\u7684\u5DEE\u5F02
   grep      \u8F93\u51FA\u548C\u6A21\u5F0F\u5339\u914D\u7684\u884C
   log       \u663E\u793A\u63D0\u4EA4\u65E5\u5FD7
   show      \u663E\u793A\u5404\u79CD\u7C7B\u578B\u7684\u5BF9\u8C61
   status    \u663E\u793A\u5DE5\u4F5C\u533A\u72B6\u6001

\u6269\u5C55\u3001\u6807\u8BB0\u548C\u8C03\u6821\u60A8\u7684\u5386\u53F2\u8BB0\u5F55
   branch    \u5217\u51FA\u3001\u521B\u5EFA\u6216\u5220\u9664\u5206\u652F
   commit    \u8BB0\u5F55\u53D8\u66F4\u5230\u4ED3\u5E93
   merge     \u5408\u5E76\u4E24\u4E2A\u6216\u66F4\u591A\u5F00\u53D1\u5386\u53F2
   rebase    \u5728\u53E6\u4E00\u4E2A\u5206\u652F\u4E0A\u91CD\u65B0\u5E94\u7528\u63D0\u4EA4
   reset     \u91CD\u7F6E\u5F53\u524D HEAD \u5230\u6307\u5B9A\u72B6\u6001
   switch    \u5207\u6362\u5206\u652F
   tag       \u521B\u5EFA\u3001\u5217\u51FA\u3001\u5220\u9664\u6216\u6821\u9A8C\u4E00\u4E2A GPG \u7B7E\u540D\u7684\u6807\u7B7E\u5BF9\u8C61

\u534F\u540C\uFF08\u53C2\u89C1\uFF1Agit help workflows\uFF09
   fetch     \u4ECE\u53E6\u5916\u4E00\u4E2A\u4ED3\u5E93\u4E0B\u8F7D\u5BF9\u8C61\u548C\u5F15\u7528
   pull      \u83B7\u53D6\u5E76\u6574\u5408\u53E6\u5916\u7684\u4ED3\u5E93\u6216\u4E00\u4E2A\u672C\u5730\u5206\u652F
   push      \u66F4\u65B0\u8FDC\u7A0B\u5F15\u7528\u548C\u76F8\u5173\u7684\u5BF9\u8C61
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u65B0\u5EFA\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>
<span class="token comment"># or</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5F53\u524D\u5206\u652F develop \u6CA1\u6709\u5BF9\u5E94\u7684\u4E0A\u6E38\u5206\u652F\u3002 \u4E3A\u63A8\u9001\u5F53\u524D\u5206\u652F\u5E76\u5EFA\u7ACB\u4E0E\u8FDC\u7A0B\u4E0A\u6E38\u7684\u8DDF\u8E2A\uFF0C\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push --set-upstream origin develop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5BF9\u4E8E\u8FDC\u7AEF\u6700\u5E38\u7528\u7684\u64CD\u4F5C\u5C31\u662F\u66F4\u65B0\u548C\u63A8\u9001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> fetch origin <span class="token comment"># \u5C06\u672C\u5730\u7684\u8FDC\u7AEF\u548C\u8FDC\u7AEF\u8FDB\u884C\u540C\u6B65</span>
<span class="token function">git</span> merge origin/master <span class="token comment"># \u5C06\u672C\u5730\u7684\u8FDC\u7AEF\u5408\u5E76\u5230\u672C\u5730\u5206\u652F</span>

<span class="token function">git</span> pull origin <span class="token comment"># \u8FD9\u76F8\u5F53\u4E8E\u4E0A\u9762\u4E24\u6761\u547D\u4EE4</span>

<span class="token function">git</span> push origin master <span class="token comment"># \u5C06\u672C\u5730\u63A8\u9001\u5230\u8FDC\u7A0B\u5206\u652F</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5173\u4E8Epush\u7684\u5FC5\u987B\u5F97\u8BF4\u4E00\u4E0B\u5F15\u7528\u5C55\u5F00\uFF0C\u4E0B\u9762\u8FD9\u4E9B\u547D\u4EE4\u662F\u4E00\u6837\u7684\uFF0Cgit\u5185\u90E8\u90FD\u4F1A\u81EA\u52A8\u5C55\u5F00\u6210\u6700\u540E\u4E00\u6761</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin master
<span class="token function">git</span> push origin master:master
<span class="token function">git</span> push origin heads/master:heads/master
<span class="token function">git</span> push origin refs/heads/master:refs/heads/master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,18);function p(l,r){return e}var t=s(a,[["render",p]]);export{t as default};
