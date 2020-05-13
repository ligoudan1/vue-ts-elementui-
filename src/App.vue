<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
// ts写法
import { Component, Vue, Model } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  private loading: boolean = false;
}
// 原生vue写法
// export default {
//   data() {
//     return {
//       loading: false
//     };
//   }
// };
</script>

<style lang="scss">
@import "./assets/index.css"; // 全局自定义的css样式
@import "./assets/main.scss"; // 全局自定义的css样式
</style>