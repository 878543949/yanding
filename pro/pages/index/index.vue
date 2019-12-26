<template>
	<view class="content">
		<view class="text-area">
			<view class="together">
				<view class="together-title" @click="openType">{{typeChooe}}</view>
				<cover-view class="together-choose" v-if="types">
					<cover-view v-for="(item,index) in typeList" :key="index" @click="chooseType(item)">{{item}}</cover-view>
				</cover-view>
			</view>
			<view class="together-content">
				<textarea placeholder="请输入任务内容,不超过40字" placeholder-style="color:#333;font-size:14px;" @blur='yueContent' maxlength="40"/>
				<view class="picture" v-if="addImg">
					<view class="imgList" v-for="(item,index) in imgList" :key="index">
						<image :src="item"></image>
					</view>
					<view class="addpicture" @click="chooseAlbum"></view>
				</view>
				<view class="camera">
					<image @click="addImgs" src="./../../static/image/cermea.jpg"></image>
				</view>
			</view>
			
			<view v-if="showChooseTime">
				<view class="type">请选择约定类型</view>
				<view class="frequency">
					<view class="frequency1" v-for="(item,index) in AgreementCount" :key='index' @click="frequency(index)" :class="frequencyKey===index?'active':''">{{item}}</view>
				</view>
				
				<view v-if="showCryl">
					<view class="type">请选择约定周期</view>
					<view class="frequency">
						<view class="frequency1" @click="frequency(3)" :class="{active:AppointmentCryl}">
							<picker @change="bindPickerChange" :value="index" :range="array">
								<view class="uni-input">{{array[index]}}</view>
							</picker>
						</view>					
						<view class="frequency2" @click="frequency(4)" :class="{active:!AppointmentCryl}"><input placeholder="请输入固定次数"/></view>
					</view>
				</view>
			</view>
			
			<view class="chooseTime"  v-if="showChooseTime">
				<text @click="onShowDatePicker('datetime')">{{appointedTime}}</text>
				<view v-if="showDetail1" @click="showD">
					<text>几次</text>
					<text>查看详情</text>
				</view>
			</view>
			
			<view>
				<mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
			</view>
		</view>
		<view class="detail" v-if='showDetail'>
			<view class="detail-content">
				<view class="detail-title">守约时间预览</view>
				<scroll-view scroll-y="true">
					<view class="scroll-title">发布约定后将生成</view>
					<view>ss</view>
					<view>ss</view>
				</scroll-view>
				<view class="detail-know" @click="Iknow">我知道了</view>
			</view>
		</view>
		<view class="next">
			<view @click="show()">下一步</view>
		</view>
	</view>
</template>

<script>
	import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
	import luPopupWrapper from "@/components/lu-popup-wrapper/lu-popup-wrapper.vue";
<<<<<<< HEAD
	import {agreementType} from '@/utils/api.js'
=======
	import {agreementList ,agreementCountList ,agreementCycle ,agreementCycleTime} from '../../utils/api.js'
