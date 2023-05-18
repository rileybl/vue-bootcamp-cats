<template>
  <form @submit="onSubmit">
    <!-- <code>
      <pre>{{ values }}</pre>
    </code> -->
    <div class="row">
      <div class="containerBox col-lg-6">
        <div class="bg-outline">
          <h2 class="h3">Looking for multiple breeds? Add them here!</h2>
          <AddMultipleCatsFormFieldArray
            path="catNames"
            ></AddMultipleCatsFormFieldArray>

          <hr />

          <div class="d-flex justify-content-center">
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
  validationSchema: addMultipleCatsFormFieldsSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<style scoped>

.btn {
  border-radius: 20px;
  padding: 5px 30px;
}
.containerBox {
  justify-content: center;
  display: flex;
  border: 1px black solid;
  border-radius: 20px;
  margin: auto;  
  padding: 40px;
  width: 60%;
}

.h3 {
  justify-content: center;
  display: flex;
  padding-bottom: 30px;
}
</style>
