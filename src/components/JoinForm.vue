<template>
  <div>

    <!-- 表单组件 -->
    <van-cell-group>
      <van-field
        label="姓名"
        placeholder="请输入姓名"
      />
      <van-field
        label="电话"
        placeholder="请输入电话/手机号"
      />
      <van-field
        label="地区"
        placeholder="请选择省 / 市 / 区"
      />
      <van-field
        label="地址"
        placeholder="街道、楼层等信息"
      />
      <van-field
        label="邮政编码"
        placeholder="邮政编码"
      />
      
    </van-cell-group>

    

    <!-- 签名组件 -->
    <VueSignaturePad
      width="80%"
      height="150px"
      ref="signaturePad"
      :customStyle="signatureStyle"
    />

    <!-- 清空 保存 删除 -->
    <div class="tab">
      <van-button class="tab-item" color="#7232dd" size="small" @click="clearImg()">清空</van-button>
      <div style="width:10px;"></div>
      <van-button class="tab-item" color="#7232dd" size="small" @click="undoImg()">撤销</van-button>
      <div style="width:10px;"></div>
      <van-button class="tab-item" color="#7232dd" size="small" @click="saveImg()">保存</van-button>
      <div style="width:10px;"></div>
      <van-button class="tab-item" color="#7232dd" size="small" @click="uploadImg()">上传</van-button>
    </div>
    


    <van-button 
      class="enterButton" 
      color="#FF4444"
      @click="submitResult"
      >
    确定
    </van-button>
    
    <br/>
    <br/>
    <br/>
    <br/>

  </div>
</template>

<script>
export default {
  name: 'JoinForm',
  props: {
    msg: String
  },
  /** 
   * 数据
  */
  data() {
    return {
      message: 'Hello',
      signatureStyle : {
        border: 'gray 1px solid',
         margin : '20px auto'
      },
      imgUrl : '',
    }
  },
  /**
   *  计算属性
   *  如果属性没有发生变化，直接拿缓存的值，不走过程（第一次走过程）
  */
  computed: {
    isTitle(){
      return "加入我们";
    }
  },
  /** 
   * 侦听属性
   * 如果属性发生变化就触发对应的方法
  */
  watch: {
    isTitle : function(newValue, oldValue){
        console.log(newValue+ "-" + oldValue )
    }
  },  
  /** 
   * 方法
  */
  methods: {
    submitResult(){
      this.$toast({
        message : "成功",
        icon : 'success'
      })

      // this.$refs.signaturePad.fromDataURL("http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg")

      
    },
    /**
     *  清空图片
     */
    clearImg(){
      this.$refs.signaturePad.clearSignature()
    },
    /**
     *  撤销图片
     */
    undoImg(){
      this.$refs.signaturePad.undoSignature();
    },
    /**
     *  保存图片
     */
    saveImg(){
      //得到signaturePad画板数据
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      //判断是否涂画
      if(!isEmpty){
        //把画板 涂画的内容保存到 本地
        this.downloadFile(this.convertBase64UrlToBlob(data) , 'pic');
      }else{
        //提示 请在画板涂画
        this.$toast({
          message : "请在画板涂画",
          icon : 'fail'
        })
      }           
    },
    /**
     *  上传图片
     */
    uploadImg(){
      //得到signaturePad画板数据
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      //判断是否涂画
      if(!isEmpty){
        
        

      }else{
        //提示 请在画板涂画
        this.$toast({
          message : "请在画板涂画",
          icon : 'fail'
        })
      }       
    },
    /**
     * 将以base64的图片url数据转换为Blob
     */
    convertBase64UrlToBlob(urlData){

       //去掉url的头，并转换为byte
      let bytes = window.atob(urlData.split(',')[1]);       
        
      //处理异常,将ascii码小于0的转换为大于0
      let ab = new ArrayBuffer(bytes.length);
      let ia = new Uint8Array(ab);
      for (let i = 0; i < bytes.length; i++) {
          ia[i] = bytes.charCodeAt(i);
      }

      return new Blob( [ab] , {type : 'image/png'});
    },
   
    /**
     * 下载文件
     * 参数 :
     *  Blob 对象
     *  fileName 文件名
     */
    downloadFile(blob , fileName){

      //Blob 对象的URL
      let url = window.URL.createObjectURL(blob)

      //创建a标签
      let link = document.createElement('a');
      //设置样式
      link.style.display = 'none';
      //设置url
      link.href = url;
      //设置属性
      link.setAttribute('download', fileName + '.png');
      //添加到body标签
      document.body.appendChild(link);
      //a标签点击
      link.click();
    },

  },
}
</script>

<style scoped>
   .enterButton{
    width: 90%;
    margin-top: 10px;
  }

   .tab{
        display: flex;
        width: 80%;
        margin: 0 auto;
    }
    .tab-item{
        flex: 1;
        text-align: center;
        width: 150px;
    }

</style>