<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
const API_KEY = 'AIzaSyAVccO5IEnvZ-VhsA8wfX7LRKfxKiww8IE'

export default {
  name: "App",
  components: {
    SearchBar,
  },
  methods: {
      onTermChange(searchTerm){
          console.log(searchTerm)
      }
  }
};
</script>
