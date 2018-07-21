import Vue from 'vue'
import Router from 'vue-router'
import ShowDocs from './views/ShowDocs'
import Docs from './views/Docs'
import CreateDoc from './views/CreateDoc'
import EditDoc from './views/EditDoc'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/docs',
      name: 'Docs',
      component: Docs,
      children: [{
        path: '',
        name: 'ShowDocs',
        component: ShowDocs
      },
      {
        path: 'create',
        name: 'CreateDoc',
        component: CreateDoc
      },
      {
        path: '/:id/edit',
        name: 'EditDoc',
        component: EditDoc,
        props: true,
      }]
    }
  ]
})
