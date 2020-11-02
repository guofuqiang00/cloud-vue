<template>
	<div class="container">
    <div class="left_side">
      <el-row class="tac">
         <el-col :span="30">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu v-for="(item,index) in List" :index="(index+1)+''">
              <template slot="title">
                <i class="el-icon-s-platform" v-if="index==0"></i>
                <i class="el-icon-s-tools" v-else-if="index==1"></i>
                <i class="el-icon-user-solid" v-else-if="index==2"></i>
                <i class="el-icon-message-solid" v-else-if="index==3"></i>
                <i class="el-icon-s-platform" v-else></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="'1-'+(index+1)+''" v-for="(item2,index) in item.cont">{{item2}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>

    <div class="right_side">
      <MenberCentre></MenberCentre>
    </div>
	</div>
</template>
<script>
	import MenberCentre from '../../../components/admin/MemberCentre.vue'
	export default {
		name: 'Home',
		components: {
			MenberCentre,
		},
		data() {
			return {
        collapseBtnClick: false,
        isCollapse: true,
				List:[
					{
						title:'服务大厅',
						cont:[
							'在场服务','历史服务'
						]
					},
					{
						title:'系统设置',
						cont:[
							'权限管理','角色管理'
						]
					},
					{
						title:'人员数据',
						cont:[
							'人员数量','人员位置'
						]
					},
					{
						title:'健康报警',
						cont:[
							'心率报警','血压报警'
						]
					}
				],
			}
		},
		methods: {
			handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		    },
		    handleClose(key, keyPath) {
		        console.log(key, keyPath);
		    },


		},
		created() {

		},
		mounted() {
			let that = this

		},
		beforeDestroy() {

		},
	}
</script>
<style lang="scss" scoped>
  .left_side{
    // width: 20%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
  }
  .right_side{
    float: right;
    // width: 80%;
    height: auto;
    // display: none;
  }
</style>
