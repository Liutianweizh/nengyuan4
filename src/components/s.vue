<!-- html部分 -->
<template>
	<div id="app">
		<div class="grid-content bg-purple-main">
		<el-carousel height="330px" width='100%' interval="3000">
-		  <el-carousel-item v-for="item in 1" :key="item">
			<h3></h3>
		  </el-carousel-item>
		  <el-carousel-item v-for="item in 1" :key="item">
		  <h3></h3>	
		  </el-carousel-item>
		</el-carousel>
		</div>
		<div class="grid-content bg-purple-light">
			<div style="border-bottom: 1px solid #42B983;width:100%;">
				<div style="border-bottom: 4px black solid;width:70%;cursor: pointer;">
					<h1>热点新闻</h1>
				</div>
			</div>
			<div>
				<ul style="margin-left: 20px;text-align: left;">
					<li v-for="(obj,index) in arr"><a href="">{{obj}}</a></li>
				</ul>
			</div>	
		</div>
		<div class="grid-content bg-purple-main-b">
			<div id="first" style="width: 40%;float: left;">
				<div style="border-bottom: 1px solid #42B983;width:100%;">
					<div style="width:70%;cursor: pointer;text-align: left;">
						<h1>活动</h1>
					</div>
				</div>
				<div>
					<ul style="margin-left: 20px;text-align: left;">
						<li v-for="(obj,index) in arr"><a href="">{{obj}}</a></li>
					</ul>
				</div>	
			</div>
			<div id="second" style="width: 40%;float: right;">
				<div style="border-bottom: 1px solid #42B983;width:100%;">
					<div style="width:70%;cursor: pointer;text-align: left;">
						<h1>公告</h1>
					</div>
				</div>
				<div>
					<ul style="margin-left: 20px;text-align: left;">
						<li v-for="(obj,index) in arr"><a href="">{{obj}}</a></li>
					</ul>
				</div>	
			</div>
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				arr:["鸣子","宁子","天子","爱子","兜子"]	
			};
		},
		methods:{
		}
	}
</script>
<!-- css部分 -->
<style>
	*{
		margin: 0;
		padding: 0;
	}
	ul li a{
		text-decoration: none;
	}
	a:hover{
		text-decoration: underline;
	}
.el-row {
		margin-bottom: 20px;
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-main {
		background: white;
		margin-left: 10%;
		width: 57%;
		display: inline-block;
		height: 330px;
		margin-top: 0px;
	
	}
	
	.bg-purple-light {
		background: white;
		width: 21%;
		height: 600px;
		float: right;
		margin-right: 10%;
	}
	
	.bg-purple-main-b {
		background: white;
		margin-left: 10%;
		width: 57%;
		height: 300px;
		display: inline-block;
		margin-top: -50px;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	

</style>
