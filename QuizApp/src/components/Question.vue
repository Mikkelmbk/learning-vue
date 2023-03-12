<script setup>
    // defineEmits will allow us to pass information from a child component to it's parent component/view. Props can only be passed DOWN through child components, so in order to pass information UP we need to utilize event emits.
    import { defineProps, defineEmits } from 'vue';
    // Catching prop named "question" which was passed to this component from the QuizView.vue view.
    const { question } = defineProps(['question']);

    // We define the emits that we want available to us defineEmits(["theEmitsCanBeNamedAnything","thisJustControlsWhichEmitsAreAvailableToUsWhenInvokingEmit"]).
    const emit = defineEmits(["selectOption"]);

    // Here we declare the name of the function that we are invoking upon clicking an option within the Question.vue component.
    const emitSelectedOption = (isCorrect)=>{
        // Here we are utilizing the emits that we defined above, and along with this emit we send the data that we want. This will allow the parent Component to listen for the selectOption emit and handle the data that we are sending along.
        emit("selectOption",isCorrect);
    }

</script>

<template>
    <div>
        <div class="question-container">
            <h1 class="question">{{ question.text }}</h1>
        </div>
        <div class="option-container">
            <!-- Here we are invoking the emitSelectedOption function that we declared earlier, and we are passing the option.isCorrect boolean value along as a parameter. -->
            <div v-for="option in question.options" :key="option.id" @click="emitSelectedOption(option.isCorrect)" class="option">
                <p class="option-label">{{ option.label }}</p>
                <div class="option-value">
                    <p>{{ option.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.question-container {
    margin-top: 20px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option-value {
    background-color: rgb(244, 239, 239);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
}
</style>