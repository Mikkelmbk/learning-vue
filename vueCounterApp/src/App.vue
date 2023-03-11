<script setup>
import { ref } from "vue";
const count = ref(0);

const addToCount = () => {
	count.value = count.value + 1;
}

function subtractFromCount(){
	count.value = count.value - 1;
}
</script>

<template>
	<main>
		<div>
			<h4>The current count is...</h4>
			<h1>{{ count }}</h1>
			<button id="subtractByDeclaredFunction" @click="subtractFromCount">-</button>
			<button id="subtractByDecreasingVariableDirectly" @click="count--">-</button>
			<button id="addByNamedFunction" @click="addToCount">+</button>
			<button id="addByIncrementingVaribleDirectly" @click="count++">+</button>
		</div>
	</main>
</template>

<style scoped>
main {
	background-color: aliceblue;
	min-height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
}

div {
	text-align: center;
}
</style>