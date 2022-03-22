<template>
  <div class="short-box-wrapper">
    <div class="short-box"></div>
  </div>
  <ProjectItem v-for="(data, i) in projectData" :key="i" :data="data"/>
</template>

<script>
import ProjectItem from '../components/ProjectItem'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    ProjectItem
  },
  data () {
    return {
      projectData: []
    }
  },
  mounted () {
    axios
      .get('https://pedantic-sinoussi-6f1c00.netlify.app//data/localData.json')
      .then((response) => {
        this.projectData = response.data
        console.log(this.projectData)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
