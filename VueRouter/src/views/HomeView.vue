<script setup>
    import cars from "../data/cars.json";
    // We import RouterLink in this view because we need to be able to link around to the different individual car views/components.
    import { RouterLink } from "vue-router";
</script>

<template>
    <div>
        <h1>Home view</h1>
        <div class="cars">
            <!-- We build a RouterLink for each car in our Cars JSON data, and we set up the navigation route :to so that we end up on /car/the_id_of_the_car_we_clicked -->
            <RouterLink v-for="car in cars" :key="car.id" :to="`/car/${car.id}`">{{ car.name }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.cars{
    display:flex;
    justify-content: space-around;
    flex-wrap:wrap;
}

.cars a{
    text-decoration:none;
    color:black;
    border: 1px solid black;
    padding:5px;
}
</style>