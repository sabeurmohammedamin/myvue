<template>

    <div class="title">
        <h1>
        <slot>
        </slot>
        </h1> 
    </div>

</template>
<script>
export default {
    data() {
        return {

        }
    },
}
</script>
<style scoped>
    .title{
        top: -8px;
        left: -8px;
        width: 100vw;
        height: 15vh;
        background: orangered;
        position:relative;
        text-align: center;
        padding: 1px 0;
    }
</style>