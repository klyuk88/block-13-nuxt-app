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
    },
    getChannelPrice(state) {
        return state.telegram.channel
    },
    getChatPrice(state) {
        return state.telegram.chat
    },
    getCourseDuration(state) {
        if(state.course.duration/60 > 60) {
            return state.course.duration/60/60 + ' часов'
        } else {
            return state.course.duration/60 + ' минут'
        }
    },
    getCourseTheme(state) {
        return state.course.theme
    },
    getCourseBought(state) {
        return state.course.bought
    }

}