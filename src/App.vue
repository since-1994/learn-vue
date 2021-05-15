<template>
  <div>
    {{now}}
    <button @click="add">
      +
    </button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        now: 1
      };
    },
    methods:{
      add(){
        this.now++;
      }
    }
  }
</script>