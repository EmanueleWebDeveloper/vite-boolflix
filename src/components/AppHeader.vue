<template>
    <nav class="navbar bg-black">
        <div class="container-fluid">
           <a class="navbar-brand text-light">Boolflix</a>
            <form class="d-flex" role="search">
               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-danger" type="submit">Search</button>
           </form>
        </div>
    </nav>
</template>

<script>
export default {
    name: "AppHeader",
    data () {

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>