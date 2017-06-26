<template>
    <div>
        <h3>Maintain your skills to be found by managers</h3>
        <skill-dialog></skill-dialog>
    </div>
</template>

<script>
  import SkillDialog from './SkillDialog'
  export default {
    components: {
      SkillDialog
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    }
  }
</script>
