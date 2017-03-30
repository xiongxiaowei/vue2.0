import Vue from 'vue'
import Router from 'vue-router'
// import Header from '@/components/Header'
import Rating from 'components/rating'
// import Head from '../components/header'
import Sell from 'components/sell'
import Detail from 'components/detail'
Vue.use(Router)
export default new Router({
  routes: [
    {path: '/rating', component: Rating},
    {path: '/sell', component: Sell},
    {path: '/detail', component: Detail}
  ]
})
