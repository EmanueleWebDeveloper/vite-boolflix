import { reactive } from 'vue'

export const store = reactive({
    ApiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=e9bea1bbfcbef47aa2b5ed1adebfd849&query=',
    ArrayFilm: [],
    searchText: ''
});