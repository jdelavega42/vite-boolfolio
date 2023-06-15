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
            <div v-if="(project.technologies)">
                <ul v-for="technology in project.technologies">
                    <li> {{ technology.name }}</li>
                </ul>
            </div>
            <p v-if="(project.type)">
                {{ project.type.name }}
            </p>
        </div>
    </div>
</template>