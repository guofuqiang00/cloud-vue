<template>
  <div class="result-container">
<!--    <div class="crumbs">-->
<!--        <el-breadcrumb separator="/">-->
<!--            <el-breadcrumb-item>-->
<!--                <i class="el-icon-menu"></i> 会员中心-->
<!--            </el-breadcrumb-item>-->
<!--        </el-breadcrumb>-->
<!--    </div>-->
<!--    <div class="container">-->
<!--    <el-header class="" style="padding-top: 10px;">-->
<!--      <el-button type="primary" class="MC_btn" @click="handleAdd()">新增会员</el-button>-->
<!--      <el-button type="primary" class="MC_btn">批量删除</el-button>-->
<!--      <el-button type="primary" class="MC_btn" @click="pay()">统一催缴</el-button>-->
<!--      <div class="right-border">-->
<!--        <div class="seach_input">-->
<!--          <el-input v-model="test" placeholder="请输入内容"-->
<!--          class="MC_seach" @keyup.enter.native="onSubmit"></el-input>-->
<!--        </div>-->
<!--        <el-button type="primary" class="MC_btn"  @click="searchBtn()">高级搜索</el-button>-->
<!--        <el-button type="primary" class="MC_btn">导入记录</el-button>-->
<!--        <el-button type="primary" class="MC_btn">导出记录</el-button>-->
<!--        <el-button type="primary" class="MC_btn">打印</el-button>-->
<!--      </div>-->
<!--    </el-header>-->
<!--    <el-table :data="producList" border ref="table"-->
<!--    row-key="id" @selection-change="changeFun">-->

<!--      <el-table-column type="selection" width="55"-->
<!--      align="center" :reserve-selection="true"></el-table-column>-->

<!--      <template v-for="items in tableDataType">-->
<!--        <el-table-column-->
<!--           :label="items.nameLable" :prop="items.nameProp" align="center" v-if="items.ifShow==true">-->
<!--        </el-table-column>-->
<!--      </template>-->
<!--      <el-table-column label="操作" width="200" align="center">-->
<!--          <template slot-scope="scope">-->
<!--            <el-button-->
<!--                type="text"-->
<!--                icon="el-icon-edit"-->
<!--                @click="handleEdit(scope.$index, scope.row)"-->
<!--            >查看</el-button>-->
<!--              <el-button-->
<!--                  type="text"-->
<!--                  icon="el-icon-edit"-->
<!--                  @click="handleEdit(scope.$index, scope.row)"-->
<!--              >编辑</el-button>-->
<!--              <el-button-->
<!--                  type="text"-->
<!--                  icon="el-icon-delete"-->
<!--                  class="red"-->
<!--                  @click="handleDelete(scope.$index, scope.row)"-->
<!--              >删除</el-button>-->
<!--          </template>-->
<!--      </el-table-column>-->
<!--    </el-table>-->
<!--    <div class="pageBox">-->
<!--      <el-pagination-->
<!--        background-->
<!--        @size-change="handleSizeChange"-->
<!--        @current-change="handleCurrentChange"-->
<!--        :current-page.sync="currentPage1"-->
<!--        :page-size="10"-->
<!--        layout="prev, pager, next,total"-->
<!--        :total="total"-->
<!--        prev-text="上一页"-->
<!--        next-text="下一页">-->
<!--      </el-pagination>-->
<!--    </div>-->

<!--    &lt;!&ndash; 高级搜索组件 &ndash;&gt;-->
<!--    <SrarchDialog :stauts="searchVisible"></SrarchDialog>-->

<!--    &lt;!&ndash; 统一缴费 &ndash;&gt;-->
<!--    <el-dialog title="统一缴费" :visible.sync="PayVisible" width="30%" class="paydialog">-->
<!--      <el-button type="primary" class="MC_btn" @click="PayType('platform')">平台消息</el-button>-->
<!--      <el-button type="primary" class="MC_btn" @click="PayType('sms')">短信消息</el-button>-->
<!--    </el-dialog>-->
<!--    </div>-->
  </div>
</template>

<script>

  export default {
    components: {

    },
    data() {
      return {
        PayVisible:false,
        typeTitle:'编辑',
        sexList:[{
          value: 0, label: '男'
        },{
          value: 1, label: '女'
        }],
        certificateList:[{
          value: '身份证', label: '身份证'
        },{
          value: '港澳通行证', label: '港澳通行证'
        }],
        total:null,
        test:'',
        tableDataType: [],
        producList: [],
        search: '',
        selectId: '',

        value: '',
        currentPage1: 1,

        editVisible: false,
        pageTotal: 0,
        form: '',
        idx: -1,
        id: -1,
        name:'',
        address:'',
        date:'',
        sex:'',
        certificate:'',
        phone:'',
        age:'',
        number:'',
        //高级搜索
        searchVisible:false,
        check:[

        ]
      }
    },
    created() {
      let that = this;
    },
  }
</script>
<style lang="scss" scoped>

  .MC_btn{
    padding: 10px 12px;
  }
  .header-title{
    text-align: center;
    line-height: 60px;
    font-size: 25px;
    padding: 0;
    border-top: 1px solid #EBEEF5;
    border-bottom: 1px solid #EBEEF5;
  }
  .right-border{
    float: right;
    .seach_input{
      float: left;
      margin-right: 15px;


    }
  }
  .red{
    color: red;
  }
  .left{
    display: inline-block;
    width: 45.83333%;
  }
  .pageBox{
    width: 100%;
    height: auto;
    clear: both;
    margin: auto;
    margin-top: 15px;
    text-align: center;
  }
  .paydialog .el-dialog__body{
    text-align: center;
  }
</style>
<style>

.el-input__inner{
  height: 36px!important;
  line-height: 36px!important;
}
.diy-le-form-item {
    margin-bottom: 12px;
}
 .paydialog .el-dialog__body{
    text-align: center;
  }
</style>
