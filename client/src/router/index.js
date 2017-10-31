import Vue from 'vue'
import Router from 'vue-router'
import Reservations from '@/components/Reservations'
import CreateReservation from '@/components/CreateReservation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Reservations',
      component: Reservations
    },
    {
      path: '/home',
      name: 'Reservations',
      component: Reservations
    },
    {
      path: '/create-reservation',
      name: 'CreateReservation',
      component: CreateReservation
    }
  ]
})
