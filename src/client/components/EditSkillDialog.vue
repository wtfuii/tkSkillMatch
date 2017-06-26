<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog">
            <v-btn slot="activator"><v-icon>create</v-icon></v-btn>
            <v-card>
                <v-card-row>
                    <v-card-title>Add Skill</v-card-title>
                </v-card-row>
                <v-card-row>
                    <v-card-text v-if="item">
                        <v-text-field label="Skill" required v-model="item.skill" v-on:change="$emit('edit', item)"></v-text-field>
                        <v-slider thumb-label step="1" min="0" max="2" v-model="item.level" v-on:change="$emit('edit', item)"></v-slider>
                        <small>*Required</small>
                    </v-card-text>
                </v-card-row>
                <v-card-row actions>
                    <v-btn class="blue--text darken-1" flat @click.native="close()">Close</v-btn>
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
    props: ['item'],
    data () {
      return {
        dialog: false
      }
    },
    methods: {
      save: function() {
        axios.put(`/user/${authService().getUser().email}/skill`, this.item).then(() => {
          this.$emit('saved')
          this.dialog = false
        })
      },
      close: function () {
        this.$emit('close')
        this.dialog = false
      }
    }
  }
</script>
