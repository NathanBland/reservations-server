<template>
  <div class="room">
    <v-card>
      <!-- <v-card-media
        src="/static/doc-images/cards/sunshine.jpg"
        height="200px"
      >
      </v-card-media> -->
      <v-card-title primary-title>
        <div>
          <div class="headline">{{room.name}}</div>
          <!-- <span class="grey--text">{{reservation.owner}} - {{reservation.ownerEmail}}</span> -->
        </div>
      </v-card-title>
      <v-card-actions>
        <router-link :to="'/room/' + this.room._id"><v-btn flat>View</v-btn></router-link>
        <!-- <v-btn flat color="purple">Explore</v-btn> -->
        <v-spacer></v-spacer>
        <v-btn icon @click.native="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="show">
          We'll show reservations here. maybe. probably not.
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'room',
  data () {
    return {
      title: 'Room',
      show: false
    }
  },
  props: ['room']
}
</script>

<style scoped>
.room {
  margin: 1em;
}
</style>