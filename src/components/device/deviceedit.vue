<!-- html部分 -->
<template>
	<div id="app">
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='devname' placeholder='请输入设备名称'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='typeid' placeholder='请输入设备类别'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='devdate' placeholder='请输入投入时间'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='devuser' placeholder='请输入责任人'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 
		  <el-select v-model="compid" style='width:45%' placeholder='请输入所属企业'>
			  <el-option v-for="(obj,index) in baseCompany"  :value="obj.compid" :key="obj.compname">{{obj.compname}}</el-option>
		  </el-select>
		  
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='save()'>保存</el-button> <el-button @click='cancel()'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				devname:"",
				typeid:'',
				devdate:'',
				devuser:"",
				compid:"",
				devid:"",
				baseCompany:[],
			};
		},
		methods:{
			save(){
				var url = this.baseUrl+"/baseDevice/update"
					var data = {devname:this.devname,typeid:this.typeid,devdate:this.devdate,
					devuser:this.devuser,compid:this.compid,devid:this.devid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.$message("修改成功");
					this.$router.push({path:'/devicelist'});
					})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.baseCompany=res.data;
			});
			var obj=this.$route.params.row;
			this.devid=obj.devid;
			this.typeid=obj.typeid;
			this.devdate=obj.devdate;
			this.devuser=obj.devuser;
			this.compid=obj.compid;
			this.devname=obj.devname;
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
