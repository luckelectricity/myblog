module.exports = {
  title: '我的博客',
  description: '技术&生活，不拘泥于形式',
  theme: 'reco',
  base: '/myblog/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ],
      nav: [
        { text: "首页", link: "/" },
        {
          text: "luckelectricity 的博客",
          // items: [
          // ]
        }
      ],
      sidebar: [
        {
          title: "my blog",
          path: "/",
          collapsable: false,  // 是否折叠
          children: [{ title: "博客简介", path: "/" }]
        },
        {
          title: "技术",
          path: "/fe/JavaScript/1",
          collapsable: true,
          children: [
            { title: "JavaScript", path: "/fe/JavaScript/1" },
            { title: "TypeScript", path: "/fe/TypeScript/1" }
          ]
        },
        {
          title: "英语",
          path: "/English/1",
          collapsable: true,
          children: [
            { title: "English", path: "/English/1" }
          ]
        }
      ]
    }
  }
}
