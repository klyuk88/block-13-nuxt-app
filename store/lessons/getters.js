export default {
    getCourses(state) {
        return state.courses
    },
    getLessons(state) {
        return state.lessons
    },
    getVideoKey(state) {
        return state.videoKey
    },
    getCoursePrice(state) {
        return state.course.price
    },
    getCourseId(state) {
        return state.course.id
    }

}