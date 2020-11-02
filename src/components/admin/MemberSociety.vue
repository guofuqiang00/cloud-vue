<template>
  <div class="result-container">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>
                <i class="el-icon-menu"></i> 协会
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
    <el-header class="" style="padding-top: 10px;">
      <el-button type="primary" class="MC_btn" @click="handleAdd()">新增会员</el-button>
      <el-button type="primary" class="MC_btn">删除信息</el-button>
      <el-button type="primary" class="MC_btn" @click="pay()">统一催缴</el-button>
      <div class="right-border">
        <div class="seach_input">
          <el-input v-model="test" placeholder="请输入内容" class="MC_seach"></el-input>
        </div>
        <el-button type="primary" class="MC_btn" @click="searchBtn()">高级搜索</el-button>
        <el-button type="primary" class="MC_btn">导入记录</el-button>
        <el-button type="primary" class="MC_btn">导出记录</el-button>
        <el-button type="primary" class="MC_btn">打印</el-button>
      </div>
    </el-header>
    <!-- prop: 'date', order: 'ascending' -->
    <el-table :data="producList" border
    :default-sort = "{prop: 'date', order: 'descending'}">

      <el-table-column type="selection" width="55" align="center" ></el-table-column>
      <template v-for="items in tableDataType">
        <!-- v-if="items.ifShow==true" -->
        <el-table-column
           :label="items.nameLable" :prop="items.nameProp" align="center" >
        </el-table-column>
      </template>
      <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
              <el-button
                  type="text"
                  icon="el-icon-view"
                  @click="handleEdit(scope.$index, scope.row)"
              >查看</el-button>
              <el-button
                  type="text"
                  icon="el-icon-edit"
                  @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
                  type="text"
                  icon="el-icon-delete"
                  class="red"
                  @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
          </template>
      </el-table-column>

    </el-table>
    <div class="pageBox">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="10"
        layout="prev, pager, next,total"
        :total="total"
        prev-text="上一页"
        next-text="下一页">
      </el-pagination>
    </div>

    <!-- 编辑弹出框 -->
    <!-- 编辑弹出框 -->

    <SrarchDialog :stauts="searchVisible"></SrarchDialog>

    <!-- 统一缴费 -->
    <el-dialog title="统一缴费" :visible.sync="PayVisible" width="30%" class="paydialog">
      <el-button type="primary" class="MC_btn" @click="PayType('platform')">平台消息</el-button>
      <el-button type="primary" class="MC_btn" @click="PayType('sms')">短信消息</el-button>
    </el-dialog>
    </div>
  </div>
</template>

<script>

  export default {
    components: {
      SrarchDialog
    },
    data() {
      return {
        PayVisible:false,
        //高级搜索
        searchVisible:false,
        typeTitle:'编辑',

        total:null,
        test:'',
        producList: [{
          id:1,
          companyname:'广州市武术协会',
          level: '广东省>广州市',
          projecttype: '武术',
          entertime: '2016-7-04',
          quantity: '11',
          unitphone: '150127833454',
          principal:'陈先生',
          principalphone:'150127833454',
          endtime:'2016-7-04',
          grade:'LV2',
        }, {
          id:2,
          companyname:'广州市武术协会',
          level: '广东省',
          projecttype: '武术',
          entertime: '2016-7-05',
          quantity: '222',
          unitphone: '150127833454',
          principal:'陈先生',
          principalphone:'150127833454',
          endtime:'2016-7-04',
          grade:'LV2',
        }, {
          id:3,
          companyname:'广州市武术协会',
          level: '广东省>广州市',
          projecttype: '武术',
          entertime: '2016-6-04',
          quantity: '333',
          unitphone: '150127833454',
          principal:'陈先生',
          principalphone:'150127833454',
          endtime:'2016-7-04',
          grade:'LV2',
        }, {
          id:4,
          companyname:'广州市武术协会',
          level: '广东省',
          projecttype: '武术',
          entertime: '2016-6-04',
          quantity: '444',
          unitphone: '150127833454',
          principal:'陈先生',
          principalphone:'150127833454',
          endtime:'2016-7-04',
          grade:'LV2',
        }],
        tableDataType: [{
          nameLable: '序号',
          nameProp: 'id'
        }, {
          nameLable: '单位名称',
          nameProp: 'companyname'
        },{
          nameLable: '所处层级',
          nameProp: 'level'
        },{
          nameLable: '项目类型',
          nameProp: 'projecttype'
        }, {
          nameLable: '进入平台时间',
          nameProp: 'entertime'
        },{
          nameLable: '单位成员数量',
          nameProp: 'quantity'
        },{
          nameLable: '单位联系方式',
          nameProp: 'unitphone'
        }, {
          nameLable: '单位负责人',
          nameProp: 'principal'
        },{
          nameLable: '负责人手机',
          nameProp: 'principalphone'
        },{
          nameLable: '会员权益截止日期',
          nameProp: 'endtime'
        },{
          nameLable: '会员等级',
          nameProp: 'grade'
        }],
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
        number:''
      }
    },
    created() {
      let that = this;
      // that.getHeadData();
      // that.getListData(1);
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
  .pageBox{
    width: 100%;
    height: auto;
    clear: both;
    margin: auto;
    margin-top: 15px;
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
