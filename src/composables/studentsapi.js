import axios from "axios";
import { ref } from "vue";

export default function useStudent() {
   const url = 'http://localhost:3000/students/';
   let studentData = ref([]);
   let errors = ref(null);
   let successMsg = ref("");

   const getStudents = async () => {
      studentData.value = [];
      errors.value = null;
      successMsg.value = "";
      try {
         const res = await axios.get(url);
         studentData.value = res.data;
      } catch (err) {
         errors.value = err;
      }
   }

   const addStudent = async (data) => {
      studentData.value = [];
      errors.value = null;
      successMsg.value = "";
      try {
         const res = await axios.post(url, data, {
            headers: {
               'Content-Type': 'application/json'
            }
         });
         if (res.status === 201) {
            successMsg.value = "Student created successfully";
         }
      } catch (err) {
         errors.value = err;
      }
   }

   const getSingleStudent = async (id) => {
      studentData.value = [];
      errors.value = null;
      successMsg.value = "";
      try {
         const res = await axios.get(url + id);
         studentData.value = res.data;
      } catch (err) {
         errors.value = err;
      }
   }

   const updateStudent = async (id, data) => {
      studentData.value = [];
      errors.value = null;
      successMsg.value = "";
      try {
         const res = await axios({
            method: 'PUT',
            url: url + id,
            data: data,
            headers: {
               'Content-Type': 'application/json'
            }
         });
         studentData.value = res.data;
         if (res.status === 200) {
            successMsg.value = "Student updated successfully!";
         }
      } catch (err) {
         errors.value = err;
      }
   }
   const destroyStudent = async (id) => {
      studentData.value = [];
      errors.value = null;
      successMsg.value = "";
      try {
         const res = await axios({
            method: 'DELETE',
            url: url + id,
            headers: {
               'Content-Type': 'application/json'
            }
         });
      } catch (err) {
         errors.value = err;
      }
   }

   return { getStudents, addStudent, getSingleStudent, updateStudent, destroyStudent, studentData, errors, successMsg };

}