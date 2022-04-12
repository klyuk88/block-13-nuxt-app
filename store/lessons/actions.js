export default {
  //получить курсы
  async getCourse({
    commit
  }, data = {}) {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${data.token || ''}`
        }
      }
      const res = await this.$axios.get('/courses', config)
      commit('setCourses', res.data.courses)
    } catch (error) {
      console.log(error);
    }

  },
  //получаем уроки из первого курса
  async getLessons({
    state,
    commit,
    dispatch
  }, data = {}) {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${data.token || ''}`
        }
      }
      const courses = await this.$axios.get('/courses')
      const firstCourseId = courses.data.courses[0].id
      const lessons = await this.$axios.get(`courses/${firstCourseId}/lessons`, config)
      commit('setLessons', lessons.data.lessons)

    } catch (error) {
      console.log(error);
    }
  },
  //получаем ключ видео
  async getVideoKey({
    state,
    commit,
    dispatch
  }, data = {}) {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${data.token || ''}`
        }
      }
      const res = await this.$axios.get(`/video/${data.typeVideo}/${data.elementId}`, config)
      commit('setVideoKey', res.data.key)
    } catch (error) {
      console.log(error);
    }
  },

  async getCourse({
    commit
  }) {
    try {
      const res = await this.$axios.get('/courses')
      const firstCourse = res.data.courses[0]
      commit('setCourse', firstCourse)
    } catch (error) {
      console.log(error);
    }
  },

  async buyProduct({state, commit, dispatch}, data) {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${this.$cookies.get('token') || ''}`
        },
      }
      await this.$axios.post('/buy', data, config)
    } catch (error) {
     commit('setError', error.response.data)
    }
    
  }


}
