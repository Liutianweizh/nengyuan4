<!-- html部分 -->
<template>
	<div  style="height: auto;" id="app">
		<el-menu :default-active="$store.state.defaultActive">
			<span v-for="obj in arr">
				<!-- 没有子菜单 -->
				<el-menu-item v-show="!obj.children" :index="obj.index" @click="fn(obj)">
					<span>{{obj.text}}</span>
				</el-menu-item>
				<!-- 有子菜单 -->
				<el-submenu v-show="obj.children" :index="obj.index">
					<template slot="title" >
						<span>{{obj.text}}</span>
					</template>
					<el-menu-item-group>
						<el-menu-item v-for="item in obj.children" :index="item.index" @click="fn(item)" :key='item.text'>
							<span>{{item.text}}</span>
						</el-menu-item> 
					</el-menu-item-group>
				</el-submenu>
			</span>
			
		</el-menu>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				arr:[{text:'首页',index:'101',url:"/"},
					 {text:'基本信息',index:'102',children:[
						  {text:'页面',index:'1026',url:"/s"},
						 {text:'企业信息',index:'1021',url:"/Test01"},
						 {text:'人员信息',index:'1022',url:"/userlist"},
						 {text:'设备类别',index:'1023',url:"/devtypelist"},
						 {text:'设备信息',index:'1024',url:"/devicelist"},
						 {text:'流程信息',index:'1025',url:"/processlist"}
					 ]},
					 {text:'生产作业',index:'103',children:[
					 	 {text:'报岗',index:'1031'},
					 	 {text:'流产控制',index:'1032'}
					 ]},
					 {text:'能耗信息',index:'104',children:[
					 	 {text:'电耗信息',index:'1041'},
					 	 {text:'水耗信息',index:'1042'},
					 	 {text:'油耗信息',index:'1043'}
					 ]},
					 {text:'作业信息',index:'105',children:[
					 	 {text:'作业量信息',index:'1051'},
					 	 {text:'作业时间信息',index:'1052'},
					 	 {text:'故障信息',index:'1053'}
					 ]},
					 {text:'能源监控',index:'106',children:[
					 	 {text:'正常值范围',index:'1061'},
					 	 {text:'实时监控',index:'1062'},
					 	 {text:'异常处理',index:'1063'}
					 ]},
					 {text:'设备维修成本',index:'107',children:[
					 	 {text:'维修登记',index:'1071'}
					 ]},
					 {text:'统计信息',index:'108',children:[
					 	 {text:'成本核算信息',index:'1081'},
					 	 {text:'设备运行时长',index:'1082'},
					 	 {text:'流程能耗对比',index:'1083'}
					 ]},
					 {text:'用能单元模型',index:'109',children:[
					 	 {text:'全年能效对比',index:'1091'},
					 	 {text:'能效模型(平均值+-20%)',index:'1092'},
					 	 {text:'同类设备能耗对比',index:'1093'}
					 ]},
					 {text:'能源产销模型',index:'1010',children:[
					 	 {text:'产销模型设置',index:'10101'},
					 	 {text:'产销模型展示',index:'10102'}
					 ]},
				]
			};
		},
		methods:{
			fn(obj){
				this.$router.push({path:obj.url});
				this.$store.commit("add",{ name: obj.text, type:"warning",url:obj.url,index:obj.index});
				
			}
		}
	}
</script>
<!-- css部分 -->
<style>
.el-menu{
	 background-color: #D3DCE6;
	 height:100%;
}
</style>
