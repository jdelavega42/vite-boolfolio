<script>
import axios from 'axios';
import Card from '../components/Card.vue';
import Pagination from '../components/pagination.vue';

export default {
    name: 'AppHome',
    data() {
        return {
            projects: [],
            currentPage: 1,
            pageNum: 1,
            lastPage: null

        }
    },
    methods: {
        getProjects(pageNumber = 1) {
            const params = {
                page: pageNumber
            }
            axios.get(`http://127.0.0.1:8000/api/projects`, { params }).then(resp => {
                this.projects = resp.data.results.data;
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page
            })
        }
    },
    mounted() {
        this.getProjects();
    },
    components: { Card, Pagination }
}
</script>

<template>
    <h2>Lista dei Progetti</h2>
    <ul class="row row-cols-3 g-3">
        <li class="col" v-for="project in projects" :key="project.id">
            <Card :project="project" />
        </li>
    </ul>


    <Pagination :currentPage="currentPage" :lastPage="lastPage" @getProjects="getProjects" />
</template>