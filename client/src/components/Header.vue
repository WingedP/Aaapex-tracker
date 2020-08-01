


<template>
    <header class="headerz">
        <img :src="image" >
    </header>
</template>

<script>
export default {
    name:"Header",
    data(){return{
        image: require('@/assets/apex.png')
    }}
  
}
</script>


<style  scoped>
img{
height: 100%;
}
header{
    /* background: blue; */
    height: 11.5rem;
}

@media(max-width:700px){
    img{
    display: block;
    margin: auto;
}
}
</style>