<template>
    <div>
        <h3>Maintain your skills to be found by managers</h3>
        <skill-dialog v-on:saved="getSkills()"></skill-dialog>
        <v-data-table
                v-bind:headers="headers"
                :items="items"
                hide-actions
                class="elevation-1"
        >
            <template slot="items" scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.skill }}</td>
                <td class="text-xs-right">{{ props.item.level }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
  import SkillDialog from './SkillDialog'
  import {authService} from '../services/auth'
  import axios from 'axios'
  export default {
    components: {
      SkillDialog
    },
    created: function() {
      this.getSkills()
    },
    data () {
      return {
        headers: [
          {text: 'Skill', value: 'skill'},
          {text: 'Level', value: 'level'}
        ],
        items: []
      }
    },
    methods: {
      getSkills: function() {
        if (authService().getUser()) {
          axios.get('/user/' + encodeURIComponent(authService().getUser().email)).then((data) => {
            this.$data.items = data.skills
          })
        }
      }
    }
  }
</script>
