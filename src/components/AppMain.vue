<template>
    <main class="py-3 bg-dark">
        <FilmList/>
    </main>
    
</template>

<script>

import FilmList from './Film/FilmList.vue';

export default {
    name: "AppMain",
    components:{
        FilmList
    },
    data () {

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>