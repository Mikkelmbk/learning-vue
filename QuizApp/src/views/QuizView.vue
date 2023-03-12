<script setup>
    import Question from "../components/Question.vue";
    import QuizHeader from "../components/QuizHeader.vue";
    import Result from "../components/Result.vue";
    import { useRoute } from "vue-router";
    // Importing Watch and Computed here in order to illustrate how both can be used to achieve somewhat the same things, but depending on how extensive the code you need to execute is, computed might be sufficient despite not being as flexible as watch.
    import { ref, watch, computed } from "vue";
    import quizes from "../data/quizes.json";

    const route = useRoute();
    const quizId = parseInt(route.params.id);
    const quiz = quizes.find(q => q.id === quizId);
    const currentQuestionIndex = ref(0);
    const numberOfCorrectAnswers = ref(0);
    const showResults = ref(false);

    // CONVOLUTED BUT FLEXIBLE APPROACH TO UPDATING VARIABLE DATA
    // const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);
    // Using watch to listen for changes to currentQuestionIndex.value (This has to be a function here, as opposed to how it is set up in QuizesView.vue and I have NO IDEA why...? Possibly because JavaScript has no addEventListener functionality to listen to variable data changes, but does have such functionality when listening to Input fields. The input field is bound with v-model in the QuizesView.vue file).
    // The callback function makes sense as we need something to happen when a change occurs to currentQuestionIndex.value.
    // watch(() => currentQuestionIndex.value, ()=>{
    //     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
    // });

    // SIMPLE BUT RESTRICTIVE APPROACH TO UPDATING VARIABLE DATA
    // computed simply allows us to listen for changes to state managed variables within the callback and have some data returned to a variable that needs to be updated when the specified change occurs (questionStatus is treated like state when its value is set through computed).
    // Here we both set and update the value of questionStatus whenever a change occurs to our state managed currentQuestionIndex.value variable.
    const questionStatus = computed(()=>{
        return `${currentQuestionIndex.value}/${quiz.questions.length}`;
    });

    const barPercentage = computed(()=> `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`);

    // Here we are defining the function that will be invoked when the "selectOption" event is emitted from the Question.vue component.
    // We are preparing a parameter called "isCorrect" to grab the data that is sent along in this emitted event, and then we are executing some code based on this value.
    // isCorrect can be called ANYTHING as it is merely a parameter ready to temporarily contain the value that we will handle within the function.
    const onOptionSelected = (isCorrect) => {
        console.log(isCorrect);
        if(isCorrect){
            // If the returned value is truthy then we increment numberOfCorrectAnswers (which is defined above)
            numberOfCorrectAnswers.value++;
        }
        if((quiz.questions.length - 1) === currentQuestionIndex.value){
            console.log("Quiz ended");
            showResults.value = true;
        }
        // We always increment currentQuestionIndex, as the question was answered, correct or incorrect.
        currentQuestionIndex.value++;
    }
</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage"/>
        <!-- :question is data being passed to the Question component, through a prop that we have called "question". We are catching this prop data in Question.vue and utilizing it there. -->
        <!-- We are listening for an event called "selectOtion" to be emitted from the Question.vue component, and then we are going to invoke "onOptionSelected" which we will define within QuizView.vue in order to execute some code. -->
        <Question v-if="!showResults" @selectOption="onOptionSelected" :question="quiz.questions[currentQuestionIndex]"/>
        <Result v-else :quizQuestionLength="quiz.questions.length" :numberOfCorrectAnswers="numberOfCorrectAnswers"/>

    </div>
</template>