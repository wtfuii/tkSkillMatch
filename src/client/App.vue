<template>
  <div class="app full-height">
<!--    <h1>{{ message }}</h1>
    <router-link :to="{ name: 'hello' }">Goto Hello</router-link>
    -->
    <v-app id="example-3">
      <v-navigation-drawer permanent clipped light>
        <v-list dense class="pt-0">
          <v-list-item>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Test</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar class="teal" light>
        <v-toolbar-title>tkSkillMatch</v-toolbar-title>
      </v-toolbar>
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Express + Vue boilerplate'
    }
  }
}
</script>

<style>

</style>
