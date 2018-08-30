import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/test/:name",
      name: "test",
      component: () => import("./views/Test.vue")
    },
    {
      path: "/create",
      name: "create",
      component: () => import("./views/Create.vue")
    },
    {
      path: "/edit",
      name: "edit",
      component: () => import("./views/Edit.vue")
    },
    {
      path: "/update/:name",
      name: "update",
      component: () => import("./views/Create.vue")
    }
  ]
});
