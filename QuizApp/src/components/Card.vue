<script setup>
    // In order to work with props that have been passed onto this component from wherever the component is used, we import defineProps which allows us to invoke a method that handles storing and state managing the passed props.
    import { defineProps } from "vue";

    import { RouterLink } from "vue-router";

    // defineProps must always be invoked with an array containing the names of the passed props that we are catching.
    // defineProps can contain many different passed props, so in order to get just the props you want, and to be able to store different props in different variables, we can destructure the data of defineProps like seen below. The variable name must conform to the name of the passed prop in order to store the desired prop.
    const { quiz } = defineProps(['quiz']);
</script>

<template>
    <RouterLink class="card" :to="`/quiz/${quiz.id}`">
        <!--Any regular HTML attribute can be rendered with JS data by prefixing it with a colon, courtesy of Vue syntax.-->
        <img :src="quiz.img" :alt="quiz.name">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} questions</p>
        </div>
    </RouterLink>
</template>

<style scoped>
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin: 0 20px 35px 0;
    cursor: pointer;
    text-decoration:none;
    color:unset;
}

.card img {
    width:100%;
    height:200px;
}

.card .card-text{
    padding:0 5px;
}

.card .card-text h2{
    font-weight:bold;
}
</style>