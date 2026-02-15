<template>
    <div id="main_header">
      
      <div id="head_navigation">
        <div class="sub_navigation" @click="main_column_clock = 'main_column_main'">首页    </div>
        <div class="sub_navigation" @click="main_column_clock = 'main_column_intr'">组织概况</div>
        <div class="sub_navigation" @click="main_column_clock = 'main_column_show'">部门风采</div>
        <div class="sub_navigation" @click="main_column_clock = 'main_column_info'">信息公示</div>
        <div class="sub_navigation" @click="main_column_clock = 'main_column_cont'">联系我们</div>
      </div>
    </div>

    <div id="main_body">
      <div class="main_column">
        <component :is="componentsMap[main_column_clock] || componentsMap.default"></component>
      </div>

      <div id="side_column">
        <p>这是侧边栏，可以放置一些额外的信息或链接，比如最新通知、热门文章等。</p>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import NaviMain from './home/NaviMain.vue'
import NaviIntr from './home/NaviIntr.vue'
import NaviShow from './home/NaviShow.vue'
import NaviInfo from './home/NaviInfo.vue'
import NaviCont from './home/NaviCont.vue'

// 绑定当前选中的栏目（使用 ref）
const main_column_clock = ref('main_column_main')

// 组件映射
const componentsMap = {
  main_column_main: NaviMain,
  main_column_intr: NaviIntr,
  main_column_show: NaviShow,
  main_column_info: NaviInfo,
  main_column_cont: NaviCont,
  default: NaviMain
}
</script>


<style scoped>


#main_header {
  text-align: center;
  background-color: #42b983;
  color: white;
  height: 12vh;
}
#main_body {
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: #f0f0f0;
  height: 90vh;
}

.main_column {
  flex: 3;
  padding: 20px;
  background-color: #e0e0e0;
  overflow: auto;
  height: 100%;
}

#side_column {
  flex: 1;
  padding: 20px;
  background-color: #d0d0d0;
  overflow: auto;
  height: 100%;
}



#head_navigation {
  display: flex;
  flex-direction: row;
  padding-left: 70px;
  background-color: #d41e79;
  height: 100%;
  align-items: center;
}

.sub_navigation {
  margin:  0 10px;
  padding: 10px;
  background-color: #d0d0d0;
  border-radius: 5px;
  height: 30%;
  cursor: pointer;
}

</style>
