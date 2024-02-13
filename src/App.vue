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

      store.ArrayFilm = 'https://api.themoviedb.org/3/search/movie?api_key=e9bea1bbfcbef47aa2b5ed1adebfd849&query='

    axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=e9bea1bbfcbef47aa2b5ed1adebfd849&query=${store.searchText}`)
    .then( ( res )=>{
      console.log(res.data.results)
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
