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
            <div v-if="(project.technologies.length > 0)">
                <ul v-for="technology in project.technologies">
                    <li> {{ technology.name }}</li>
                </ul>
            </div>
            <div v-else>
                <p>Nessun progetto</p>
            </div>
            <p v-if="(project.type)">
                {{ project.type.name }}
            </p>
            <router-link :to="{name: 'project', params: {slug: project.slug}}" class="btn btn-primary"> Dettagli</router-link>
        </div>
    </div>
</template>