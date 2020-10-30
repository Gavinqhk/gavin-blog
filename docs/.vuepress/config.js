module.exports = {
  base: '/', // 部署站点的基础路径
  title: 'Gavin Blog', // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
  description: '知识学习文档，包含前端后端服务器等知识文档，js，vue，typescript，es6，nodejs等等', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  head: [ // 额外的需要被注入到当前页面的 HTML <head> 中的标签，每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?] 的格式指定
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'keywords', content: '前端，js，vue，typescript，es6，nodejs' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // host: '0.0.0.0', // 指定用于 dev server 的主机名。
  // port: '8080', // 指定 dev server 的端口
  // temp:'', // 指定客户端文件的临时目录。
  // dist: 'dist', // 指定 vuepress build 的输出目录。如果传入的是相对路径，则会基于 process.cwd() 进行解析。
  // locales: undefined, // 类型: { [path: string]: Object } 提供多语言支持的语言配置
  // shouldPrefetch:() => {}, // 一个函数，用来控制对于哪些文件，是需要生成 <link rel="prefetch"> 资源提示的
  // cache: true, // 此选项可以用于指定 cache 的路径，同时也可以通过设置为 false 来在每次构建之前删除 cache
  // extraWatchFiles: [], //指定额外的需要被监听的文件,文件变动将会触发 vuepress 重新构建，并实时更新。
  // patterns:'', // Specify which pattern of files you want to be resolved.
  // palette.styl
  // index.styl
  // theme: 'vuepress-theme-xx', // 当你使用自定义主题的时候，需要指定它。
  themeConfig: { // 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题
    // logo: '/assets/img/logo.png',
    displayAllHeaders: true,
    nav: [{
      text: '栈内技术',
      link: '/browser/',
      items: [
        {text: '浏览器', link: '/browser/'},
        {text: 'es6+', link: '/es6/'}
      ],
      items: [{
        text: '浏览器',
        items: [{
          text:'浏览器',
          link: '/browser/',
        }]
        },{
          text: '浏览器',
          items: [{
            text:'浏览器',
            link: '/browser/',
          }]
        },
      ]
    },{
      text: '栈外技术',
      link: '/javascript/',
      items: [
        {text: 'js1', link: '/javascript/'},
        {text: 'es6+', link: '/es6/'}
      ]
    },{
      text: '项目工程',
      link: '/vue/',
      items: [
        {text: 'js1', link: '/javascript/'},
        {text: 'es6+', link: '/es6/es6-1'}
      ]
    },{
      text: '其他技术',
      ariaLabel: 'js Menu',
      items: [
        {text: 'js1', link: '/javascript/'},
        {text: 'es6+', link: '/es6/es6-1'}
      ]
    },{
      text:'Github',
      link: 'https://github.com/Gavinqhk'
    }],
    sidebar: {
      '/browser/': [{
        title: '浏览器',
        collapsable: false,
        children: []
      }],
      '/typescript/': [{
          title: 'typescript',
          collapsable: false,
          initialOpenGroupIndex: -1,
          children: [{
              title: 'ts1', 
              path: 'ts1',
              collapsable: true,
            },{
              title: 'ts2',
              path: 'ts2'
            }
          ]
      }],
      '/vue/': [{
        title: 'vue',
        collapsable: false,
        children: [
          {
            title: 'vue1', 
            path: 'vue1',
            collapsable: true,
          },
          {title: 'vue2', path: 'vue2'}
        ]
    }]
    }
  },
  plugins: {// 插件配置
		'@vuepress/active-header-links': {
			// 页面滚动时自动激活侧边栏链接的插件，效果就是右边内容滚动的时候，看到哪里了，左侧菜单会自动高亮显示当前看的目录
			// cnpm install -D @vuepress/plugin-active-header-links
			sidebarLinkSelector: '.sidebar-link',
			headerAnchorSelector: '.header-anchor'
    },
    '@vuepress/back-to-top': true,  // 章看到下面的时候，点击一个图标会回到顶部
    '@vuepress/nprogress': true, //默认为true，设置为false可以关闭进度条
    '@vuepress/search': {   // 在导航栏进行全局搜索
			search: true, //默认false
			searchMaxSuggestions: 10 // 默认是5
		},
		'@vuepress/google-analytics': {
			// 帮我们统计网站的流量和分析网站的一些功能
			// cnpm install -D @vuepress/plugin-google-analytics
			'ga': 'UA-166594741-1' // UA-00000000-0
		},
		'@vuepress/pwa': {   //网页内容有更新的时候有刷新按钮。可以把网页保存到桌面，当一个app一样
			// cnpm install -D @vuepress/plugin-pwa
			serviceWorker: true,
			updatePopup: {
				message: "有新的内容更新",
				buttonText: "刷新"
			}
		}
  },
  markdown: {
    lineNumbers: true,    // 显示代码块行号
    // slugify //类型Function， 一个将标题文本转换为 slug 的函数。修改它会影响 标题、目录、以及侧边栏链接的 id 和 链接。
    // anchor
    // toc
    // externalLinks //这个键值对将会作为特性被增加到是外部链接的 <a> 标签上，默认值: { target: '_blank', rel: 'noopener noreferrer' }
    // plugins //安装 markdown-it 插件
    // extendMarkdown //用于修改当前的 markdown-it 实例的默认配置，或者应用额外的插件的函数，
    // extractHeaders
  }
  // 用于修改内部的 Webpack 配置。如果给定一个对象，那么它将会被 webpack-merge 合并到最终的配置中，
  // 如果给定一个函数，它将会接受 config 作为第一个参数，以及 isServer 作为第二个参数，你可以直接更改 config，也可以返回一个待合并的对象。
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //   }
  // },
  // 通过 webpack-chain 来修改内部的 Webpack 配置。
  // chainWebpack: (config, isServer) => {
  //   // config 是 ChainableConfig 的一个实例
  // }
}
