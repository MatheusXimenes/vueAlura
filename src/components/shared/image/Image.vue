<template>
    <img class="responsive" :src="src" :title="title"/>
</template>

<script>
export default {
    //props
    props: [
        'title',
        'src'
    ]
}
</script>

<style lang="scss" scoped>
    .responsive {
        width:100%;
    }
</style>


