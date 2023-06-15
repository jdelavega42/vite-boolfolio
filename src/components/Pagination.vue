<script>

    export default {
        name: 'Pagination',
        emits: ['getProjects'],
        props: {
            currentPage: Number,
            lastPage: Number
        }
    }
</script>
<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" :class="{ 'disabled': currentPage === 1 }" href="#" @click.prevent="$emit('getProjects', currentPage - 1)">Previous</a></li>
            <li class="page-item" v-for="pageNum in lastPage"><a class="page-link" :class="{ 'active': pageNum === currentPage }" href="#" @click.prevent="$emit('getProjects', pageNum)">{{ pageNum }}</a></li>
            <li class="page-item"><a class="page-link" :class="{ 'disabled': currentPage === lastPage }" href="#" @click.prevent="$emit('getProjects', currentPage + 1)">Next</a></li>
        </ul>
    </nav>
</template>