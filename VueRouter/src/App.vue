<script setup>
    // When using the Vue router you don't import the individual views here, but rather the RouterView from vue-router, as the Home and About views are already imported in the router folder's index.js file that handles which view to show depending on the url path.
    import { RouterView } from "vue-router";
    // Importing the Nav component here and implementing it in the template HTML below means that it will ALWAYS be present on all views, followed by whatever view that our router determines should be rendered here based on the url path.
    import Nav from "./components/Nav.vue";
</script>

<template>
    <div>
        <Nav />
        <!-- RouterView picks the correct view based on the rules that we have set up in src/router/index.js -->
        <RouterView />
    </div>
</template>