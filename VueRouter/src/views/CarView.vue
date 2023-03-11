<script setup>
// The useRoute method from the vue-router will allow us to read the trailing Id of the url that our route was prepared to handle in src/router/index.js
// The useRouter method from the vue-router provides us with information about the current route, and allows us to manipulate our route (Unsure what the difference between RouterLink and useRouter is at this point.)
// The RouterView is used here in the same fashion as in the App.vue file. Vue knows which view it needs to render here because it is defined in src/router/index.js.
import { useRoute, useRouter, RouterView } from 'vue-router';
// We import our Cars.json data so that we can work with it within this view.
import cars from "../data/cars.json";
import { ref } from "vue";

// We invoke the useRoute method and store the returned object containing the property of Id in our route variable.
// Console.log(route.params) to see the object.
const route = useRoute();
const router = useRouter();

const contactButtonText = ref("Click for contact");

const contactButtonHandler = () => {
    if (router.currentRoute.value.path.includes("contact")) {
        router.push(`/car/${carId}`);
        contactButtonText.value = "Click for contact";
    }
    else {
        router.push(`/car/${carId}/contact`);
        contactButtonText.value = "Hide contact";
    }
}
// 4:38:19 https://www.youtube.com/watch?v=I_xLMmNeLDY&list=WL&index=2&t=21s&ab_channel=LaithAcademy

const carId = parseInt(route.params.id);

// We can iterate over the array of cars and find the car that matches the trailing Id of the url path and have only that car object returned and stored in our car variable.
// We parseInt here because the Id is a number in our Cars.json data, but are returned to us in the route.params.id as a string.
const car = cars.find(c => c.id === carId);
</script>

<template>
    <div>
        <h1>Car view</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>
        <!-- Utilize the .push method on the router object which allows us to navigate to a different route without reloading (Unsure what the difference between RouterLink and useRouter is at this point.) -->
        <button @click="contactButtonHandler">{{ contactButtonText }}</button>
        <!-- Due to the way we defined the router rules in src/router/index.js, Vue knows that the ContactView.vue component should only be rendered when we are on the car route with any given id, that ALSO has a trailing /contact path. This allows us to access the car route with just an id to see the car information but not the Contact information, and also access the same car route with the id and a trailing /contact path to render the ContactView.vue component. -->
        <RouterView />
    </div>
</template>