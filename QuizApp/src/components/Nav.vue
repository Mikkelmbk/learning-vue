<script setup>
    import { RouterLink } from "vue-router";
    // importing MY OWN route data that I have defined in src/data/routes.json (This is just custom Json data that I set up to work with)
    import routes from "../data/routes.json";

</script>

<template>
    <div>
        <!-- I defined a routes.json data file to be able to use v-for to create my routes, instead of having to manually create a new link in this file everytime. -->
        <RouterLink v-for="route in routes" active-class="active" :to="route.path">{{ route.name }}</RouterLink>
    </div>
</template>

<style scoped>
div{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:60px;
}

div a{
    color:unset;
    text-decoration:none;
    font-size:20px;
    font-weight:600;
}

.active{
    color:orangered;
}
</style>