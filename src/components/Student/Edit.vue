<script setup>
import { onMounted, reactive } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import useStudent from '@/composables/studentsapi';

const { updateStudent, getSingleStudent, studentData, successMsg } = useStudent();
const route = useRoute();
const formData = reactive({
   id: "",
   name: "",
   email: ""
});
const updateForm = async () => {
   console.log(formData)
   // if (formData.name !== "" && formData.email !== "") {
   //    await updateStudent(formData);
   //    formData.name = "";
   //    formData.email = "";
   // }
}
onMounted(() => {
   getSingleStudent(route.params.id);
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
                           <label for="" class="form-label">Id</label>
                           <input type="text" class="form-control" :value="studentData.id"
                              @input="formData.id = $event.target.value">
                        </div>
                        <div class="mb-3">
                           <label for="" class="form-label">Enter name</label>
                           <input type="text" @input="formData.name = $event.target.value" :value="studentData.name"
                              class="form-control">
                        </div>
                        <div class="mb-3">
                           <label for="" class="form-label">Enter email</label>
                           <input type="email" @input="formData.email = $event.target.value" :value="studentData.email"
                              class="form-control">
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