>>>>>>> 28a9ad44651d5b91a67e95f334221d690aa553c4
	export default {
		components:{
			MxDatePicker,
			luPopupWrapper
		},
		data() {
			return {
				addImg:false,
				types:false,
				typeChooe:"一起约",
				typeList:[],
				AgreementCount:'',
				frequencyKey:0,
				imgList:[],
				appointedTime:'请选择约定时间',
				showChooseTime:false,
				showNext:false,
				next:false,
				Appointment:true,
				AppointmentCryl:true,
				index:0,
				showCryl:false,
				showDetail:false,
				showDetail1:false,
								
				array:[],
				showPicker: false,
				date: '2019-01-01',
				time: '15:00:12',
				datetime: '2019-01-01 15:00:12',
				range: ['2019-01-01','2019/01/06'],
				rangetime: ['2019-01-01 14:00','2019-01-01 13:59'],
				type: 'rangetime',
				value: ''
			}
		},
		onLoad() {
<<<<<<< HEAD
			this.getType()
		},
		methods: {
			getType(){
				console.log(1)
				
				agreementType().then(res=>{
					console.log(res)
=======
			this.getAgreementList()
			this.getAgreementCountList()
			this.getAgreementCycle()
			this.getAgreementCycleTime()
		},
		methods: {
			// 获取约定类型
			getAgreementList(){
				agreementList().then(res=>{
					this.typeList = this.filter(res.date)
				})
			},
			//获取约定次数类型
			getAgreementCountList(){
				agreementCountList().then(res=>{
					this.AgreementCount = this.filter(res.date)
				})
			},
			//约定周期类型
			getAgreementCycle(){
				agreementCycle().then(res=>{
					this.cycleList = this.filter(res.date)
				})
			},
			//约定周期时间
			getAgreementCycleTime(){
				agreementCycleTime().then(res=>{
					this.array = this.filter(res.date)
>>>>>>> 28a9ad44651d5b91a67e95f334221d690aa553c4
				})
			},
			//选择约定次数		
			frequency(type){
				console.log(type)
				if(type===0){
					this.showCryl = false
					this.frequencyKey = type
				}else if(type===1){
					this.showCryl = true
					this.frequencyKey = type
				} else if(type===3){
					this.AppointmentCryl = true
				} else{
					this.AppointmentCryl = false
				}
			},
			showD(){
				this.showDetail = true
			},
			//约定周期
			bindPickerChange(e) {
		        console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			
			onShowDatePicker(type){//显示
			    this.type = type;
			    this.showPicker = true;
			    this.value = this[type];
			},
			onSelected(e) {//选择
			    this.showPicker = false;
			    if(e) {
			        this[this.type] = e.value; 
			        //选择的值
					this.appointedTime = e.value
					this.showNext = true
			        //console.log('value => '+ e.value);
			         //原始的Date对象
			        //console.log('date => ' + e.date);
			    }
			},
			//判断是否输入内容
			yueContent(e){	
				this.ydContent = e.detail.value.replace(/\s*/g, "")
				if(this.ydContent.length>0){
					this.next = true
				}			
			},
			//选择约定谁
			openType(){
				this.types = !this.types
			},
			chooseType(item){
				this.typeChooe = item
				this.types = false
			},
			//选择时间
			show(){
				if(this.next == true){
					if(this.showNext == false){
						this.showChooseTime = true
						this.showDetail1=true
					}else{
						console.log(1)
					}			
				}else{
					uni.showToast({
					    title: '请输入约定内容',
					    duration: 1000
					});
				}
			},
			//点击我知道了
			Iknow(){
				this.showDetail = false
			},	
			//弹出图片列表
			addImgs(){
				this.addImg = true
			},
			//选择上传图片
			chooseAlbum(){
				let that = this
				uni.chooseImage({
				    count: 3, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    //sourceType: ['album'], //从相册选择
				    success: function (res) {
						if(that.imgList.length<3){
							that.imgList = that.imgList.concat(res.tempFilePaths) 
						}else{
							uni.showToast({
							    title: '最多上传三张图片',
							    duration: 1000
							});
						}
						
				    },
					fail: () => {
				    	console.log('选择失败')
				    }
				});
			},
			//过滤对象
			filter(data){
				return Object.values(data)
			}
		}
	}
</script>

<style lang="scss" scoped>
.content{
	text-align: left;
	background: #eeeeee;
	.text-area{
		padding: 10px;
		font-size: 14px;
		.together{
			background: white;
			display: inline-block;
			border-radius: 5px;
			position: relative;
			.together-title{
				color: #007AFF;
				padding: 6px;
			}
			.together-choose{
				position: absolute;
				background: white;
				z-index: 10;
				cover-view{
					border-bottom: 1px solid #eee;
					padding: 6px;
				}
			}
		}
		.together-content{
			background: white;
			border-radius: 5px;
			margin-top: 10px;
			textarea{
				padding: 6px;
				height: 50px;
			}
			.picture{
				padding: 10px;
				.imgList{
					display: inline-block;
					margin-right: 5px;
					image{
						width: 50px;
						height: 50px;
					}
				}
				.addpicture{
					width: 50px;
					height: 50px;
					border: 1px solid #1ccfc9;		
					display: inline-block;
				}
			}
			.camera{
				background: #e2fdff;
				padding: 10px 0px;
				image{
					width: 25px;
					height: 25px;
					margin-left: 20px;
				}
			}
		}
		.type{
			background: white;
			padding: 10px;
			font-size: 14px;
			color: #333;
			border-bottom: 1px solid #eee;
		}
		.frequency{
			background: white;
			border-bottom: 1px solid #eee;
			font-size: 14px;
			.active{
				background: #00e2e4;
				color: white;
			}
			.frequency1,.frequency2{
				display: inline-block;
				text-align: center;
				padding: 10px 5px;
				box-sizing: border-box;
				width: 50%;
				vertical-align: top;
			}
			.frequency1{
				border-right: 1px solid #eee;
				.uni-input{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.detail{
		position: fixed;
		background: rgba(0,0,0,.5);
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 100;
		
		.detail-content{
			padding: 20rpx;
			background: #eee;
			width: 90%;
			height: 400rpx;
			margin: 0 auto;
			margin-top: 50%;
			.detail-title{
				text-align: center;
				color: #666;			
			}
			scroll-view{
				height: 200rpx;
				background: white;
				width: 90%;
				margin: 30rpx auto;
				padding: 20rpx;
				box-sizing: border-box;
				.scroll-title{
					text-align: center;
					color: #666;
					font-size: 26rpx;
				}
			}
			.detail-know{
				background: #00e2e4;
				width: 85%;
				height: 80rpx;
				line-height: 80rpx;
				margin: 0 auto;
				border-radius: 80rpx;
				text-align: center;
				color: white;
			}
		}
	}
	.next{
		position: fixed;
		bottom: 20px;
		left: 20px;
		width: 90%;
		view{
			width: 95%;
			height: 50px;
			text-align: center;
			color: white;
			font-size: 18px;
			background: #00e2e4;
			margin: 0 auto;
			line-height: 50px;
			border-radius: 50px;
		}
	}
	.chooseTime{
		background: white;
		padding: 10px 20px;
		border-radius: 0 0 5px 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		view{
			border-left: 1px solid #00e2e4;
			padding-right: 20rpx;
			padding-left: 30rpx;
			font-size: 22rpx;
			text{
				display: block;
			}
		}
	}
}
</style>
