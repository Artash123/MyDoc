import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    documents: [
     {
       id: 1,
       title: 'First Document',
       content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
     }
   ]
 },
  mutations: {
    addDocument(state,payload){
      const docs = state.documents;
      const lastId = docs[(docs.length)-1].id;
      payload.id = lastId+1;
      docs.push(payload);
    },
    editDocument(state,payload){
      const currentIndex = state.documents.findIndex(doc => doc.id == payload.index)
      state.documents[currentIndex] = payload.doc;
    },
    removeDocument(state,index){
      const currentIndex = state.documents.findIndex(doc => doc.id == index)
      state.documents.splice(currentIndex,1);
    }
  }
})
