<template>
	<div class="todo-content">
		<div class="todo-list" :class="{'todo-finish': item.checked}" v-for="(item,index) in listData" :key="index" @click="finish(item.id)">
			<div class="todo-list-checkbox">
				<div class="checkbox"></div>
			</div>
			<div class="todo-list-content">
				{{item.content}}
			</div>
			<div class="icon-box" @click.stop="del(index)">
				<span class="iconfont icon-add"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TodoContent",
		props: {
			contentList: Array,
			activeIndex: Number
		},
		computed: {
			listData() {
				//深拷贝数组
				let list = JSON.parse(JSON.stringify(this.contentList))
				let newList = []
				if(this.activeIndex === 0) {
					return list
				}
				//待办
				if(this.activeIndex === 1) {
					list.forEach((item)=>{
						if(!item.checked) {
							newList.push(item)
						}
					})
					return newList
				}
				//已完成
				if(this.activeIndex === 2) {
					list.forEach((item)=>{
						if(item.checked) {
							newList.push(item)
						}
					})
				}
				return newList
			}
		},
		methods: {
			finish(id) {
				// console.log(length)
				// this.$emit('change',this.listData.length)
				// console.log(this.contentList)
				// console.log(this.activeIndex)
				let index = this.contentList.findIndex((item)=>item.id === id)
				// let index = this.contentList.findIndex((item)=>{
				// 	item.id === id
				// 	console.log(id)
				// })
				console.log(this.contentList[index])
				this.contentList[index].checked = !this.contentList[index].checked
				// console.log(activeIndex)
			},
			del(index) {
				// this.contentList.splice(index,1)
					console.log(index)
					console.log(this.listData)
					console.log(this.contentList)
					this.contentList.splice(index,1)
				// // 
				// let _index = index
				// let _this = this
				
				// this.$nextTick(()=>{
				// 	setTimeout(()=>{
				// 	//console.log(_this.contentList, _index)
				// 	},10)
				// })
				// /*if(this.contentList.length = 0) {
				// 	this.activeIndex = 0
				// }*/
				
			}
		},
		beforeUpdate() {
			this.$emit('change',this.listData.length)
			//console.log(this.listData.length)
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	@import '../assets/icon.css'
	.todo-content
		width: 100%
		padding-top: 70px
		padding-bottom: 100px
		.todo-list
			position: relative
			display: flex
			//height: 50px
			align-items: center
			margin: 0 15px 15px 15px
			padding: 15px 45px 15px 15px
			font-size: 14px
			border-radius: 10px
			white-space:normal
			word-break:break-all
			background: #cfebfd
			box-shadow: -1px 1px 5px 1px rgba(0, 0, 0, 0.1), -1px 2px 1px 0 rgb(255, 255, 255) inset
			overflow: hidden
			.todo-list-checkbox
				padding-right: 15px
				.checkbox
					width: 20px
					height: 20px
					border-radius: 50%
					box-shadow: 0 0 5px 1px rgba(0, 0, 0, .1)
					background: #FFF
			.icon-box
				position: absolute
				display: flex
				justify-content: center
				transform: rotate(45deg)
				height: 30px
				width: 30px
				right: 5px
				.icon-add
					color: #add8e6
					font-size: 28px
		.todo-finish .todo-list-checkbox .checkbox
			position: relative
			background: #eee
		.todo-finish .todo-list-content
			color: #999999
		.todo-list::after
			position: absolute
			content: ""
			top: 0
			bottom: 0
			left: 0
			width: 5px
			background: #91d1e8
		.todo-finish .checkbox:after
			position: absolute
			content: ""
			width: 10px
			height: 10px
			border-radius: 50%
			top: 0
			right: 0
			bottom: 0
			left:  0
			margin: auto
			background: #CFEBFD
			box-shadow: 0 0 2px 0 rgba(0, 0, 0, .2) inset
		.todo-finish::after
			background: #ccc
		.todo-finish::before
			position: absolute
			content: ""
			height: 2px
			top: 0
			right: 45px
			bottom: 0
			left: 40px
			margin: auto 0
			background: #bdcdd8
				
</style>