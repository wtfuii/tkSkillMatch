<template>
    <div>
        <h3>Maintain your skills to be found by managers</h3>
        <skill-dialog v-on:saved="getSkills"></skill-dialog>
        <v-data-table
                v-bind:headers="headers"
                :items="items"
                hide-actions
                class="elevation-1"
        >
            <template slot="items" scope="props">
                <td class="text-xs-right">{{ props.item.skill }}</td>
                <td class="text-xs-right">Level {{props.item.level}}</td>
                <td class="text-xs-right">
                    <edit-skill-dialog :item="Object.assign({}, props.item)" v-on:saved="closeEdit"></edit-skill-dialog>
                </td>
                <td class="text-xs-right"><v-btn @click.native="deleteItem(props.item)"><v-icon>delete</v-icon></v-btn></td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
  import SkillDialog from './SkillDialog'
  import {authService} from '../services/auth'
  import axios from 'axios'
  import EditSkillDialog from './EditSkillDialog.vue'
  export default {
    components: {
      SkillDialog,
      EditSkillDialog
    },
    created: function() {
      this.getSkills()
    },
    data () {
      return {
        headers: [
          {text: 'Skill', value: 'skill'},
          {text: 'Level', value: 'level'},
          {text: 'Update', value: 'update'},
          {text: 'Delete', value: 'delete'}
        ],
        items: [],
        showEdit: false
      }
    },
    methods: {
      getSkills: function() {
        if (authService().getUser()) {
          axios.get('/user/' + encodeURIComponent(authService().getUser().email)).then((data) => {
            console.log(data)
            this.$data.items = data.data.skills
          })
        }
      },
      closeEdit: function(item) {
        this.getSkills()
      },
      deleteItem: function(item) {
        axios.delete('/user/' + encodeURIComponent(authService().getUser().email) + '/skill/' + item._id).then((data) => {
          this.getSkills()
        })
      }
    }
  }
</script>
