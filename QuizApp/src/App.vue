<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
</script>

<template>
    <div class="container">
        <Nav />
        <RouterView />
    </div>
</template>

<style scoped>
/* We are maintaining the container class in the App.vue file so that regardless of which views and components we render, they will always be subject to the styling rules from .container */
.container {
    max-width: 80%;
    margin: 0 auto;
}
</style>