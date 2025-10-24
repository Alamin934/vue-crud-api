<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import useStudent from '@/composables/studentsapi';

const { addStudent, successMsg } = useStudent();
const formData = reactive({
   name: "",
   email: ""
});
const submitForm = async () => {
   if (formData.name !== "" && formData.email !== "") {
      await addStudent(formData);
      formData.name = "";
      formData.email = "";
   }
}
</script>
<template>
   <div class="container py-5">
      <div class="row justify-content-center">
         <div class="col-6">
            <div class="card">
               <div class="card-body">
                  <div class="d-flex justify-content-between">
                     <h3>Add Student</h3>
                     <RouterLink :to="{ name: 'Students' }" class="btn btn-primary">Back To Home</RouterLink>
                  </div>

                  <div class="my-4">
                     <form @submit.prevent="submitForm">
                        <div class="mb-3">
                           <label for="" class="form-label">Enter name</label>
                           <input type="text" v-model="formData.name" class="form-control">
                        </div>
                        <div class="mb-3">
                           <label for="" class="form-label">Enter email</label>
                           <input type="email" v-model="formData.email" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                     </form>
                     <p class="text-success">{{ successMsg }}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>