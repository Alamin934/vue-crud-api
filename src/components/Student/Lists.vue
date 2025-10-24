<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import useStudent from '@/composables/studentsapi';

const { getStudents, destroyStudent, studentData, errors } = useStudent();
onMounted(() => {
   getStudents()
});
const deleteStudent = async (id) => {
   if (confirm('Are you sure to delete?')) {
      await destroyStudent(id);
      await getStudents();
   }
}
</script>
<template>
   <div class="container py-5">
      <div class="row justify-content-center">
         <div class="col-12">
            <div class="card">
               <div class="card-body">
                  <div class="d-flex justify-content-between">
                     <h3>All Students</h3>
                     <RouterLink :to="{ name: 'AddStudent' }" class="btn btn-info">+Add Student</RouterLink>
                  </div>

                  <div class="my-4">
                     <table class="table table-striped">
                        <thead>
                           <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr v-for="({ id, name, email }, index) in studentData" :key="id">
                              <th scope="row">{{ index + 1 }}</th>
                              <td>{{ name }}</td>
                              <td>{{ email }}</td>
                              <td>
                                 <RouterLink :to="{ name: 'ShowStudent', params: { id: id } }" class="btn btn-warning">
                                    <i class="bi bi-eye"></i>
                                 </RouterLink>
                                 <RouterLink :to="{ name: 'EditStudent', params: { id: id } }"
                                    class="btn btn-primary mx-2">
                                    <i class="bi bi-pencil-square"></i>
                                 </RouterLink>
                                 <button class="btn btn-danger" @click="deleteStudent(id)">
                                    <i class="bi bi-trash"></i>
                                 </button>
                              </td>
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