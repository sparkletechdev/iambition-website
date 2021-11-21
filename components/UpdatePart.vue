<template>
  <div class="updatepartborder">
    <h1 class="updatetitle">
      Stay Updated
    </h1>
    <p class="updatesubtitle">
      Tips, tools and latest happenings. We promise not to spam you.
    </p>
    <form ref="updatesubscribe" :class="{updatesubscribe:true, hidden:show}" action="">
      <input ref="updatemail" type="email" name="updatemail" placeholder="Your email" class="updatemail" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" oninvalid="this.setCustomValidity('Please Enter Email Only.')" @oninput="updatesubscribe($event)" >
      <button type="submit" class="updatebutton" @click="updatesubscribe($event)">
        Subscripe
      </button>
    </form>
    <p :class="{updatemsg:true,active:show}">
      {{massage}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      massage:"Getting Email Success",
      show: false,
    }
  },
  methods: {
    updatesubscribe(e){
      const ref = this.$refs;
      const emailvalue = ref.updatemail.value;
      const emailRule =  /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

      if (emailvalue.search(emailRule) !== -1) {
        e.preventDefault();
        this.show = true;
        setTimeout(()=>{
          this.show = false;
          ref.updatesubscribe.style.transform = "translateY(80px)";
        },3000);
        setTimeout(()=>{
          ref.updatesubscribe.style.transform = "translateY(0px)";
        },3050);
        ref.updatemail.value = "";

        fetch("http://localhost:3003/getMail",{
          method: 'PUT',
          body: JSON.stringify({
            mail: emailvalue
          }),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })
      }
    }
  },
}
</script>

<style>
  .updatepartborder{
    /* border: 1px solid black; */
    background-image:linear-gradient(rgba(12, 44, 80, .8),rgba(14, 38, 65, 0.60)), url('https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/updatepart.jpg');
    width: 100%;
    height: 342px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .updatetitle{
    color: white;
    font-size: 1.85rem;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .updatesubtitle{
    color: white;
    font-size: .9rem;
    margin-bottom: 16px;
  }
  .updatesubscribe{
    display: flex;
    border-radius: 50px;
    overflow: hidden;
    transition: all .4s ease-in-out;
  }
  .updatemail{
    font-size: 1.5rem;
    outline: none;
    width: 600px;
    padding-left: 30px;
  }
  .updatebutton{
    background: linear-gradient(to right, rgb(250, 184, 30) 50%, rgb(237, 169, 5) 50%) right bottom / 200% 100%;
    background-position: right bottom;
    font-size: 1.2rem;
    cursor: pointer;
    width: 150px;
    height: 65px;
    color: white;
    font-weight: bolder;
    transition: all .4s ease-in-out;
  }
  .updatebutton:hover{
    background-position: left bottom;
  }
  .updatebutton:not(:hover){
    background-position: right bottom;
  }
  .updatemsg{
    color: rgb(250, 184, 30);
    font-size: 1.8rem;
    display: none;
  }
  .active{
    display: block;
  }
  .hidden{
    display: none;
  }
  @media screen and (max-width: 786px) {
    .updatemail{
      width: 400px;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 576px) {
    .updatemail{
      width: 300px;
      font-size: 1.0rem;
    }
    .updatebutton{
      width: 100px;
      font-size: 1.0rem;
      height: 50px;
    }
  }
  @media screen and (max-width: 414px) {
    .updatepartborder{
      height: 300px;
    }
    .updatesubtitle{
      text-align: center;
    }
  }
  @media screen and (max-width: 361px) {
    .updatemail{
      width: 260px;
    }
    .updatebutton{
      width: 90px;
      font-size: 1.0rem;
      height: 50px;
    }
  }
</style>