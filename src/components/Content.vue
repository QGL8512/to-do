<template>
	<div class="todo-content">
		<div class="todo-list todo-finish">
			<div class="todo-list-checkbox">
				<div class="checkbox"></div>
			</div>
			<div class="todo-list-content">
				今天看面试题
			</div>
		</div>
		<div class="todo-list">
			<div class="todo-list-checkbox">
				<div class="checkbox"></div>
			</div>
			<div class="todo-list-content">
				今天看面试题
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TodoContent"
	}
</script>

<style lang="stylus" scoped="scoped">
	.todo-content
		width: 100%
		padding-top: 70px
		.todo-list
			position: relative
			display: flex
			height: 50px
			align-items: center
			margin: 0 15px 15px 15px
			padding: 15px
			font-size: 14px
			border-radius: 10px
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
			right: 10px
			bottom: 0
			left: 40px
			margin: auto 0
			background: #bdcdd8
				
</style>