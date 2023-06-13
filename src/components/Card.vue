<script>
export default {
    name: 'Project',
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="card h-100">
        <div class="card-body">
            <p class="card-title"> {{ project.title }}</p>
            <p class="card-description">{{ project.description }}</p>
        </div>
    </div>
</template>