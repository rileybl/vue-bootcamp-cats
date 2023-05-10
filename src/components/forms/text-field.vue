<template>
  <div>
    <label class="form-label" :for="id">{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      @change="handleChange"
      @blur="handleBlur"
    />

    <span v-if="errorMessage" class="small text-danger">{{  errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { toRef } from "vue";

interface Props {
  name: string;
  id: string;
  label?: string;
  placeholder?: string;
  type: "text" | "email" | "password" | "tel";
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
});

const { errorMessage, handleChange, handleBlur } = useField(toRef(props, "name"));
</script>

<style scoped></style>
