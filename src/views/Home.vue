<template>
  <div class="home">
  	<todo-header></todo-header>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoHeader from "@/components/Header.vue"
export default {
  name: "Home",
  components: {
    TodoHeader,
  }
};
</script>
