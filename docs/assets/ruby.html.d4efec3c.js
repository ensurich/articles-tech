import{e}from"./app.49680cab.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},a=e(`<h1 id="ruby" tabindex="-1"><a class="header-anchor" href="#ruby" aria-hidden="true">#</a> Ruby</h1><p>[toc]</p><p>##\u5E38\u7528\u547D\u4EE4 \u5B89\u88C5 ruby</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>brew install ruby
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u786E\u5B9A\u4F4D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>which ruby
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u67E5\u770B\u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ruby -v
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u628A ruby \u548C gems \u6DFB\u52A0\u5230 shell \u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># If you&#39;re using Zsh
echo &#39;export PATH=&quot;/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/3.0.0/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc

# If you&#39;re using Bash
echo &#39;export PATH=&quot;/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/3.0.0/bin:$PATH&quot;&#39; &gt;&gt; ~/.bash_profile

# Unsure which shell you are using? Type
echo $SHELL
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="rubygems" tabindex="-1"><a class="header-anchor" href="#rubygems" aria-hidden="true">#</a> RubyGems</h2><p>\u67E5\u770B\u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gem -v
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u67E5\u770B\u73AF\u5883</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gem env
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5207\u6362\u56FD\u5185\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u79FB\u9664\u9ED8\u8BA4\u7684\u955C\u50CF\u7AD9</span>
gem sources --remove https://rubygems.org/

<span class="token comment"># \u6DFB\u52A0\u56FD\u5185\u955C\u50CF\u7AD9</span>
gem sources --add https://gems.ruby-china.com/
<span class="token comment">#gem sources -a https://ruby.taobao.org/ ERROR:  SSL verification error at depth 0: Hostname mismatch (62)</span>

<span class="token comment"># \u67E5\u770B\u6E90</span>
gem sources -l
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="rbenv" tabindex="-1"><a class="header-anchor" href="#rbenv" aria-hidden="true">#</a> rbenv</h2><p>\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Install rbenv and ruby-build
brew install rbenv

# Set up rbenv integration with your shell
rbenv init

# Check your installation
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-doctor | bash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u67E5\u770B ruby \u6700\u65B0\u7248\u672C\uFF08\u7A33\u5B9A\u7248\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># List latest stable versions for each Ruby</span>
rbenv <span class="token function">install</span> -l
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5B89\u88C5 ruby</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rbenv install &lt;version&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,24);function r(l,i){return a}var t=s(n,[["render",r]]);export{t as default};
