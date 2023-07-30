import{_ as s,o,c as n,V as a}from"./chunks/framework.f3592640.js";const A=JSON.parse('{"title":"v-if","description":"","frontmatter":{},"headers":[],"relativePath":"code/vue/常用指令/01-v-if.md","filePath":"code/vue/常用指令/01-v-if.md"}'),e={name:"code/vue/常用指令/01-v-if.md"},l=a(`<h1 id="v-if" tabindex="-1">v-if <a class="header-anchor" href="#v-if" aria-label="Permalink to &quot;v-if&quot;">​</a></h1><p>在之前模版编译一节中，我给大家介绍了 Vue 3 的编译过程，即一个模版会经历 <code>baseParse</code>、<code>transform</code>、<code>generate</code> 这三个过程，最后由 <code>generate</code> 生成可以执行的代码（<code>render</code> 函数）。</p><blockquote><p>这里，我们就不从编译过程开始讲解 <code>v-if</code> 指令的 <code>render</code> 函数生成过程了，有兴趣了解这个过程的同学，可以看我之前的模版编译一节</p></blockquote><p>我们可以直接在 <a href="https://vue-next-template-explorer.netlify.app/" target="_blank" rel="noreferrer">Vue3 Template Explore</a> 输入一个使用 <code>v-if</code> 指令的栗子：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>然后，由它编译生成的 <code>render</code> 函数会是这样：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(_ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _cache</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> $props</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> $setup</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> $data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> $options) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">_ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">visible</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">_openBlock</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">_createBlock</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> key</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">_createCommentVNode</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">v-if</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>可以看到，一个简单的使用 <code>v-if</code> 指令的模版编译生成的 <code>render</code> 函数最终会返回一个<strong>三目运算表达式</strong>。首先，让我们先来认识一下其中几个变量和函数的意义：</p><ul><li><code>_ctx</code> 当前组件实例的上下文，即 <code>this</code></li><li><code>_openBlock()</code> 和 <code>_createBlock()</code> 用于构造 <code>Block Tree</code> 和 <code>Block VNode</code>，它们主要用于靶向更新过程</li><li><code>_createCommentVNode()</code> 创建注释节点的函数，通常用于占位</li></ul><p>显然，如果当 <code>visible</code> 为 <code>false</code> 的时候，会在当前模版中创建一个<strong>注释节点</strong>（也可称为占位节点），反之则创建一个真实节点（即它自己）。例如当 <code>visible</code> 为 <code>false</code> 时渲染到页面上会是这样：</p><div align="center"><img width="400" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa3d336210f34fff8f68d1b8cab83443~tplv-k3u1fbpfcp-zoom-1.image"></div><blockquote><p>在 Vue 中很多地方都运用了注释节点来作为<strong>占位节点</strong>，其目的是在不展示该元素的时候，标识其<strong>在页面中的位置</strong>，以便在 <code>patch</code> 的时候将该元素放回该位置。</p></blockquote><p>那么，这个时候我想大家就会抛出一个疑问：当 <code>visible</code> 动态切换 <code>true</code> 或 <code>false</code> 的这个过程（派发更新）究竟发生了什么？</p><h2 id="派发更新时-patch-更新节点" tabindex="-1">派发更新时 patch，更新节点 <a class="header-anchor" href="#派发更新时-patch-更新节点" aria-label="Permalink to &quot;派发更新时 patch，更新节点&quot;">​</a></h2><blockquote><p>如果不了解 Vue 3 派发更新和依赖收集过程的同学，可以看我之前的文章<a href="https://juejin.cn/post/6844904106415357959/" target="_blank" rel="noreferrer">4k+ 字分析 Vue 3.0 响应式原理（依赖收集和派发更新）</a></p></blockquote><p>在 Vue 3 中总共有四种指令：<code>v-on</code>、<code>v-model</code>、<code>v-show</code> 和 <code>v-if</code>。但是，实际上在源码中，只针对前面三者<strong>进行了特殊处理</strong>，这可以在 <code>packages/runtime-dom/src/directives</code> 目录下的文件看出：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// packages/runtime-dom/src/directives</span></span>
<span class="line"><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> driectives</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> vModel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts       ## v</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">model 指令相关</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> vOn</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts          ## v</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">on 指令相关</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> vShow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts        ## v</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">show 指令相关</span></span></code></pre></div><p>而针对 <code>v-if</code> 指令是直接走派发更新过程时 <code>patch</code> 的逻辑。由于 <code>v-if</code> 指令订阅了 <code>visible</code> 变量，所以当 <code>visible</code> 变化的时候，则会触发<strong>派发更新</strong>，即 <code>Proxy</code> 对象的 <code>set</code> 逻辑，最后会命中 <code>componentEffect</code> 的逻辑。</p><blockquote><p>当然，我们也可以称这个过程为组件的更新过程</p></blockquote><p>这里，我们来看一下 <code>componentEffect</code> 的定义（伪代码）：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// packages/runtime-core/src/renderer.ts</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">componentEffect</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isMounted</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    	</span><span style="color:#89DDFF;">....</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      	</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nextTree</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">renderComponentRoot</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">instance</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prevTree</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">subTree</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">subTree</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nextTree</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">patch</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">prevTree</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">nextTree</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#82AAFF;">hostParentNode</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">prevTree</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">!</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">!,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#82AAFF;">getNextHostNode</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">prevTree</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">parentSuspense</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">isSVG</span></span>
<span class="line"><span style="color:#F07178;">        )</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>可以看到，当<strong>组件还没挂载时</strong>，即第一次触发派发更新会命中 <code>!instance.isMounted</code> 的逻辑。而对于我们这个栗子，则会命中 <code>else</code> 的逻辑，即组件更新，主要会做三件事：</p><ul><li>获取当前组件对应的组件树 <code>nextTree</code> 和之前的组件树 <code>prevTree</code></li><li>更新当前组件实例 <code>instance</code> 的组件树 <code>subTree</code> 为 <code>nextTree</code></li><li><code>patch</code> 新旧组件树 <code>prevTree</code> 和 <code>nextTree</code>，如果存在 <code>dynamicChildren</code>，即 <code>Block Tree</code>，则会命中靶向更新的逻辑，显然我们此时满足条件</li></ul><blockquote><p>注：组件树则指的是该组件对应的 VNode Tree。</p></blockquote><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>总体来看，<code>v-if</code> 指令的实现较为简单，基于<strong>数据驱动</strong>的理念，当 <code>v-if</code> 指令对应的 <code>value</code> 为 <code>false</code> 的时候会<strong>预先创建一个注释节</strong>点在该位置，然后在 <code>value</code> 发生变化时，命中派发更新的逻辑，对新旧组件树进行 <code>patch</code>，从而完成使用 <code>v-if</code> 指令元素的动态显示隐藏。</p><div align="center"><img width="700" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd36f8e0870340eeb0d2fbcf56fec40a~tplv-k3u1fbpfcp-zoom-1.image"></div><blockquote><p>那么，下一节，我们来看一下 <code>v-show</code> 指令的实现～</p></blockquote>`,28),p=[l];function c(t,r,F,d,y,i){return o(),n("div",null,p)}const C=s(e,[["render",c]]);export{A as __pageData,C as default};
