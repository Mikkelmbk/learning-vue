import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../views/QuizesView.vue";
import HomeView from "../views/HomeView.vue";
import PageNotFoundView from "../views/404View.vue";
import QuizView from "../views/QuizView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/quizes",
            name: "quizes",
            component: QuizesView
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: QuizView
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: PageNotFoundView
        }
    ]
})


export default router;