import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;

class Store {
  constructor() {
    this.tests = {
      "anchor-test": {
        name: "Anchor test",
        description:
          "Test on Determinite how you suspectable to anchor effects.",
        url: "anchor-test",
        numberOfQuestions: 15,
        color: "#ffffff",
        questions: [
          {
            question: "Height of peak Talgar is more or less than 3000 meters?",
            answer: "5500",
            meansurment: "meters"
          },
          {
            question:
              "Population of Kazakhstan is close to 45 millions or not?",
            answer: "17.6",
            meansurment: "millions"
          },
          {
            question:
              "The amount of programming code lines this app has is more or less than 1000?",
            answer: "150",
            meansurment: "lines"
          },
          {
            question:
              "The time light take to reach us from the sun is around 30 seconds?",
            answer: "540",
            meansurment: "seconds"
          },
          {
            question:
              "How much do you think this app cost? Its more or less than 2000$?",
            answer: "5",
            meansurment: "dollars"
          },
          {
            question:
              "Weight of the most heavy animal on the planet Earth? More or less than 200 tones?",
            answer: "220",
            meansurment: "tones"
          },
          {
            question:
              "How far is the capital of Russia from Capital of Kazakhstan? Maybe around 3000 km. ?",
            answer: "5000",
            meansurment: "kilometers"
          },
          {
            question:
              "Biggest barrel even made was abble to hold how much tones of wine? 1000 tones.",
            answer: "220000",
            meansurment: "tones"
          },
          {
            question:
              "When did european renesance started? arount 1200 year c.e.",
            answer: "1600",
            meansurment: "year"
          },
          {
            question: "Amount of nuclear weapons Russia have? Maybe 100 000?",
            answer: "20000",
            meansurment: "weapons"
          },
          {
            question:
              "How much stepps you need to make to consume 500 callories? Maybe 1500.",
            answer: "10000",
            meansurment: "stepps"
          },
          {
            question:
              "The amount of water in lake Baikal? Shoul be around 128 milliones of tonn.",
            answer: "5500",
            meansurment: "millions of tonn"
          },
          {
            question: "The lenght of Great Wall of China is? Close to 1000 km.",
            answer: "8888",
            meansurment: "km"
          },
          {
            question: "How deep is Mermadian hallow? something to 15000m",
            answer: "11000",
            meansurment: "meters"
          },
          {
            question: "How much is the fish? La lalalala lala",
            answer: "9999",
            meansurment: "fish"
          }
        ]
      },
      "some-test-1": {
        name: "Some test 1",
        description: "Test to guess what your number is",
        url: "some-test-1",
        numberOfQuestions: 15,
        color: "#ffffff",
        questions: []
      },
      "some-test-2": {
        name: "Some test 2",
        description: "Test to guess what your second number is",
        url: "some-test-2",
        numberOfQuestions: 15,
        color: "#ffffff",
        questions: []
      }
    };
  }
  deleteTest(slug) {
    console.log("Deleting ", slug);
    delete this.tests[slug];
  }
}

new Vue({
  router,
  data: {
    store: new Store()
  },
  render: h => h(App)
}).$mount("#app");
