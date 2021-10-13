import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  //hash mode
  history: createWebHashHistory(),
  scrollBehavior() {
    return {top: 0}
  },
  routes: [
    {
      //main page
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      //소괄호 사이 정규표현식 작성하여 모든 문자열(위에 선언한 것 외)
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})