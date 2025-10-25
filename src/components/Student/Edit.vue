<script setup>
import { onMounted, reactive } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import useStudent from '@/composables/studentsapi';

const { updateStudent, getSingleStudent, studentData, successMsg, errors } = useStudent();
const route = useRoute();

const updateForm = async () => {
   if (studentData.value.name !== "" && studentData.value.email !== "") {
      await updateStudent(route.params.id, studentData.value);
   }
}
onMounted(async () => {
   await getSingleStudent(route.params.id);
});
</script>
<template>
   <div class="container py-5">
      <div class="row justify-content-center">
         <div class="col-6">
            <div class="card">
               <div class="card-body">
                  <div class="d-flex justify-content-between">
                     <h3>Update Student</h3>
                     <RouterLink :to="{ name: 'Students' }" class="btn btn-primary">Back To Home</RouterLink>
                  </div>

                  <div class="my-4">
                     <form @submit.prevent="updateForm">
                        <div class="mb-3">
                           <input type="hidden" disabled class="form-control" v-model="studentData.id">
                        </div>
                        <div class="mb-3">
                           <label for="" class="form-label">Enter name</label>
                           <input type="text" v-model="studentData.name" class="form-control">
                        </div>
                        <div class="mb-3">
                           <label for="" class="form-label">Enter email</label>
                           <input type="email" v-model="studentData.email" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                     </form>
                     <p class="text-success">{{ successMsg }}</p>
                     <p class="text-success">{{ successMsg }}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>