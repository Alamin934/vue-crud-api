<script setup>
import { RouterLink } from 'vue-router';
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
                           <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>
                                 <button class="btn btn-warning">
                                    <i class="bi bi-eye"></i>
                                 </button>
                                 <button class="btn btn-primary mx-2">
                                    <i class="bi bi-pencil-square"></i>
                                 </button>
                                 <button class="btn btn-danger">
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