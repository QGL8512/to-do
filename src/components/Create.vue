<template>
	<div class="create">
		<div class="create-item" v-if="active" :class="{'create-active': textShow}">
			<div class="create-item-box">
				<input type="text" class="create-item-input" v-model="iptValue" @focus="focusIpt" @blur="blurIpt" :placeholder="placeholder">
			</div>
			<div class="create-item-button"  @click="create">
				创建
			</div>
		</div>
		<div class="add-item" @click="addClick">
			<span class="iconfont icon-add" :class="{'add-active': textShow}"></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TodoCreate",
		props: {
			contentList: Array,
			activeIndex: Number
		},
		data() {
			return {
				placeholder: '请输入您要创建的任务',
				iptValue: '',
				active: false,
				textShow: false
			}
		},
		methods: {
			focusIpt() {
				console.log(this.placeholder)
				if(this.placeholder =='请输入您要创建的任务'){
					this.placeholder = ''
				}
			},
			blurIpt() {
				if(this.placeholder == ''){
					this.placeholder = '请输入您要创建的任务'
				}
			},
			create() {
				if(this.iptValue === ''){
					alert('内容不能为空')
					return
				}
				this.contentList.unshift({
					// id: 'id'+ new Date().getTime(),
					id: new Date().getTime(),
					content: this.iptValue,
					checked: false
				})
				this.iptValue= ""
				this.close()
			},
			addClick() {
				if(this.active){
					this.close()
				}else {
					this.open()
				}
			},
			open() {
				this.active = true
				this.$nextTick(()=>{
					setTimeout(()=>{
						this.textShow = true
						// console.log(this.textShow+ 'open')
					},50)
				})
			},
			close() {
				this.textShow = false
				// console.log('textShow='+this.textShow)
				this.$nextTick(()=>{
					setTimeout(()=>{
						this.active = false
						// console.log('active='+this.active)
						// console.log(this.textShow + 'close')
					},350)

				})
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	@import '../assets/icon.css'
	.create
		position: fixed
		top: 73%
		left: 0
		right: 0
		bottom: 0
		.add-item
			position: fixed
			display: flex
			justify-content: center
			align-items: center
			left: 0
			right: 0
			bottom: 30px
			margin: 0 auto
			width: 50px
			height: 50px
			border-radius: 50%
			background: #deeff5
			box-shadow: -1px 1px 5px 2px rgba(0, 0, 0, .1), -1px 1px 1px 0 rgba(255, 255, 255, 1) inset
			.icon-add
				font-size: 30px
				color: #add8e6
				transition: all .3s
			.add-active
				transform: rotate(135deg)
		.create-item
			position: fixed
			display: flex
			right: 20px
			bottom: 100px
			left: 20px
			padding: 0 0 0 15px
			align-items: center
			border-radius: 50px
			background: #deeff5
			box-shadow: -1px 1px 5px 2px rgba(0, 0, 0, 0.1), -1px 1px 1px 0 rgb(255, 255, 255) inset
			transition: all .3s
			opacity: 0
			transform: scale(0) translateY(200%)
			.create-item-box
				width: 100%
				padding-right: 15px
				.create-item-input
					width: 100%
					border: none
					outline: none
					background: none
					color: #add8e6
					font-size: 16px
			.create-item-button
				display: flex
				height: 50px
				width: 80px	
				align-items: center
				justify-content: center
				flex-shrink: 0
				font-size: 16px
				border-radius: 50px
				color: #88d4ec
				box-shadow: -2px 0px 2px 1px rgba(0, 0, 0, 0.1)
		.create-active
			opacity: 1
			transform: scale(1) translateY(0)
			
		
</style>