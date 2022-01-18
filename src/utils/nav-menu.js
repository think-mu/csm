export default [
  {
    id: 1,
    name: '企业情况',
    type: 2, //1为有子项菜单，2为无子项菜单项
    url: '/main/detail/detail',
    sort: 2,
    children: null
  },
  {
    id: 2,
    name: '分级分类',
    type: 2, 
    url: '/main/category/category',
    sort: 3,
    children: null
  },
  {
    id: 3,
    name: '监督检查',
    type: 2,
    url: '/main/review/review',
    sort: 4,
    children: null
  },

  {
    id: 4,
    name: '监督执法',
    type: 2,
    url: '/main/enforce/enforce',
    sort: 6,
    children: null
  }
]
