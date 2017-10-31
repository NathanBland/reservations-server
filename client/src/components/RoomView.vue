<template>
  <v-layout row wrap class="room">
    <v-flex xs12>
      <v-card color="info">
        <router-link :to="'/create-reservation/' + this.roomId">
          <v-btn
            absolute
            dark
            fab
            bottom
            right
            color="pink"
          >
            <v-icon>add</v-icon>
          </v-btn>
        </router-link>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{room.name}}</div>
            <!-- <span class="grey--text">{{reservation.owner}} - {{reservation.ownerEmail}}</span> -->
          </div>
        </v-card-title>
        <v-card-actions>
          <!-- <v-btn >New Reservation</v-btn> -->
          <!-- <v-btn flat color="purple">Explore</v-btn> -->
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6>
      <reservation v-for="reservation in reservations" :reservation="reservation"></reservation>
    </v-flex>
  </v-layout>
</template>

<script>
import Reservation from '@/components/Reservation'
export default {
  name: 'roomView',
  data () {
    return {
      title: 'Room',
      show: false,
      room: {},
      reservations: []
    }
  },
  computed: {
  },
  components: {
    Reservation
  },
  props: ['roomId'],
  mounted () {
    this.$http.get('room/' + this.roomId)
    .then((response) => {
      console.log('response:', response)
      this.room = response.data
      this.getReservations()
    })
    .catch((err) => {
      console.log('err', err)
    })
  },
  methods: {
    getReservations () {
      if (!this.room.reservations || this.room.reservations.length < 1) return []
      this.room.reservations.map((reservation) => {
        return this.$http.get('reservation/' + reservation)
        .then((response) => {
          console.log('response:', response)
          this.reservations.push(response.data)
        })
        .catch((err) => {
          console.log('err', err)
        })
      })
    }
  }
}
</script>

<style scoped>
.room {
  margin: 1em;
}
</style>