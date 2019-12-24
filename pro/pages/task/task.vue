<template>
	<view class="task">
		<view class="task-keep">已守约<text class="keep-num">{{num}}</text> 次</view>
		<view class="task-doing">进行中({{doing}})</view>
		<view class="task-finsh">已完成({{finish}})</view>
		<view class="task-fail">未完成({{fail}})</view>
		<view class="task-add" @click="goAdd"><text>+</text><text>约定</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 3,
				doing:1,
				finish:2,
				fail:0
			}
		},
		methods: {
			goAdd(){
				uni.navigateTo({
				    url: "../index/index"
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	
	.task {
		background: #eee;
		height: 100%;
		padding: 10px;
		
		.task-keep{
			background: white;
			text-align: center;
			color: #666;
			padding: 10px 0;
			font-size: 16px;
			border-bottom: 1px solid #fff;
			margin-bottom: 8px;
			border-radius: 5px;
			.keep-num{
				font-size: 22px;
				padding: 0 5px;
			}
		}
		.task-doing{
			background: white;
			color: #666;
			padding: 10px;
			border-bottom: 1px solid #fff;
			margin-bottom: 8px;
			border-radius: 5px;
		}
		.task-finsh{
			background: white;
			color: #666;
			padding: 10px;
			border-bottom: 1px solid #fff;
			margin-bottom: 8px;
			border-radius: 5px;
		}
		.task-fail{
			background: white;
			color: #666;
			padding: 10px 15px;
			border-radius: 5px;
			margin-bottom: 8px;
		}
		.task-add{
			width: 50px;
			height: 50px;
			color: white;
			position: fixed;
			bottom: 50px;
			right: 50px;
			background: #3393f4;
			border-radius: 50%;
			text{
				display: block;
				text-align: center;
				font-size: 14px;
			}
		}
	}
</style>
