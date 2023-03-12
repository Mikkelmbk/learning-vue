<script setup>
    import q from "../data/quizes.json";
    import { ref, watch } from "vue";
    // Card is a component containing just the HTML and CSS of the card structure. Here we import the Card component to be used within this component.
    import Card from "../components/Card.vue";

    // Store imported Json quiz data in a ref variable in order for vue to state manage it.
    const quizes = ref(q);
    const search = ref("");

    // Watch is imported from vue, just like ref.
    // Watch takes 2 parameters. One being the variable you want to listen for, and the other one being the callback function where you want to execute some code when a change occurs to the variable you are listening to. (behaves like addEventListener("change") or addEventListener("input") it seem?)
    watch(search, ()=>{
        // Set the value of the quizes json data to only be the quizes which name property includes the letters found in the search variable. This updates the entire quizes array that is being used by our v-for to generate the quizes, thus telling Vue to only render the quizes that matches the value of the search variable.
        quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
    });
</script>

<template>
    <div class="container">
        <header>
            <h1>Quizes</h1>
            <!-- It is possible to use template literals (backtick) within a colon prefixed Vue attribute like seen in placeholder here -->
            <input v-model.trim="search" type="text" :placeholder="`Search among ${quizes.length} quizes`">
        </header>
        <div class="options-container">
            
            <!-- In order for the Card component to know about the card data that exists in the quizes Json import, we send it along to the Card component through a "Prop" that we choose to call ":quiz". We simply set the value of :quiz to be the current iteration of the v-for loop data, quiz. -->
            <!-- Props can pass any data type. Such as Strings, Objects, Arrays. -->
            <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>

        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 80%;
    margin: 0 auto;
}

header {
    margin: 30px 0 10px 0;
    display: flex;
    align-items: center;
}

header h1 {
    font-weight: bold;
    margin-right: 30px;
}

header input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}

.options-container{
    display: flex;
    flex-wrap:wrap;
    margin-top: 40px;
}

/* Card */
</style>