<template>
	<div v-if="contentList.length === 0" class="default">
		<div class="default-box-image">
			<img class="default-image" src="../../public/images/default.png">
		</div>
		<div class="default-text">您还没有创办任何待办事项</div>
		<div class="default-text">点击下方+号创建一个吧</div>
	</div>	
</template>

<script>
	export default {
		name: "TodoDefault",
		props: {
			contentList: Array
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	.default
		padding-top: 50px
		.default-box-image
			margin: 0 auto
			width: 311px
			.default-image
				width: 100%
		.default-text
			text-align: center
			color: #CCC
			font-size: 14px
			
			
</style>