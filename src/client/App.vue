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
        <v-list-item v-for="item in items" :key="item">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="cyan" light>
      <v-toolbar-title>tkSkillMatch</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        managerItems: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'My projects', icon: 'question_answer' },
          { title: 'Search specialists', icon: 'search' }
        ],
        specialistItems: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'My Skills', icon: 'account_box' },
          { title: 'Search projects', icon: 'search' }
        ],
        isManager: false,
        right: null
      }
    },
    computed: {
      items: function () {
        return this.isManager ? this.managerItems : this.specialistItems
      }
    }
  }
</script>

<style>

</style>
