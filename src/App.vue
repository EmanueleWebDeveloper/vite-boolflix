<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios'

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {

    }
  },
}
</script>

<template>
  <div>
    <AppHeader/>
    <AppMain/>
  </div>
</template>

<style lang="scss">

</style>
