<script>
  import axios from 'axios';

  export default {
    data(){
      return{
        projects: []
      }
    },
    methods: {
      getProjects() {
        axios.get(`http://127.0.0.1:8000/api/projects`).then(resp =>{
          this.projects = resp.data.results;
        })
      }
    },
    mounted(){
      this.getProjects();
    }
  }
</script>

<template>
<h1 class="text-center">Front Boolfolio</h1>
<div class="container">
  <h2>Lista  dei Progetti</h2>
  <ul class="row row-cols-3 g-3">
    <li class="col" v-for="project in projects" :key="project.id">
      {{ project.title }}
    </li>
  </ul>
</div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
