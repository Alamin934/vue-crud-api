import { ref } from "vue";

export default function getStudents() {
   const url = 'http://localhost:3000/students';
   const studentData = ref([]);
   const errors = ref(null);


}