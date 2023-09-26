<script setup>
import { reactive } from 'vue';
import request from './utils/request'

const state = reactive({
  // A模型对话
	talkA:[
    {
      type:1,
      content:'（网站或只读光盘上的）内容，目录;   内容;   含量;   (书、讲话、节目等的)主题，主要内容;   (书的)目录，目次;   所含之物;   所容纳之物;  '
    },
    {
      type:2,
      content:'（网站或只读光盘上的）内容，目录;   内容;   含量;   (书、讲话、节目等的)主题，主要内容;   (书的)目录，目次;   所含之物;   所容纳之物;  '
    },{
      type:1,
      content:'（网站或只读光盘上的）内容，目录;   内容;   含量;   (书、讲话、节目等的)主题，主要内容;   (书的)目录，目次;   所含之物;   所容纳之物;  '
    },
    {
      type:2,
      content:'（网站或只读光盘上的）内容，目录;   内容;   含量;   (书、讲话、节目等的)主题，主要内容;   (书的)目录，目次;   所含之物;   所容纳之物;  '
    },{
      type:1,
      content:'（网站或只读光盘上的）内容，目录;   内容;   含量;   (书、讲话、节目等的)主题，主要内容;   (书的)目录，目次;   所含之物;   所容纳之物;  '
    },
    {
      type:2,
      content:'（网站或只读光盘上的）内容，目录;   内容;   含量;   (书、讲话、节目等的)主题，主要内容;   (书的)目录，目次;   所含之物;   所容纳之物;  '
    },{
      type:1,
      content:'（网站或只读光盘上的）内容，目录;   内容;   含量;   (书、讲话、节目等的)主题，主要内容;   (书的)目录，目次;   所含之物;   所容纳之物;  '
    },
    {
      type:2,
      content:'（网站或只读光盘上的）内容，目录;   内容;   含量;   (书、讲话、节目等的)主题，主要内容;   (书的)目录，目次;   所含之物;   所容纳之物;  '
    },
  ],
  // B模型对话
  talkB:[],
});

// 答案打分方法
const rateAnswers = (val) => {
  request({
				url: '',
				method: 'post',
				data:{},
			});
}

// 下一个问题
const nextQuery = () => {
  request({
				url: '',
				method: 'post',
				data:{},
			});
}

//问题请求
const goQuery = (val) => {
  request({
				url: '',
				method: 'post',
				data:{},
			});
}

</script>

<template>
  <div>
    <div id="content">
      <el-card class="box-card" shadow="always">
        <template #header>
          <div class="card-header">
            <span>模型A</span>
          </div>
        </template>
        <div v-for="(item, index) in state.talkA" :key="index" class="text item">
          <div :class="item.type == 1?'right':'left'">
            {{item}}
          </div>
        </div>
      </el-card>

      <el-card class="box-card" shadow="always">
        <template #header>
          <div class="card-header">
            <span>模型B</span>
          </div>
        </template>
        <div v-for="(item, index) in state.talkB" :key="index" class="text item">
          <div :class="item.type == 1?'right':'left'">
            {{item}}
          </div>
        </div>
      </el-card>
    </div>
    <div id="btn">
      <el-button @click="rateAnswers(1)">👌都可以</el-button>
      <el-button @click="rateAnswers(2)">👈【左边】更好</el-button>
      <el-button @click="rateAnswers(3)">👉【右边】更好</el-button>
      <el-button @click="rateAnswers(4)">👎都很差</el-button>
    </div>
    <div id="nexnbtn">
      <el-button @click="nextQuery()">下一个</el-button>
    </div>
  </div>
</template>

<style scoped>
#content{
  display: flex;
  align-items: center;
  padding: 10px;
  .box-card{
    width: 50%;
    margin: 0px 20px;
    height: 600px;
    overflow-y: scroll;
    background: #212936;
    line-height: 24px;
    color: #eee;
  }
  .right{
    border: 1px solid #0055bb;
    border-radius: 20px 20px 0px 20px;
    max-width: 500px;
    margin: 20px 0px 20px 100px;
    padding: 10px 20px;
    background: #394050;
    color: aliceblue;
    font-size: small;
    line-height: 26px;
  }
  .left{
    border: 1px solid #bfbfbf;
    border-radius: 20px 20px 20px 0px;
    max-width: 500px;
    margin: 20px 100px 20px 0px;
    padding: 10px 20px;
    background: #121826;
    color: aliceblue;
    font-size: small;
  }
}
#btn{
  display: flex;
  align-items: center;
  padding: 10px;
  .el-button{
    margin: 0px 10px;
    width: 300px
  }
}
#nexnbtn{
  display: flex;
  align-items: center;
  .el-button{
    margin:0 auto;
    width: calc(100% - 40px);
  }
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
