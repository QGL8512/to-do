<template>
	<div v-if="contentList.length !== 0" class="todo-header">
		<!-- 状态栏左侧 -->
		<div class="header-left">
			<span class="active-text">日程</span>
			<span>{{listLength}}条</span>
		</div>
		<div class="header-right">
			<div class="header-right-item" :class="{'active-tab': activeIndex === 0}" @click="tab(0)">全部</div>
			<div class="header-right-item" :class="{'active-tab': activeIndex === 1}" @click="tab(1)">代办</div>
			<div class="header-right-item" :class="{'active-tab': activeIndex === 2}" @click="tab(2)">已完成</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TodoHeader',
				props: {
					contentList: Array,
					listLength: Number
				},
				data() {
					return {
						activeIndex: 0
					}
				},
				methods: {
					tab(index) {
						this.activeIndex = index
						this.$emit('change', this.activeIndex)
					}
				}
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
			padding: 0 15px
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