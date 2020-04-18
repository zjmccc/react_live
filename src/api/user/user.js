import $http from '../http'

export default {
  add: function (params) {
    return $http.post('user/add', params)
  },
  login: function (params) {
    return $http.post('user/login', params)
  }
}