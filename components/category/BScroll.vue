<template>
  <div>
    <div class="header">
      <van-nav-bar @click-left="$router.go(-1)">
        <template #title>
          分类 
        </template>
        <template #left>
          <van-icon name="arrow-left" size="20"   />
        </template>
        <template #right>
          <van-icon name="search" size="20" @click="$router.push('/search')" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="left" ref="left">
        <ul>
          <li
            v-for="(item,index) in left"
            :key="index"
            :class="{current:index == currentId}"
            @click="selectItem(index,$event)"
          >
          <span>{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="right" ref="right">
        <div class="right_box">
          <div class="right-items-hook clearfix" v-for="(item,index) in right" :key="index">
              <van-row  >
              <h3 class="title"> {{ item.name }}</h3>
              <van-col span="8" v-for="(imgitem,contentindex) in item.content" :key="contentindex+index" @click="$router.push({path:'/detail',query:{id:imgitem.id}})">
                  <van-image
                    width="100%"
                    fit="cover"
                    :src="imgitem.img"
                  />
                  <p class="name">{{imgitem.name}}</p>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      listHeight: [],
      scrollY: 0
    };
  },
  methods: {
    //初始化scroll
    _initScroll() {
      this.lefts = new BScroll(this.$refs.left, {
        click: true, // 拥有触发事件
        probeType: 3
      });
      this.rights = new BScroll(this.$refs.right, {
        click:true,
        probeType: 3
      });
      this.rights.on("scroll", this.scrollfunc);
    },
    _getHeight() {
      let items = this.$refs.right.getElementsByClassName("right-items-hook");
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectItem(index,event) {
      if (!event._constructed) {
        return ;
      }else {
        let rightItems = this.$refs.right.getElementsByClassName("right-items-hook");
        
        let el = rightItems[index];
        this.rights.scrollToElement(el);
      }
    },
    scrollfunc(pos) {
      this.scrollY = Math.abs(Math.round(pos.y));
    }
  },
  props: ["left","right"],
  computed: {
    currentId() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i];
        let height2 = this.listHeight[i + 1];

        // 最后一个没有  那就是最后一个了,

        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          let leftItems = this.$refs.left.getElementsByTagName("li");
          let elLI = leftItems[i];
          this.lefts.scrollToElement(elLI);
          return i;
        }
      }
      return 0;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
      this._getHeight();
    });
  },
  beforeDestroy() {
    this.scrollfunc = null;
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  .van-icon-arrow-left,
  .van-icon {
    color: #434343;
    font-size: 28px;
  }
}
.container {
  display: flex;
  position: absolute;
  top: 50px;
  bottom: 0;
  width: 100%;
  background-color: #ccc;
  overflow: hidden;
  .left {
    flex: 0 0 80px;
    text-align: center;
    background-color: #f0f0f0;
    li {
      height: 70px;
      line-height: 70px;
      &.current {
        background-color: #fff;
        border-left: 3px solid rgb(165, 41, 61);
        box-sizing: border-box;
      }
    }
  }
  .right {
    background-color: #fff;
    width: 100%;
    font-size: 12px;
    .title{
      padding: 10px;
      font-size: 12px;
    }
    .van-col--8{
      height: 130px;
      transform: scale(.8);
    }
    .name{
      padding: 10px 0;
      text-align: center;
      margin: 0;
    }
  }
}
</style>