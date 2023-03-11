<script setup>
    // We are importing RouterLink here because it is necessary to set up the navigation "links" that allows us to traverse our views.
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
        <!-- RouterLink functions as a regular anchor tag with a Href, but does not initiate a page reload upon navigating. -->
        <!-- The built in "active-class" attribute from Vue allows the vue-router to know exactly which route is currently active, allowing us to give it an active class that we can style in the scoped CSS for this component. -->
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <RouterLink active-class="active" to="/about">About</RouterLink>
    </div>
</template>

<style scoped>
/* RouterLink can be styled like this, as they are technically anchor tags */
div a{
   color:unset;
   text-decoration:none;
    padding:5px;
    border: 1px solid black;
    margin:5px;
    display:inline-block;
}

.active{
    font-weight:900;
    color:blue;
    background-color:pink;
}
</style>