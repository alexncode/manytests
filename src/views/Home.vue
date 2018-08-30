<template>
  <div class="home">
    <Definition/>
    <TestCardsBlock/>
  </div>
</template>

<script>
// @ is an alias to /src
import Definition from "@/components/Definition.vue";
import TestCardsBlock from "@/components/TestCardsBlock.vue";

export default {
  name: "home",
  components: {
    Definition,
    TestCardsBlock
  }
};

//Data for testing in dev mode
let questions = {
  name: "Anchor test",
  description: "Test on Determinite how you suspectable to anchor effects.",
  url: "anchor-test",
  numberOfQuestions: 15,
  color: "#fff",
  questions: [
    {
      text: "Height of peak Talgar is more or less than 3000 meters?",
      answer: 5500,
      meansurment: "meters"
    },
    {
      text: "Population of Kazakhstan is close to 45 millions or not?",
      answer: 17.6,
      meansurment: "millions"
    },
    {
      text:
        "The amount of programming code lines this app has is more or less than 1000?",
      answer: 150,
      meansurment: "lines"
    },
    {
      text:
        "The time light take to reach us from the sun is around 30 seconds?",
      answer: 540,
      meansurment: "seconds"
    },
    {
      text: "How much do you think this app cost? Its more or less than 2000$?",
      answer: 5,
      meansurment: "dollars"
    },
    {
      text:
        "Weight of the most heavy animal on the planet Earth? More or less than 200 tones?",
      answer: 220,
      meansurment: "tones"
    },
    {
      text:
        "How far is the capital of Russia from Capital of Kazakhstan? Maybe around 3000 km. ?",
      answer: 5000,
      meansurment: "kilometers"
    },
    {
      text:
        "Biggest barrel even made was abble to hold how much tones of wine? 1000 tones.",
      answer: 220000,
      meansurment: "tones"
    },
    {
      text: "When did european renesance started? arount 1200 year c.e.",
      answer: 1600,
      meansurment: "year"
    },
    {
      text: "Amount of nuclear weapons Russia have? Maybe 100 000?",
      answer: 20000,
      meansurment: "weapons"
    },
    {
      text:
        "How much stepps you need to make to consume 500 callories? Maybe 1500.",
      answer: 10000,
      meansurment: "stepps"
    },
    {
      text:
        "The amount of water in lake Baikal? Shoul be around 128 milliones of tonn.",
      answer: 5500,
      meansurment: "millions of tonn"
    },
    {
      text: "The lenght of Great Wall of China is? Close to 1000 km.",
      answer: 5500,
      meansurment: "km"
    },
    {
      text: "How deep is Mermadian hallow? something to 15000m",
      answer: 11000,
      meansurment: "meters"
    },
    {
      text: "How much is the fish? La lalalala lala",
      answer: 9999,
      meansurment: "fish"
    }
  ]
};

window.localStorage.setItem("tests", JSON.stringify([questions]));
</script>
<style lang="scss">
:root {
  --color-border: rgb(150, 150, 150);
  --big-screen: 550px;
  --small-screen: 320px;
}
.home {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
}
</style>
