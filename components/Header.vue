<template>
  <header class="headerContainer" @load="$fetch">
    <NuxtLogo/>
    <div v-for="post in posts.res" :key="post.title" class="headerLink">
      <div
        v-if="post.title != 'INDEX'"
        :key="post.title"
        class="title">
          <nuxt-link :to="`/${post.title}`">
            {{post.title}}
          </nuxt-link>
        <div v-if="post.subheaders.length != '0'" :key="post.title" class="triangle"></div>
        <div class="subtitleContainer">
          <div v-for="subheader in post.subheaders" :key="subheader.id" class="subtitle">
            <nuxt-link v-if="subheader.title != 'none'" :to="`/subPage/${subheader.title}`">
              {{subheader.title}}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    this.posts = await fetch(
      'http://localhost:3003/headerAll'
    ).then(res => res.json());
  },
}
</script>

<style>
  .headerContainer{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    width: 100%;
    background-color: #fff;
    transition: 1s;
    z-index: 2;
  }
  .headerLink{
    /* border: 1px solid black; */
    margin: 0 40px 0 0;
    display: flex;  
    align-items: center;
  }
  .title{
    /* border: 1px solid black; */
    font-weight: 500;
    display: flex;
    align-items: center;
    color: black;
    padding-top: 10px;
    transition: .4s;
    position: relative;
  }
  .title:hover{
    color: #eda905;
    border-top: 2px solid #eda905;
  }
  .triangle{
    border-style: solid;
    border-width: 10px 7px 0 7px;
    border-color: #000 transparent transparent transparent;
    margin: 0 0 0 5px;
    transition: .4s;
  }
  .title:hover .triangle{
    border-style: solid;
    border-width: 10px 7px 0 7px;
    border-color: #eda905 transparent transparent transparent;
  }
  .subtitleContainer{
    /* border: 1px solid black; */
    position: absolute;
    left: 0%;
    top: 105%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    padding-bottom: 10px;
  }
  .subtitle{
    /* border: 1px solid black; */
    white-space: nowrap;
    margin-bottom: 10px;
    margin-top: 15px;
    margin-left: 10px;
    width: 320px;
    color: rgba(0, 0, 0, .7);
    display: none;
  }
  .subtitle:hover{
    color: #eda905;
    cursor: pointer;
  }
  .title:hover .subtitle{
    display: block;
  }
</style>