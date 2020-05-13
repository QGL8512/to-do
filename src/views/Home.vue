<template>
  <div class="home">
  	<todo-header :contentList="list" @change="getActiveIndex" :listLength="length"></todo-header>
  	<todo-content :contentList="list" :activeIndex="activeIndex" @change="lengthChange"></todo-content>
  	<todo-create :contentList="list"></todo-create>
  	<todo-default :contentList="list"></todo-default>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoHeader from "@/components/Header.vue"
import TodoContent from "@/components/Content.vue"
import TodoCreate from "@/components/Create.vue"
import TodoDefault from "@/components/Default.vue"
export default {
  name: "Home",
  components: {
    TodoHeader,
    TodoContent,
    TodoCreate,
    TodoDefault
  },
  data(){
  	return {
  		list: [],
  		activeIndex: 0,
  		length: 0
  	}
  },
  methods: {
  	getActiveIndex(index) {
  		this.activeIndex = index
  		// console.log(this.activeIndex)
  	},
  	lengthChange(length) {
  		console.log(length)
  		this.length = length
  	}
  }
};
</script>
