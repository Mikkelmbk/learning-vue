<script setup>
import { useTodosStore } from "./store/todos"
import { ref } from "vue"
import { storeToRefs } from "pinia"

const newTodo = ref("");

const todoStore = useTodosStore();
// This is required to make the Pinia Todos store reactive so that we can update and rerender the updates that occur to the data in the store.
// Anything that is state related and reactive should be imported like this.
const { filteredTodos } = storeToRefs(todoStore);

// Anything that is not state related or needs to be reactive (such as methods that just handle data you give it) can be imported like this.
const { addTodo, toggleTodo, updateFilter } = todoStore;

const addNewTodo = (text) => {
    // Invokes the addTodo method that exists in the Pinia actions object
    addTodo(text);
    // Clears the value of newTodo which in turn clears the value of our input field because the newTodo variable and the input is two-way bound through v-model.
    newTodo.value = "";
}

</script>

<template>
    <main>
        <div>
            <!-- calling the updateFilter method that exists in our Pinia store with a value of either "All", "Finished", or "Unfinished" -->
            <button @click="updateFilter('all')">All</button>
            <button @click="updateFilter('finished')">Finished</button>
            <button @click="updateFilter('unfinished')">Unfinished</button>
        </div>
        <input v-model.trim="newTodo" type="text">
        <!-- click eventlistener function that sends value from newTodo as parameter to our addNewTodo method which is declared above. -->
        <button @click="addNewTodo(newTodo)">Add</button>
        <div v-for="todo in filteredTodos" :key="todo.id" class="todo">
            <!-- Set the inline style to textDecoration line through if todo.isFinished is truthy. -->
            <h1 :style="todo.isFinished && {textDecoration: 'line-through'}">{{ todo.text }}</h1>
            <!-- Call our toggleTodo method in Pinia Todos store, with the todo.id of the todo that we clicked on. -->
            <button @click="toggleTodo(todo.id)">toggle</button>
        </div>
    </main>
</template>

<style scoped>

div.todo{
    display:flex;
    padding:10px;
    margin: 10px 0;
    border:1px solid black;
    background-color:red;
}
</style>
