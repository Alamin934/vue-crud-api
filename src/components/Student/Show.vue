<script setup>
import { onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import useStudent from '@/composables/studentsapi';

const route = useRoute();
const { getSingleStudent, studentData, errors } = useStudent();

onMounted(() => {
   getSingleStudent(route.params.id)
});
</script>
<template>
   <div class="container py-5">
      <div class="row justify-content-center">
         <div class="col-12">
            <div class="card">
               <div class="card-body">
                  <div class="d-flex justify-content-between">
                     <h3>Show Single Student</h3>
                     <RouterLink :to="{ name: 'Students' }" class="btn btn-primary">Back To Home</RouterLink>
                  </div>

                  <div class="my-4">
                     <table class="table table-striped">
                        <thead>
                           <tr>
                              <th scope="col">#Id</th>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th scope="row">{{ studentData.id }}</th>
                              <td>{{ studentData.name }}</td>
                              <td>{{ studentData.email }}</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>