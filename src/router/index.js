import NotFound from "@/components/NotFound.vue";
import Add from "@/components/Student/Add.vue";
import Edit from "@/components/Student/Edit.vue";
import Lists from "@/components/Student/Lists.vue";
import Show from "@/components/Student/Show.vue";
import { createWebHistory, createRouter } from "vue-router";

export const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         name: "students",
         component: Lists,
      },
      {
         path: "/student/add",
         name: "AddStudent",
         component: Add
      },
      {
         path: "/student/edit:id",
         name: "EditStudent",
         component: Edit
      },
      {
         path: "/student/show:id",
         name: "ShowStudent",
         component: Show
      },
      {
         path: '/:pathMatch(.*)*',
         name: 'NotFound',
         component: NotFound
      },
   ],
});