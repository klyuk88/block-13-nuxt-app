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
        let time = state.course.duration
        let h = Math.floor(time / 60 / 60)
        let m = Math.floor(time / 60) - (h * 60)
        let s = Math.floor(time % 60)
        return [
            h.toString().padStart(2, '0'),
            m.toString().padStart(2, '0'),
            s.toString().padStart(2, '0'),
        ].join(':')
    },
    getCourseTheme(state) {
        return state.course.theme
    },
    getCourseBought(state) {
        return state.course.bought
    }

}