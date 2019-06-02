import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import welcome from '@/components/welcome'
import Test01 from '@/components/comp/Test01'
import compadd from '@/components/comp/compadd'
import compedit from '@/components/comp/compedit'
import devtypelist from '@/components/devtype/devtypelist'
import devtypeadd from '@/components/devtype/devtypeadd'
import devtypeedit from '@/components/devtype/devtypeedit'

import devicelist from '@/components/device/devicelist'
import deviceadd from '@/components/device/deviceadd'
import deviceedit from '@/components/device/deviceedit'
import s from '@/components/s'
import processlist from '@/components/process/processlist'
import processadd from '@/components/process/processadd'
import processedit from '@/components/process/processedit'

import userlist from '@/components/user/userlist'
import useradd from '@/components/user/useradd'
import useredit from '@/components/user/useredit'
Vue.use(Router)
import parent from '@/components/zj/parent'
export default new Router({
  routes: [
		 {
		  path: '/',
		  name: 'index',
		  component: index,
			children:[
				{path: '/',name: 'welcome',component: welcome,},
				{path: 'Test01',name: 'Test01',component: Test01,},
				{path: 'userlist',name: 'userlist',component: userlist,},
				{path: 'useradd',name: 'useradd',component: useradd,},
				{path: 'useredit',name: 'useredit',component: useredit,},
				{path: 'compadd',name: 'compadd',component: compadd,},
				{path: 'compedit',name: 'compedit',component: compedit,},
				{path: 'devtypelist',name: 'devtypelist',component: devtypelist,},
				{path: 'devtypeadd',name: 'devtypeadd',component: devtypeadd,},
				{path: 'devtypeedit',name: 'devtypeedit',component: devtypeedit,},
				{path: 'devicelist',name: 'devicelist',component: devicelist,},
				{path: 'deviceadd',name: 'deviceadd',component: deviceadd,},
				{path: 'deviceedit',name: 'deviceedit',component: deviceedit,},
				{path: 'processlist',name: 'processlist',component: processlist,},
				{path: 'processadd',name: 'processadd',component: processadd,},
				{path: 'processedit',name: 'processedit',component: processedit,},
				{path: 's',name: 's',component: s,},
			]
		},
		{path: '/parent',name: 'parent',component: parent,},
  ]
})
