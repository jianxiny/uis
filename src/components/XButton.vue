<script setup lang="ts">
import {ref} from "vue";
import {Button as AButton} from "ant-design-vue"
import 'ant-design-vue/lib/button/style/index.css';
import {genearteId} from "./util";

type Props =  {
  counter: number
  counter3: number
}
const props =  defineProps<Props>()
let counter2 = ref(genearteId())
</script>

<template>
  <button class="bg-blue-300">{{counter2}}x-button{{counter}}-{{counter3}}</button>
  <a-button type="primary">hello</a-button>
</template>

<style scoped>
</style>
