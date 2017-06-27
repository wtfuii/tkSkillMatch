<template xmlns="http://www.w3.org/1999/html">
    <div>
        <h3>Find specialists by skill</h3>
        <v-text-field
                append-icon="search"
                label="Search"
                single-line
                hide-details
                v-model="search"
        ></v-text-field>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 v-for="(item, index) in filteredItems">
                    <v-card class="mb-3">
                        <v-card-row class="light-blue">
                            <v-card-title>
                                <span class="white--text">Anonymous {{index + 1}}</span>
                            </v-card-title>
                        </v-card-row>
                        <v-card-text>
                            <v-card-row height="75px">
                                <v-icon class="mr-5" dark>check</v-icon>
                                <div>
                                    <div>Matching Skill</div><strong><v-chip small>{{item.matchingSkill.skill}}</v-chip></strong>
                                </div>
                            </v-card-row>
                            <v-card-row height="75px">
                                <v-icon class="mr-5" dark>trending_up</v-icon>
                                <div>
                                    <div>Skill level</div><strong>{{item.matchingSkill.level + 1}}</strong>
                                </div>
                            </v-card-row>
                            <v-card-row height="75px" v-if="item.skills.length">
                                <v-icon class="mr-5" dark>view_headline</v-icon>
                                <div>
                                    <div>Further Skills</div>
                                    <strong><v-chip small v-for="skill in item.skills">{{skill.skill}}</v-chip></strong>

                                </div>
                            </v-card-row>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-row actions>
                            <v-btn flat class="green--text darken-1" @click.native="sendMail(item.email)">Send Email</v-btn>
                        </v-card-row>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  import axios from 'axios'
  import { authService } from '../services/auth'
  export default {
    created: function() {
      this.getUsers()
    },
    beforeRouteEnter: (to, from, next) => {
      if (!authService().getUser() || !authService().getUser().isManager) {
        next('/')
      } else {
        next()
      }
    },
    data () {
      return {
        search: '',
        headers: [
          {text: 'Skill', value: 'skill'},
          {text: 'Level', value: 'level'},
          {text: 'Further skills', value: 'further'}
        ],
        items: []
      }
    },
    methods: {
      getUsers() {
        axios.get('/user').then((res) => {
          this.items = res.data
        })
      },
      sendMail(email) {
        window.open('mailto:' + email)
      }
    },
    computed: {
      filteredItems: function() {
        const result = []
        for (let item of this.items) {
          for (let i = 0; i < item.skills.length; i++) {
            let lastIndex = item.skills[i].skill.lastIndexOf(this.search) !== -1
            if (lastIndex) {
              let tempUser = JSON.parse(JSON.stringify(item))
              Object.assign(tempUser, {matchingSkill: item.skills[i]})
              tempUser.skills.pop(i)
              result.push(tempUser)
              break
            }
          }
        }
        return result
      }
    }
  }
</script>

<style scoped="true">
    .no-deco {
        text-decoration: none;
    }
</style>
