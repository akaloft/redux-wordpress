// Pages
import Home from '../pages/Home'
import Single from '../pages/Single'
import Archive from '../pages/Archive'
import Author from '../pages/Author'
import Pages from '../pages/Pages'

const blogRoutes = [
  { path: '/', component: Home },
  { path: '/posts/:id', component: Single},
  { path: '/pages/:id', component: Pages},
  { path: '/archive/:slug', component: Archive},
  { path: '/author/:slug', component: Author}
]

export { blogRoutes }
