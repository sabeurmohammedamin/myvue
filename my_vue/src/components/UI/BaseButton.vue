<template>
        <button class="btn">
            <slot></slot>
        </button>
</template>
<script>

export default {
    
}
</script>

<style>
button.btn{
background: blanchedalmond;
border: transparent;
width: 100px;
height: 35px;
}
button.btn.sub{
    background: cornflowerblue;
}
button.btn:hover {
background: rgb(248, 211, 155);
transition: .3s ease-in-out;
}
.radius {
    border-radius: 4px;
}
button.btn:active{
    background: blanchedalmond;
    border : 1px solid rgb(245, 210, 158);
    transition: .100ms ease-in-out;
}
.btn.actived{
    background: rgb(248, 211, 155);

}
</style>