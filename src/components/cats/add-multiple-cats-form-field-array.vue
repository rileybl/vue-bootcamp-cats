<template>
   
  <div class="container">
    <TransitionGroup class="list-group" tag="div" name="list-item">
    <div v-for="(_, index) of fields" class="hstack gap-3 list-group-item">
      <TextField
        :name="`${path}[${index}]`"
        placeholder="Cat Name"
        :id="`txt-${path}-${index}`"    
        class="flex-grow-1"   
      >
      </TextField>

      <button @click="remove(index)" class="btn btn-outline-danger" type="button">
        Remove
      </button>
    </div>

    <button @click="push('')" class="btn btn-dark" type="button">
      Add
    </button>
  </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { toRef } from "vue";
import { TextField } from "..";
import { useFieldArray } from "vee-validate";

interface Props {
  path: string;
}

const props = defineProps<Props>();

const { fields, push, remove } = useFieldArray<string>(toRef(props, "path"));
</script>

<style scoped>


.list-item-enter-from {
transform: translateX(16px);
opacity: 0;
}

.list-item-enter-active {
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  position: absolute;
}

.list-item-enter-to {
  transform: none;
  opacity: 1;
}

.list-item-leave-from {
  transform: none;
  opacity: 1;
}

.list-item-leave-to {
  transform: translateX(16px);
  opacity: 0;
  transition: .3s ease-in-out, opacity 0.3s ease-in-out;
}


</style>

