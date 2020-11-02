<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template slot="title">{{ subItem.title }}</template>
                <!-- <el-menu-item
                    v-for="(threeItem,i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index"
                >
                3{{ threeItem.title }}
                </el-menu-item> -->
                <template v-for="threeItem in subItem.subs">
                  <el-submenu
                    v-if="threeItem.subs"
                    :index="threeItem.index"
                    :key="threeItem.index"
                  >
                    <template slot="title">{{ threeItem.title }}</template>
                    <el-menu-item
                      v-for="(fourItem,i) in threeItem.subs"
                      :key="i"
                      :index="fourItem.index"
                    >
                      {{ fourItem.title }}
                    </el-menu-item>
                  </el-submenu>
                  <el-menu-item
                    v-else
                    :index="threeItem.index"
                    :key="threeItem.index"
                  >3{{ threeItem.title }}
                  </el-menu-item>
                </template>
              </el-submenu>
              <el-menu-item
                v-else
                :index="subItem.index"
                :key="subItem.index"
              >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
    import bus from '../../assets/js/bus.js';

    export default {
        data() {
            return {
                collapse: false,
                items: [
                    // {
                    //     icon: 'el-icon-s-home',
                    //     index: 'dashboard',
                    //     title: '会员中心'
                    // },
                    {
                        icon: 'el-icon-menu',
                        index: 'MemberCentre',
                        title: '会员中心',
                        subs: [
                            {
                                index: 'MemberCentre',
                                title: '个人'
                            },
                            {
                                index: 'Society',
                                title: '协会'
                            },
                            {
                                index: 'Sponsor',
                                title: '赞助商'
                            },
                            {
                                index: 'otherteam',
                                title: '其他组织'
                            },
                            {
                                index: 'Evaluation',
                                title: '评估单位'
                            },
                            {
                                index: 'Site',
                                title: '场地'
                            },
                            {
                                index: 'Industry',
                                title: '行业主管部门'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-document-copy',
                        index: 'table',
                        title: '数据运营中心'
                    },
                    {
                        icon: 'el-icon-notebook-2',
                        index: '3',
                        title: '平台管理中心',
                        subs: [
                            {
                                index: 'form',
                                title: '事项办理'
                            },
                            {
                                index: '3-2',
                                title: '配置管理',
                                subs: [
                                    {
                                        index: 'dictionary',
                                        title: '字典配置'
                                    },
                                    {
                                        index: 'markdown',
                                        title: 'markdown编辑器',
                                        subs: [
                                            {
                                                index: 'zd',
                                                title: '配置1'
                                            },
                                            {
                                                index: 'markdown1',
                                                title: '编辑器'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                index: 'upload',
                                title: '平台网站'
                            },
                            {
                                index: 'upload2',
                                title: '高级管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-pie-chart',
                        index: 'icon',
                        title: '通知中心',
                        subs: [
                            {
                                index: 'drag',
                                title: '平台消息'
                            },
                            {
                                index: 'dialog',
                                title: '短信通知'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-pie-chart',
                        index: 'charts',
                        title: '前端发布中心'
                    },
                    {
                        icon: 'el-icon-pie-chart',
                        index: '6',
                        title: '开放技术中心',
                        subs: [
                            {
                                index: 'drag',
                                title: '技术台账'
                            },
                            {
                                index: 'dialog',
                                title: '实时动态'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-pie-chart',
                        index: '7',
                        title: '资金管理中心',
                        subs: [
                            {
                                index: 'permission',
                                title: '合同管理'
                            },
                            {
                                index: '404',
                                title: '费用台账'
                            }
                        ]
                    },

                ]
            };
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
                console.log(msg)
                bus.$emit('collapse-content', msg);
            });
        }
    };
</script>

<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
  }

  .sidebar::-webkit-scrollbar {
    width: 0;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }

  .sidebar > ul {
    height: 100%;
  }
</style>
