// Define our routing rules here once we have installed the vue-router package and adjusted main.js accordingly. //
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CarView from "../views/CarView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../views/404View.vue";

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
            // Redirects the user to the / route when accessing /home.
            redirect: "/"
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            // We prepare the path property to work with a static base path that also has a trailing Id. The Id can be called anything, but the word Id makes sense here.
            path: "/car/:id",
            name: "car",
            component: CarView,
            // We are going to have an additional route that will be trailing the Id, and we do that with the children Array that allows us to set up routes that can only be accessed within this route.
            children: [
                {
                    // The path in a child route does NOT start with a slash.
                    path: "contact",
                    component: ContactView
                }
            ]
        },
        {
            // Handling routing when a user accesses a page that does not exist.
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFoundView
        }
    ]
})

export default router;
