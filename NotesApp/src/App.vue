<script setup>
	import { ref } from "vue";

	const showModal = ref(false);
    const newNote = ref("");
    const errorMessage = ref("");
    const notes = ref([]);

    function getRandomColor(){
        return `hsl(${Math.random() * 360}, 100%, 75%)`;
    }

    const addNote = () => {
        // When referring to any ref() declared variable in <script setup> you must indicate VARIABLENAME.value, as any declared variable in Vue is an object with multiple properties to make Vue state management work, and needs to know that we want to access the value of this object.
        if(newNote.value.length < 10){
            return errorMessage.value = "Note needs to be 10 characters or more"
        }
        notes.value.push({
            id: Math.floor(Math.random() * 1000000),
            text: newNote.value,
            date: new Date().toLocaleDateString("en-EU"),
            bgColor: getRandomColor()
        })
        showModal.value = false;
        newNote.value = "";
        errorMessage.value = "";
    }
</script>

<template>
	<main>
        <!-- v-if removes/adds the element to/from the DOM, while v-show uses display none / display whatever -->
		<div v-if="showModal" class="overlay">
			<div class="modal">
                <!-- v-model two-way binds the value of a given element and the bound variable in scripts. -->
                <!-- trim will remove any leading or trailing whitespace that exists, preventing the user from submitting 10 or more spaces to circumvent the 10 character requirement-->
				<textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
                <!-- An empty string is considered falsy and a string with values are considered truthy. If the user inputs less than 10 characters the errorMessage will receive some text to display, thus making it truthy and telling Vue to render it through v-if. -->
                <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
				<button @click="addNote" class="add-note">Add note</button>
				<button @click="showModal = false" class="close-note">Close note</button>
			</div>
		</div>
		<div class="container">
			<header>
				<h1 class="headline">Notes</h1>
				<button @click="showModal = true" class="add-btn">+</button>
			</header>
			<div class="cards-container">
                <!-- v-for looping through notes array of objects. (kind of like Liquid, but not entirely) -->
                <!-- By adding :key="note.id" to the individual card elements, we give Vue a way of recognizing which element we are about to update or delete (if we end up doing any of that). This allows Vue to simply make adjustments to this single element in the DOM, without having to clear all of the generated elements and rebuilding them from scratch after the update or deletion of a single element. -->
                <!-- using variable values in inline-styling requires a colon prior to the style keyword, followed by an object containing JavaScript with the desired variable values.-->
				<div v-for="note in notes" :key="note.id" class="card" :style="{ backgroundColor: note.bgColor }">
					<p class="main-text">{{ note.text }}</p>
					<p class="date">{{ note.date }}</p>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped>
main {
	min-height: 100vh;
	width: 100vw;
}

div.container {
	max-width: 80%;
	padding: 10px;
	margin: 0 auto;
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

h1.headline {
	font-weight: bold;
	margin-bottom: 25px;
	font-size: 75px;
}

button.add-btn {
	border: none;
	padding: 10px;
	width: 50px;
	height: 50px;
	cursor: pointer;
	background-color: rgb(21, 20, 20);
	border-radius: 100%;
	color: white;
	font-size: 25px;
}

div.card {
	width: 225px;
	height: 225px;
	background-color: rgb(237, 182, 44);
	padding: 10px;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 20px 20px 0;
}

p.date {
	font-size: 13px;
	font-weight: bold;
}

p.error-message{
    color:red;
    font-weight:bold;
}

div.cards-container {
	display: flex;
	flex-wrap: wrap;
}

div.overlay {
	position: absolute;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.77);
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
}

div.modal{
	width:750px;
	background-color:white;
	border-radius:10px;
	padding:30px;
	position:relative;
	display:flex;
	flex-direction: column;
}

button.add-note,button.close-note{
	padding:10px 20px;
	font-size:20px;
	width:100%;
	background-color:blueviolet;
	border:none;
	color:white;
	cursor:pointer;
	margin-top:15px;
}

button.close-note{
	background-color:brown;
}
</style>