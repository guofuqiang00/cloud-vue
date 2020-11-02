<template>
	<div class="app_container">
    <!-- 网站首页
    <section class="p-10">
        <el-select v-model="value" placeholder="请选择" filterable :filter-method="dataFilter">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </section> -->
<!--      <baiduMap></baiduMap>-->
{{value}}
	</div>
</template>
<script>
	export default {
		name: 'Home',
		components: {
      // baiduMap
		},
		data() {
			return {
        optionsCopy: [{
          value: '1',
          label: 'meat'
        }, {
          value: '2',
          label: 'drink'
        }, {
          value: '3',
          label: 'food'
        }, {
          value: '4',
          label: '龙须面'
        }, {
          value: '5',
          label: '北京烤鸭'
        }],
        options: [{
          value: '1',
          label: 'meat'
        }, {
          value: '2',
          label: 'drink'
        }, {
          value: '3',
          label: 'food'
        }, {
          value: '4',
          label: '龙须面'
        }, {
          value: '5',
          label: '北京烤鸭'
        }],
        value: '',



			}
		},

		methods: {
      // ac:async function() {
      //   let params = {
      //     auth_key:'1598630400-0-0-2d6b3a751394874bc2225f63e282b13d'
      //   }
      //   const res = await http.get('/prdnemo/9680ce9d740743f0017428da36ce4123.m3u8', params)
      //   // if(res.code == 200){
      //   //  this.value =
      //   // }
      // },
      dataFilter(val) {
        this.value = val;
        if (val) { //val存在
          this.options = this.optionsCopy.filter((item) => {
            if (!!~item.label.indexOf(val) || !!~item.label.toUpperCase().indexOf(val.toUpperCase())) {
              return true
            }
          })
        } else { //val为空时，还原数组
          this.options = this.optionsCopy;
        }
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

</style>
