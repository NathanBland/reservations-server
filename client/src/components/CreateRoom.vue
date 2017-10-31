<template>
  <div class="create__room">
    <form>
      <v-text-field
        label="Room Name"
        v-model="roomName"
        :error-messages="roomNameErrors"
        :counter="20"
        @input="$v.roomName.$touch()"
        @blur="$v.roomName.$touch()"
        required
        prepend-icon="fa-calendar-check-o"
      ></v-text-field>
      <router-link to="/">
        <v-btn color="success" :class="[isSuccess ? '':'hidden']"><span :class="[isProgress ? 'hidden':'']">Go back</span>
          <v-icon right :class="[isSuccess ? '' : 'hidden']">check_circle</v-icon>
        </v-btn>
      </router-link>
      <v-btn @click="createRoom" :disabled="disabled"><span :class="[isProgress ? 'hidden':'']">Create</span>
        <v-progress-circular :class="[isProgress ? '': 'hidden']" indeterminate color="primary"></v-progress-circular>
      </v-btn>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
export default {
  name: 'CreateRoom',
  mixins: [validationMixin],
  validations: {
    roomName: { required, maxLength: maxLength(20) }
  },
  data () {
    return {
      disabled: false,
      isProgress: false,
      isSuccess: false,
      isFailure: false,
      roomName: ''
    }
  },
  computed: {
    roomNameErrors () {
      const errors = []
      if (!this.$v.roomName.$dirty) return errors
      !this.$v.roomName.required && errors.push('This field is required.')
      this.disabled = (errors.length > 0)
      return errors
    }
  },
  methods: {
    createRoom () {
      this.disabled = true
      this.isProgress = true
      this.$http.post('room', {
        name: this.roomName
      })
      .then((response) => {
        console.log('response:', response)
        // this.reservations = response.data
        this.isSuccess = true
        this.isProgress = false
      })
      .catch((err) => {
        console.log('err', err)
        this.disabled = false
        this.isProgress = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hidden {
  display: none;
}
</style>
