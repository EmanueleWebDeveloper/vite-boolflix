<template>
    <header>
      <nav class="navbar bg-body-danger">
        <div class="container-fluid">
          <a class="navbar-brand text-danger fs-3">BOOLFLIX</a>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="store.searchText"/>
            <button @click.prevent="$emit('performSearch')" class="btn btn-outline-danger" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  import { store } from '../store'
  
  export default {
    name: 'AppHeader',
    data() {
      return {
        store
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  header {
    background-color: black ;
  }
  
  .navbar {
    padding: 20px 0;
  }
  
  .navbar-brand {
    font-size: 2rem; 
  }
  
  .form-control {
    background-color: #343a40; 
    border-color: #dc3545; 
    color: #dc3545; 
  }
  
  .btn {
    font-size: 1.2rem; 
    border-color: #dc3545; 
    color: #dc3545; 
  }
  
  .btn-outline-danger:hover {
    background-color: #dc3545; 
    color: #fff;
  }
  </style>
  