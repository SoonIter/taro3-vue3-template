<template>
  <div>
    <div>hello</div>
    <div>{{ form.username }}</div>
    <Input v-model="form.username" />
    <input v-model="form.username" />
  </div>
</template>

<script lang="ts" setup>
import Input from './comps/Input.vue';
import { ref, reactive } from 'vue';
import login from '@/service/user/login';

const form = reactive({ username: 'hahah', password: '' });
</script>

<style scoped lang="scss"></style>
