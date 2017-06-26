<template>
    <v-layout row justify-left>
        <v-dialog v-model="dialog">
            <v-btn floating class="indigo bottom-right" slot="activator">
                <v-icon light>add</v-icon>
            </v-btn>
            <v-card>
                <v-card-row>
                    <v-card-title>Add Skill</v-card-title>
                </v-card-row>
                <v-card-row>
                    <v-card-text>
                        <v-text-field label="Skill" required v-model="skill"></v-text-field>
                        <v-slider thumb-label step="1" min="0" max="2" v-model="level"></v-slider>
                        <small>*Required</small>
                    </v-card-text>
                </v-card-row>
                <v-card-row actions>
                    <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                    <v-btn class="blue--text darken-1" flat @click.native="save()">Save</v-btn>
                </v-card-row>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
  import axios from 'axios'
  import { authService } from '../services/auth'
  export default {
    data () {
      return {
        dialog: false,
        skill: '',
        level: 0
      }
    },
    methods: {
      save: function() {
        axios.post(`/user/${authService().getUser().email}/skill`, { skill: this.$data.skill, level: this.$data.level }).then(() => {
          this.$emit('saved')
          this.dialog = false
          this.skill = ''
          this.level = 0
        })
      }
    }
  }
</script>

<style scoped="true">
    .bottom-right {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 100;
    }
</style>
