import{_ as n,c as a,I as l,V as o,o as p,J as e}from"./chunks/framework.987d87f6.js";const f=JSON.parse('{"title":"26-闭包","description":"","frontmatter":{"title":"26-闭包","publish":true},"headers":[],"relativePath":"basic/基础/JS高级/06-闭包.md","filePath":"basic/基础/JS高级/06-闭包.md"}'),t={name:"basic/基础/JS高级/06-闭包.md"},c=o(`<h2 id="闭包的引入" tabindex="-1">闭包的引入 <a class="header-anchor" href="#闭包的引入" aria-label="Permalink to &quot;闭包的引入&quot;">​</a></h2><p>我们知道，变量根据作用域的不同分为两种：全局变量和局部变量。</p><ul><li><p>函数内部可以访问全局变量和局部变量。</p></li><li><p>函数外部只能访问全局变量，不能访问局部变量。</p></li><li><p>当函数执行完毕，本作用域内的局部变量会销毁。</p></li></ul><p>比如下面这样的代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a) </span><span style="color:#676E95;font-style:italic;">// 打印报错：Uncaught ReferenceError: a is not defined</span></span></code></pre></div><p>上方代码中，由于变量 <code>a</code> 是函数内的局部变量，所以外部无法访问。</p><p>但是，在有些场景下，我们就是想要在函数外部访问函数内的局部变量，那要怎么办呢？这就需要引入闭包的概念。</p><h2 id="闭包的概念和代码举例" tabindex="-1">闭包的概念和代码举例 <a class="header-anchor" href="#闭包的概念和代码举例" aria-label="Permalink to &quot;闭包的概念和代码举例&quot;">​</a></h2><h3 id="闭包的概念" tabindex="-1">闭包的概念 <a class="header-anchor" href="#闭包的概念" aria-label="Permalink to &quot;闭包的概念&quot;">​</a></h3><p><strong>闭包</strong>（closure）：指有权<strong>访问</strong>另一个函数作用域中<strong>变量</strong>的<strong>函数</strong>。</p><p>上面这个概念，出自《JavaScript 高级程序设计（第 3 版）》这本书。上面的概念中指出，闭包是一种函数；当然，你可以<strong>把闭包理解成是一种现象</strong>。具体解释如下。</p><p>简单理解就是：如果<strong>这个作用域可以访问另外一个函数内部的局部变量</strong>，那就产生了闭包（此时，你可以把闭包理解成是一种现象）；而另外那个作用域所在的函数称之为<strong>闭包函数</strong>。注意，这里强调的是访问<strong>局部变量</strong>哦。</p><h3 id="闭包代码举例" tabindex="-1">闭包代码举例 <a class="header-anchor" href="#闭包代码举例" aria-label="Permalink to &quot;闭包代码举例&quot;">​</a></h3><p>代码举例：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn1</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn2</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">fn2</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">fn1</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><p>打印结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">10</span></span></code></pre></div><p>上方代码中，函数 fn2 的作用域 访问了 fn1 中的局部变量，那么，此时在 fn1 中就产生了闭包，fn1 称之为闭包函数。</p><h3 id="在-chrome-浏览器控制台中-调试闭包" tabindex="-1">在 chrome 浏览器控制台中，调试闭包 <a class="header-anchor" href="#在-chrome-浏览器控制台中-调试闭包" aria-label="Permalink to &quot;在 chrome 浏览器控制台中，调试闭包&quot;">​</a></h3><p>上面的代码中，要怎么验证，确实产生了闭包呢？我们可以在 chrome 浏览器的控制台中设置断点，当代码执行到 <code>console.log(a)</code>这一行的时候，如下图所示：</p><p><img src="http://img.smyhvae.com/20200703_2055.png" alt=""></p><p>上图中， Local 指的是局部作用域，Global 指的是 全局作用域；而 Closure 则是<strong>闭包</strong>，fn1 是一个闭包函数。</p><h2 id="闭包的作用-延伸变量的作用范围" tabindex="-1">闭包的作用：延伸变量的作用范围 <a class="header-anchor" href="#闭包的作用-延伸变量的作用范围" aria-label="Permalink to &quot;闭包的作用：延伸变量的作用范围&quot;">​</a></h2><p>我们来看看下面这段闭包的代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn1</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn2</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fn2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn1</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 执行 fn1() 之后，会得到一个返回值。foo 代表的就是 fn2 函数</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><p>上方代码中，foo 代表的就是整个 fn2 函数。当执行了 <code>foo()</code> 语句之后（相当于执行了 ），fn1 函数内就产生了闭包。</p><p>一般来说，在 fn1 函数执行完毕后，它里面的变量 a 会立即销毁。但此时由于产生了闭包，所以 <strong>fn1 函数中的变量 a 不会立即销毁，因为 fn2 函数还要继续调用变量 a</strong>。只有等所有函数把变量 a 调用完了，变量 a 才会销毁。</p><p>而且，可以看出， 在执行 <code>foo()</code>语句之后，竟然能够打印出 <code>20</code>，这就完美通过闭包实现了：全局作用域成功访问到了局部作用域中的变量 a。</p><p>因此，我们可以看出，闭包的主要作用就是：延伸了变量的作用范围。</p><p>上面的代码也可以简写成：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn1</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn1</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 执行 fn1() 之后，会得到一个返回值。这个返回值是函数</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span></span></code></pre></div>`,31);function r(y,F,i,A,D,C){const s=e("ArticleTopAd");return p(),a("div",null,[l(s),c])}const h=n(t,[["render",r]]);export{f as __pageData,h as default};
