<template>
  <form @submit="onSubmit" class="hstack gap-3">
    <TextField id="txt-catName" name="catName"></TextField>
    <button class="btn btn-primary">Add</button>
  </form>
</template>

<script setup lang="ts">
import { useCatsStore } from "../../store";
import { useForm } from "vee-validate";
import { AddCatFormFields } from "./types";
import { addCatFormFieldsSchema } from "./schema";
import { TextField } from "..";

const catsStore = useCatsStore();


const { handleSubmit, resetForm } = useForm<AddCatFormFields>({
  validationSchema: addCatFormFieldsSchema,
});

const onSubmit = handleSubmit(
  async (values) => {
    await catsStore.findAndAdd(values.catName);
    resetForm();
  },
  (context) => {
    console.log(context);
  }
);
</script>

<style scoped></style>
