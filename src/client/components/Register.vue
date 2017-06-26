<template>
    <div>
        <h3>Register</h3>
        <v-card>
            <v-card-text>
                <v-text-field
                        name="name"
                        label="Name"
                        id="name"
                        v-model="name"
                        required
                ></v-text-field>
                <v-text-field
                        name="password"
                        label="Password"
                        type="password"
                        v-model="password"
                        required
                ></v-text-field>
                <v-text-field
                        name="email"
                        label="E-Mail"
                        id="email"
                        type="email"
                        v-model="email"
                        required
                ></v-text-field>
                <v-checkbox label="I am a manager" v-model="isManager"></v-checkbox>
                <v-btn @click.native="submit($event)" flat primary :disabled="formEmpty">Submit</v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
  import axios from 'axios'
  import { bus } from '../services/auth'

  export default {
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        name: '',
        password: '',
        email: '',
        isManager: false
      }
    },
    computed: {
      formEmpty: function () {
        return !(this.name && this.password && this.email)
      }
    },
    methods: {
      submit: function(e) {
        axios.post('/user', this.$data).then(() => {
          bus.$emit('login', this.$data)
          this.$router.push('home')
        })
      }
    }
  }
</script>
