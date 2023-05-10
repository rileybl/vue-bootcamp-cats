<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <div class="bg-light p-5">
          <h2 class="h5">Add multiple cats</h2>

          <div v-for="(field, idx) in fields" :key="field.key" class="hstack gap-3 mb-3">
            <Field :name="`links[${idx}].url`" type="url" />

            <input type="text" class="form-control" />
            <button class="btn btn-danger" type="button" @click="remove(idx)">Remove</button>
          </div>

          <button class="btn btn-primary" type="button" @click="push({ url: ''})">Add</button>

          <hr />

          <div class="d-flex justify-content-end">
            <button class="btn btn-primary ms-aitp" @submit="onSubmit" novalidate>Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field, useForm, useFieldArray } from 'vee-validate';

const { handleSubmit } = useForm({
    initialValues: {
        links: [{id: 1, url: 'https://google.com'}],
    },
});

const { remove, push, fields } = useFieldArray('links');
const onSubmit = handleSubmit(values => {
    console.log(JSON.stringify(values, null, 2));
})

</script>

<style scoped></style>
