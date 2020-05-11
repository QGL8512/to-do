<template>
  <div class="home">
  	<todo-header></todo-header>
  	<todo-content></todo-content>
  	<todo-create></todo-create>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoHeader from "@/components/Header.vue"
import TodoContent from "@/components/Content.vue"
import TodoCreate from "@/components/Create.vue"
export default {
  name: "Home",
  components: {
    TodoHeader,
    TodoContent,
    TodoCreate
  }
};
</script>
