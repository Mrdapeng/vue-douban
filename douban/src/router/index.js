import Vue from 'vue'
import Router from 'vue-router'
import movie from '../components/movie/movie.vue'
import book from '../components/book/book.vue'
import  photo from '../components/photo/photo.vue'
import  music from '../components/music/music.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/',
      redirect: '/movie',
      component: movie
    },
    {
      path:'/music',
      component:music
    },
    {
      path:'/book',
      component:book
    },
    {
      path:'/photo',
      component:photo
    }
  ]
})
