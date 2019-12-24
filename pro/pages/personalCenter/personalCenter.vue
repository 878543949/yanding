
<template>
	<view class="personalCenter">
		
		<view class="title">
			<view><image src="../../static/image/cermea.jpg"/></view>
			<view>zhagpei</view>
			<view>编辑资料</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.personalCenter{
	background: #eee;
	padding: 20px;
	.title{
		background: white;
		display: flex;
		align-items: center;
		padding: 10px;
		box-sizing: border-box;
		image{
			width: 75px;
			height: 75px;
			border-radius: 50%;
		}
		view:nth-of-type(2){
			flex: 1;
			margin-left: 10px;
		}
		view:nth-of-type(3){
			border: 1px solid #666;
			width: 170rpx;
			height: 60rpx;
			border-radius: 60rpx;
			text-align: center;
			line-height: 60rpx;
			color: #666;
			font-size: 28rpx;
		}
	}
}
</style>
