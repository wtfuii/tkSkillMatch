<template>
    <div>
        <h3>Login</h3>
        <v-card>
            <v-card-text>
                <v-text-field
                        name="email"
                        label="E-Mail"
                        id="email"
                        type="email"
                        v-model="email"
                        required
                ></v-text-field>
                <v-text-field
                        name="password"
                        label="Password"
                        type="password"
                        v-model="password"
                        required
                ></v-text-field>
                <v-btn @click.native="submit($event)" flat primary :disabled="formEmpty">Login</v-btn>
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
        password: '',
        email: ''
      }
    },
    computed: {
      formEmpty: function () {
        return !(this.password && this.email)
      }
    },
    methods: {
      submit: function(e) {
        axios.get('/user/' + encodeURIComponent(this.email)).then((data) => {
          bus.$emit('login', data.data)
          this.$router.push('home')
        })
      }
    }
  }
</script>
