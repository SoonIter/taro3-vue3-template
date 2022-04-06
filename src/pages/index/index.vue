<template>
  <nut-button @click="goRequest">跳转接口测试页面</nut-button>
  <nut-button @click="goCss">跳转样式测试页面</nut-button>
  <nut-button @click="goPinia">跳转Pinia测试页面</nut-button>
  <nut-button @click="goNutUi">跳转NutUi测试页面</nut-button>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
import { ref } from 'vue'

</script>
