<template>
  <div class="projects container mt-5">
    <ProjectItem v-for="(project, i) in projectData" :key="i" :project="project" />
  </div>
</template>

<script>
import ProjectItem from '../components/ProjectItem.vue'
import axios from 'axios'
export default {
  data () {
    return {
      projectData: []
    }
  },
  components: {
    ProjectItem
  },
  mounted () {
    axios
      .get('https://pedantic-sinoussi-6f1c00.netlify.app//data/data.json')
      .then((response) => {
        this.projectData = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
