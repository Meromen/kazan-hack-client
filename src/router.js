import Vue from 'vue'
import Router from 'vue-router'
import Auth from './views/Auth'
import Registration from './views/Registration'
import Home from './views/Home'
import NewRequest from './views/NewRequest'
import Profile from './views/Profile'
import RequestDetails from './views/RequestDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/newrequest',
      name: 'newrequest',
      component: NewRequest
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/request/:id',
      name: 'requestDeatails',
      component: RequestDetails
    }
  ]
})
