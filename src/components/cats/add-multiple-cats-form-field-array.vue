<template>
    <div>
        <div v-for="(field, index) of fields" class="hstack gap-3 mb-3">
            <TextField
              :name="`${path}[${index}]`"
              placeholder="Cat Name"
              :id="`txt-${path}-${index}`"
            >
            </TextField>
                  <button @click="$event => remove(index)" class="btn btn-danger" type="button">Remove</button>
          </div>

          <button
            @click="$event => push('')"
            class="btn btn-primary"
            type="button"
          >
            Add
          </button>
    </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { TextField } from '..';
import { useFieldArray } from 'vee-validate';


interface Props {
    path: string;
}

const props = defineProps<Props>();



const { fields, push, remove } = useFieldArray<string>(toRef(props, 'path'));
</script>

<style scoped>

</style>