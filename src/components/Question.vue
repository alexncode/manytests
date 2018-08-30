<template>
  <div class="question">
        <div class="question__text">
        {{ $vnode.key + 1 }}. {{ question.text }}
        </div>
        <div class="question__answer" v-if='!result'>
            <label for="id_answer">Answer: </label>
            <input type="number" name="answer" id="id_answer" @input="$emit('answer', $event.target.value, $vnode.key)">
            {{ question.meansurment}}
        </div>
        <div v-if='result'>
          Your answer is {{question.user_answer}} <br>
          Right answer is {{question.answer}}
        </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    question: Object,
    result: Boolean
  }
};
</script>

<style lang="scss">
.question {
  width: var(--big-screen);
  border: solid 1px var(--color-border);
  border-radius: 5px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  .question__text {
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
  .question__answer {
    padding-top: 1rem;
  }
}
@media only screen and (max-width: 560px) {
  .question {
    width: var(--small-screen);
  }
}
</style>
