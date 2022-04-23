<template>
    <section class="info-pay-page">
        <div class="container">
        <h2>Оплата не прошла</h2>
        <nuxt-link to="/profile">Перейти в ЛК</nuxt-link>
        </div>

    </section>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch('login/user')
    },
    
}
</script>
<style lang="sass">

    
</style>