<template>
    <div class="row bg-dark text-light">
        <SingleFilm/>
        
    </div>
    
</template>

<script>

import SingleFilm from './SingleFilm.vue';


export default {
    name: "FilmList",
    components:{
        SingleFilm
    },
    data () {

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>