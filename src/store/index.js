import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

axios.defaults.headers.token = $cookies.get('token')

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    addUser({commit},info){
      let data = axios.post('http://localhost:5050/users',info)
      if(data){
        toast("New User Has Been added", {
          "theme": "dark",
          "type": "success",
          "position": "top-center",
          "autoClose": 2000,
          "hideProgressBar": true,
          "transition": "zoom",
          "dangerouslyHTMLString": true
        })
      }
    },
    async loginUser({commit}, info){
      let {data} = await axios.post('http://localhost:5050/users/login', info)
      console.log(data);
      $cookies.set('token',data.token)
      if(data.message){
        toast("Login is successful", {
          "theme": "dark",
          "type": "success",
          "position": "top-center",
          "autoClose": 2000,
          "hideProgressBar": true,
          "transition": "zoom",
          "dangerouslyHTMLString": true
        })
      }
    }
    
  },
  modules: {
  }
})
