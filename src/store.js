import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: undefined,
    requests: [],
    authToken: ''
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload
    },
    SET_TOKEN: (state, payload) => {
      state.authToken = payload
    },
    SET_REQUESTS: (state, payload) => {
      state.requests.push(...payload)
    },
    UPDATE_USER: (state, payload) => {
      state.user.name = payload.name
      state.user.address = payload.address
    },
    ADD_REQUEST: (state, payload) => {
      state.requests.push(payload)
    },
    DELETE_REQUEST: (state, payload) => {
      for (let i = 0; i < state.requests.length; i++) {
        if (state.requests[i].id === payload) { state.requests.splice(i, 1) }
      }
    },
    CHANGE_STATUS: (state, payload) => {
      for (let i = 0; i < state.requests.length; i++) {
        if (state.requests[i].id === payload.id) { state.requests[i].status = payload.status }
      }
    }
  },
  actions: {
    LOGIN: (context, payload) => {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: 'https://hackaton-dp-final.herokuapp.com/user/login',
          data: payload,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        })
          .then(data => {
            if (data.status === 200) {
              context.commit('SET_USER', data.data.user)
              context.commit('SET_TOKEN', data.data.token)
              context.dispatch('GET_REQUESTS', context.state.user)
                .then(resolve())
            }
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    REGISTRATION: (context, payload) => {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: 'https://hackaton-dp-final.herokuapp.com/user/create',
          data: payload,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        })
          .then(data => {
            resolve('gj')
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    GET_REQUESTS: (context, payload) => {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: 'https://hackaton-dp-final.herokuapp.com/request/getRequest',
          data: payload,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': context.state.authToken
          }
        })
          .then(data => {
            context.commit('SET_REQUESTS', data.data)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    UPDATE_USER: (context, payload) => {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: `https://hackaton-dp-final.herokuapp.com/user/update/info/${context.state.user.id}`,
          data: payload,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': context.state.authToken
          }
        })
          .then(data => {
            context.commit('UPDATE_USER', payload)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    DELETE_REQUEST: (context, payload) => {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `https://hackaton-dp-final.herokuapp.com/request/deleteRequest/${payload}`,
          data: payload,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': context.state.authToken
          }
        })
          .then(data => {
            context.commit('DELETE_REQUEST', payload)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    CREATE_REQUEST: (context, payload) => {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: `https://hackaton-dp-final.herokuapp.com/request/create`,
          data: {
            text: payload.text,
            user: context.state.user },
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': context.state.authToken
          }
        })
          .then(data => {
            context.commit('ADD_REQUEST', data.data)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    CHANGE_STATUS: (context, payload) => {
      return new Promise((resolve, reject) => {
        
        if (payload.status == 'выполняется')
          payload.status = 'выполнено'
        if (payload.status == 'ожидается')
          payload.status = 'выполняется'
        if (payload.status == 'рассматривается')
          payload.status = 'ожидается'
          
        axios({
          method: 'POST',
          url: `https://hackaton-dp-final.herokuapp.com/request/update/status/${payload.id}`,
          data: {
            status: payload.status
          },
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': context.state.authToken
          }
        })
          .then(data => {
            context.commit('CHANGE_STATUS', payload)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    COMMENT_OUT: (context, payload) => {
      return new Promise((resolve, reject) => {
          
        axios({
          method: 'POST',
          url: `https://hackaton-dp-final.herokuapp.com/request/comment/${payload.id}`,
          data: payload,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': context.state.authToken
          }
        })
          .then(data => {
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
})
