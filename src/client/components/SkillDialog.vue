<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog">
            <v-btn primary light slot="activator">Add Skill</v-btn>
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
        axios.post(`/user/${authService().getUser().email}/skill`).then(() => {
          this.$emit('saved')
          this.dialog = false
        })
      }
    }
  }
</script>
