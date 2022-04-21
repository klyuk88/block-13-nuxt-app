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
        if(state.course.price.discountPercent) {
            return `$ <del>${state.course.price.price}</del> $ ${state.course.price.discountPrice}`
        } else {
            return `$ ${state.course.price.price}`
        }
    },
    getCourseId(state) {
        return state.course.id
    },
    getChannelPrice(state) {
        if(state.telegram.channel.discountPercent) {
            return `$ <del>${state.telegram.channel.price}</del> $ ${state.telegram.channel.discountPrice}`
        } else {
            return `$ ${state.telegram.channel.price}`
        }
    },
    getChatPrice(state) {
        if(state.telegram.chat.discountPercent) {
            return `$ <del>${state.telegram.chat.price}</del> $ ${state.telegram.chat.discountPrice}`
        } else {
            return `$ ${state.telegram.chat.price}`
        }
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
    },
    getCourse(state) {
        return state.course
    }
}