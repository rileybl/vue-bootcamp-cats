<template>
  <form @submit="onSubmit">
    <code>
      <pre>{{ values }}</pre>
    </code>
    <div class="row">
      <div class="col-lg-6">
        <div class="bg-light p-5">
          <h2 class="h5">Add multiple cats</h2>
<AddMultipleCatsFormFieldArray 
path="catNames"></AddMultipleCatsFormFieldArray>
    

          <hr />

          <div class="d-flex justify-content-end">
            <button class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { AddMultipleCatsFormFields } from "./types";
import { addMultipleCatsFormFieldsSchema } from "./schema";
import AddMultipleCatsFormFieldArray from "./add-multiple-cats-form-field-array.vue";

const { handleSubmit, values } = useForm<AddMultipleCatsFormFields>({
    validationSchema: addMultipleCatsFormFieldsSchema
});

const onSubmit = handleSubmit(values => {
    console.log(values)
});


</script>

<style scoped></style>
