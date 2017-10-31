<template>
  <div class="Rooms">  
    <router-link to="create-room">
      <v-btn
        absolute
        dark
        fab
        top
        right
        color="pink"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </router-link>
    <v-layout row wrap>
      <v-flex xs12 sm6 v-if="rooms.length > 0" v-for="room in rooms">
        <room :room="room"></room>
      </v-flex>
      <v-flex xs12 v-else>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">No Rooms Found</div>
              <span class="grey--text">Click below to make one now.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <router-link to="/create-room"><v-btn flat color="purple">Create Room</v-btn></router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Room from '@/components/Room'
export default {
  name: 'rooms',
  components: {
    Room
  },
  data () {
    return {
      title: 'Rooms List',
      rooms: []
    }
  },
  mounted () {
    this.$http.get('room')
    .then((response) => {
      console.log('response:', response)
      this.rooms = response.data
    })
    .catch((err) => {
      console.log('err', err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.Rooms {
  position: relative;
}
</style>
