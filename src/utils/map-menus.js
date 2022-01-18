let firstMenu = null
export function mapMenusRoutes(usersMenus) {
  // console.log(usersMenus,"usersMenus");
  const routes = []

  //默认加载所有routes
  const allRoutes = []
  const routeFiles = require.context('../router/main', true, /\.js/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  // console.log(allRoutes);
  //根据菜单获取route
  const _recurseGetRoute = (menus) => {
    for (const menu of menus) {
      if (menu.type ===2) {
        const route = allRoutes.find((route) => {
         return route.path === menu.url
        })
        if(route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      }else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(usersMenus)

  return routes
}
export { firstMenu }