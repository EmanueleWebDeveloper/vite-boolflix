<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios'
import { store } from './store'

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData(){

    axios
    .get(store.ApiUrl)
    .then( ( res )=>{
      store.ArrayFilm = res.data.results

    })

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
