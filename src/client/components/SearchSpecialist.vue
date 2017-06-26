<template>
    <div>
        <h3>Find specialists by skill</h3>
        <v-card>
            <v-card-title>
                Search specialists
                <v-spacer></v-spacer>
                <v-text-field
                        append-icon="search"
                        label="Search"
                        single-line
                        hide-details
                        v-model="search"
                ></v-text-field>
            </v-card-title>
            <v-data-table
                    v-bind:headers="headers"
                    v-bind:items="items"
                    v-bind:search="search"
            >
                <template slot="items" scope="props">
                    <td></td>
                    <td class="text-xs-right">{{ props.item.skill }}</td>
                    <td class="text-xs-right">{{ props.item.level }}</td>
                    <td class="text-xs-right">{{ props.item.further }}</td>
                    <td></td>
                </template>
                <template slot="pageText" scope="{ pageStart, pageStop }">
                    From {{ pageStart }} to {{ pageStop }}
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
  export default {
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
    }
  }
</script>
