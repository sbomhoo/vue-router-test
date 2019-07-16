import Vue from 'vue'
import Router from 'vue-router'
import Posts from './views/Posts.vue'
import PostNew from './views/PostNew.vue'
import PostDetail from './views/PostDetail.vue'
import test from './views/test.vue'

Vue.use(Router)  //플러그인 등록

export default new Router({
  routes: [
    {
      path: '/posts',
      //name: 'home',
      component: Posts,
      children: [
        { path: 'new', component: PostNew},
        { path: ':id', name: 'post', component: PostDetail}  //PostDetail
        ]
    },
    {
      path: '/about', 
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/test', 
      component: test
    }
  ]
})
