module.exports = {
  title: '我的博客',
  description: '技术&生活，不拘泥于形式',
  base: '/myblog/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    nav: [
      // 跳转站内页面
      { text: '导读', link: '/about/' },
      // 嵌套导航
      {
        text: 'FE',
        items: [
          {
            text: 'javaScript',
            items: [
              { text: 'toFixed', link: '/fe/JavaScript/toFixed/' },
              { text: '111', link: '/fe/JavaScript/1/' }
            ]
          },
          {
            text: 'TypeScript',
            items: [
              { text: '111', link: '/fe/TypeScript/1/' },
            ]
          }
        ]
      },
      // 跳转站外地址
      // { text: '数据结构与算法', link: 'https://leetcode-cn.com/' },
    ],
    sidebar: {
      "/fe/JavaScript/": getBarXXX()
    },
  }
}
// 页面组的侧边栏
function getBarXXX () {
  return [
    // {
    //   title: 'LeetCode专栏',
    //   collapsable: false,
    //   sidebarDepth: 0,
    //   children: [
    //     "read.md"
    //   ]
    // },
    // {
    //   title: '数组',
    //   collapsable: false,
    //   sidebarDepth: 0,
    //   children: [
    //     "array/14.最长公共前缀.md",
    //     "array/26.删除有序数组中的重复项.md",
    //     "array/27.移除元素.md",
    //     "array/35.搜索插入位置.md",
    //     "array/66.加一.md",
    //     "array/88.合并两个有序数组.md"
    //   ]
    // },
    // {
    //   title: '动态规划',
    //   collapsable: false,
    //   sidebarDepth: 0,
    //   children: [
    //     "dp/118.杨辉三角.md",
    //     "dp/119.杨辉三角 II.md",
    //     "dp/121.买股票的最佳时机.md"
    //   ]
    // }
  ]
}
