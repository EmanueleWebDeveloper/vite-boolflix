<template>
    <div class="card">
      <img :src="`https://image.tmdb.org/t/p/w185/${propsImg}`" class="card-img-top" alt="Movie Poster">
      <div class="card-body">
        <h2>{{ propsTitle }}</h2>
        <h3>{{ propsOriginalTitle }}</h3>
      </div>
      <ul class="d-flex align-center"> <!-- Aggiunto classe align-center per centrare gli elementi -->
        <span :class="`lang-icon lang-icon-${propsLang}`"></span>
        <li v-for="(element, index) in 5" :key="index">
          <i class="fa-star" :class="(element <= Math.ceil(propsVote / 2)) ? 'fas' : 'far'"></i>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SingleMovie',
    props: {
      propsTitle: String,
      propsOriginalTitle: String,
      propsLang: String,
      propsVote: Number,
      propsImg: String
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @use '../style/general.scss' as *;
  
  .card {
    width: 250px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(255, 2, 2, 0.7); 
    transition: transform 0.3s ease-in-out;
    background-color: #fff;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card-img-top {
    width: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  
  .card-body {
    padding: 1.5rem;
    text-align: center;
  }
  
  h2, h3 {
    margin: 0;
    color: #333;
  }
  
  h2 {
    font-size: 1.2rem;
  }
  
  h3 {
    font-size: 1rem;
    font-style: italic;
  }
  
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
  
  
  .fa-star {
    color: #FFC700;
  }
  li {
    list-style-type: none;
  }
  </style>
  