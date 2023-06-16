<script>
import axios from 'axios';

    export default {
        name: 'AppProject',
        data(){
            return {
                project: null,
                errorMessage: ""            }
        },
        mounted() {
            const slug = this.$route.params.slug;
            axios.get(`http://127.0.0.1:8000/api/projects/${slug}`).then((resp)=>{
                if(resp.data.success){
                    this.project = resp.data.results
                    console.log(this.project);
                } else {
                    this.errorMessage = resp.data.error
                }
            })
        }
    }
</script>

<template>
    <section class="container">
        <router-link :to="{name: 'home'}" class="btn btn-success mb-3">Back</router-link>
    </section>
    <div v-if="project" class="card">
        <h2 class="card-title"> {{ project.title }}</h2>
        
    </div>
    <div v-else-if="errorMessage" class="my-3">
        {{ errorMessage }}
    </div>
</template>