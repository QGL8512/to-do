<template>
	<div class="todo-header">
		<!-- 状态栏左侧 -->
		<div class="header-left">
			<span class="active-text">全部</span>
			<span>10条</span>
		</div>
		<div class="header-right">
			<div class="header-right-item active-tab">全部</div>
			<div class="header-right-item">代办</div>
			<div class="header-right-item">已完成</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TodoHeader'
	}
</script>

<style lang="stylus" scoped="scoped">
	*
		padding: 0
		margin: 0
		box-sizing: border-box
		.todo-header
			position: fixed
			display: flex
			top: 0
			left: 0
			width: 100%
			height: 55px
			line-height: 55px
			padding: 0 10px
			justify-content: space-between
			background: #FFFFFF
			color: #333333
			font-size: 14px
			box-shadow: 0 2px 3px rgba(0, 0, 0, .1)
			.header-left
				width: 100%
				.active-text
					font-size: 16px
					color: #279abf
					padding-right: 5px
			.header-right
				display: flex
				flex-shrink: 0
				.header-right-item
					padding: 0 5px
				.active-tab
					font-size: 16px
					color: #279abf
</style>