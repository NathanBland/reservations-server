import Vue from 'vue'
import Router from 'vue-router'
import Reservations from '@/components/Reservations'
import CreateReservation from '@/components/CreateReservation'
import Rooms from '@/components/Rooms'
import RoomView from '@/components/RoomView'
import CreateRoom from '@/components/CreateRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Reservations
    },
    {
      path: '/reservations',
      name: 'Reservations',
      component: Reservations
    },
    {
      path: '/create-reservation/:id',
      name: 'CreateReservation',
      component: CreateReservation,
      props: (route) => ({roomId: route.params.id})
    },
    {
      path: '/rooms',
      name: 'Rooms',
      component: Rooms
    },
    {
      path: '/room/:id',
      name: 'Room',
      component: RoomView,
      props: (route) => ({roomId: route.params.id})
    },
    {
      path: '/create-room',
      name: 'CreateRoom',
      component: CreateRoom
    }
  ]
})
