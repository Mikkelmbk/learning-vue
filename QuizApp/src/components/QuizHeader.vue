<script setup>
    import { defineProps } from 'vue';
    // Catching prop named "questionStatus" which was passed to this component from the QuizView.vue view.
    const { questionStatus, barPercentage } = defineProps(['questionStatus','barPercentage']);
</script>

<template>
    <header>
        <h4>Question {{ questionStatus }}</h4>
        <div class="bar">
            <!-- Utilizing a passed prop value in order to set the INLINE width style property through the Vue.js attribute syntax that is available when prefixing regular html attributes with a colon. -->
            <div class="completion" :style="{width: barPercentage}"></div>
        </div>
    </header>
</template>

<style scoped>
header{
    margin-top:20px;
}

header h4{
    font-size:30px;
}

.bar{
    width:300px;
    height:50px;
    border: 3px solid bisque;
}

.completion{
    height:100%;
    width:0%;
    background-color:bisque;
}
</style>