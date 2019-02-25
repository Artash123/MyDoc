import axios from 'axios';

export default {
  state: {
    pageCount: 1,
    documents: [

   ]
  },

  actions: {
    fetchDocs({commit},pageNum=1){
      return axios.get('http://vue-lesson-1/api/docs?page='+pageNum).then(res => {
        commit('SET_DOCUMENTS', res.data.data);
        this.state.docs.pageCount = res.data.last_page;

      })
    },
      addDocument({commit}, data){
        return axios.post('http://vue-lesson-1/api/docs', data).then(res => {
          commit('ADD_DOCUMENT', res.data)
        })
      },
      deleteDoc({commit},doc){
        return axios.delete('http://vue-lesson-1/api/docs/'+doc.id).then(res => {
          commit('REMOVE_DOCUMENT', doc.id)
        })
      },
      editDoc({commit},doc){
        return axios.put('http://vue-lesson-1/api/docs', doc).then(res => {
          commit('EDIT_DOCUMENT', res.data)
        })
      },
  },

  mutations: {
    SET_DOCUMENTS(state,payload){
      state.documents = payload;
    },
    ADD_DOCUMENT(state,payload){
      state.documents.push(payload);
    },
    EDIT_DOCUMENT(state,payload){
      state.documents = state.documents.map((oldDoc) => {
        if (oldDoc.id === payload.id) {
          return payload;
        }
        return oldDoc;
      });
    },
    REMOVE_DOCUMENT(state,index){
      const currentIndex = state.documents.findIndex(doc => doc.id == index)
      state.documents.splice(currentIndex,1);
    }
  }
}
