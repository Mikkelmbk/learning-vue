<script setup>
    // The useRoute method from the vue-router will allow us to read the trailing Id of the url that was our route was prepared to handle in src/router/index.js
    // The RouterView is used here in the same fashion as in the App.vue file. Vue knows which view it needs to render here because it is defined in src/router/index.js.
    import { useRoute } from 'vue-router';
    // We import our Cars.json data so that we can work with it within this view.
    import cars from "../data/cars.json";

    // We invoke the useRoute method and store the returned object containing the property of Id in our route variable.
    // Console.log(route.params) to see the object.
    const route = useRoute();

    // We can iterate over the array of cars and find the car that matches the trailing Id of the url path and have only that car object returned and stored in our car variable.
    // We parseInt here because the Id is a number in our Cars.json data, but are returned to us in the route.params.id as a string.
    const car = cars.find(c => c.id === parseInt(route.params.id));
</script>

<template>
    <div v-if="car">
        <h1>Contact Info</h1>
        <p>{{ car.contact.dealer }}</p>
        <p>{{ car.contact.number }}</p>
    </div>
    <div v-else>
        <h1>Car not found</h1>
    </div>
</template>