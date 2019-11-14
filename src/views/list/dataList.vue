<template>
  
  <div class="isBody">

     <!-- 导航栏 -->
    <van-nav-bar
      :title="isTitle"
      :left-text="isBack ? '后退' : ''"
      :left-arrow="isBack"
      @click-left="onClickBack"
    />

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >

        <SingleData
          v-for="item in list"
          :key="item.id"
          :progress = "item.progress"
          :address = "item.address"
          :time = "item.time"
        />

      </van-list>

      <div style="height:200px; width: 100%;"></div>

    </van-pull-refresh>

    <van-button 
          type="default"
          class="enterButton" 
          color="#1989fa"
          @click="jumpAddPage"
          >
        新增申请
    </van-button>

  </div>
    
</template>

<script >

  import SingleData  from '@/components/page/SingleData'

  export default {
    name: 'dataList',
    components : {
      SingleData
    },
    /** 
     * 数据
    */
    data() {
      return {
        message: 'dataList',
        form : {

        },
        list: [],
        loading: false,
        finished: false,
        isLoading: false,
      }
    },
    /**
     *  计算属性
     *  如果属性没有发生变化，直接拿缓存的值，不走过程（第一次走过程）
    */
    computed: {
      isTitle(){
        return this.$route.query.title;
      },
      isBack(){
        return this.$route.query.showBack;
      }
    },
    /** 
     * 侦听属性
     * 如果属性发生变化就触发对应的方法
    */
    watch: {
      
    },  
    /** 
     * 方法
    */
    methods: {
      /**
       * 后退
       */
      onClickBack(){
        this.$router.back();
      },
      onLoad() {
      // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push({
              id : i+new Date(),
              progress: '初审中',
              address: '九江市永修县加油站门口',
              time: '2019-01-01至2019-09-0' + i,
            });
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      },
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 500);
      },
      /**
       * 添加页面
       */
      jumpAddPage(){
        //跳转页面
        this.$router.push({name : 'add' , query : {title : '申请材料' , showBack : true}})
      },
    },
    /**
     * 创建挂载之前
     */
    beforeMount(){
      
    },
    /**
     * 挂载完成
     */
    mounted(){
     
    }
  }

</script>

<style lang="less">

  .enterButton{
    width: 90%;
    margin-bottom: 20%;
    margin-left: -45%;
    position: fixed;
    bottom: 0;
  }

  .isBody{
    background-color: rgb(242, 242, 242)
  }

</style>
