<template>
    <div>
        <h3>Welcome</h3>
        <v-card>
            <v-card-text>
                <v-btn @click.native="goToLogin($event)" flat primary>Login</v-btn>
                <v-btn @click.native="goToRegister($event)" flat primary>Register</v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

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
      goToRegister: function(e) {
        this.$router.push('register')
      },
      goToLogin: function (e) {
        this.$router.push('login')
      }
    }
  }
</script>
