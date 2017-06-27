<template>
  <v-app>
    <v-navigation-drawer permanent light>
      <v-list class="pa-0">
        <v-list-item>
          <v-list-tile avatar tag="ul"></v-list-tile>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-item v-if="user" v-for="item in items" :key="item">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <router-link :to="{ name: item.route }" class="routerLink">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </router-link>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="light-blue" light>
      <v-toolbar-title>we.match</v-toolbar-title>
        <v-spacer></v-spacer>
        <span v-if="user" class="user-toolbar">{{user.name}}</span>
        <v-btn v-if="user" @click.native="logout()">
          Logout
        </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import {authService, bus} from './services/auth'

  export default {
    created: function() {
      bus.$on('login', (user) => {
        this.user = authService().login(user)
      })
      bus.$on('logout', () => {
        this.logout()
      })
      this.user = authService().getUser()
    },
    data () {
      return {
        user: null,
        drawer: null,
        managerItems: [
          { title: 'Home', icon: 'home', route: 'home' },
          { title: 'My projects', icon: 'question_answer' },
          { title: 'Search specialists', icon: 'search', route: 'searchSpecialist' }
        ],
        specialistItems: [
          { title: 'Home', icon: 'home', route: 'home' },
          { title: 'My Skills', icon: 'account_box', route: 'mySkills' },
          { title: 'Search projects', icon: 'search' }
        ],
        right: null
      }
    },
    computed: {
      items: function () {
        return this.user && this.user.isManager ? this.managerItems : this.specialistItems
      }
    },
    methods: {
      logout: function() {
        this.$data.user = authService().logout()
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped="true">
  .routerLink {
    text-decoration: none;
  }

  .user-toolbar {
    text-transform: uppercase;
    color: white;
  }
</style>
