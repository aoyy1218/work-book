import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index.vue'
import Project from '@/view/Project.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: 'project',
      name: 'Project',
      component: Project
    }
  ]
})
