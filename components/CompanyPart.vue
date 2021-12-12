<template>
  <div class="companypart">
    <div id="patterns" class="patterns">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="polka-dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
          </pattern>
        </defs>
        <text x="50%" y="60%" text-anchor="middle">
          About Us
        </text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.companytitlemove();
  },
  methods: {
    companytitlemove(){
      window.addEventListener("load",function(){
        const patterns = document.getElementById("patterns");
        patterns.classList.add("patternsmove");
      })
    }
  },
}
</script>

<style>
  .companypart{
    /* border: 1px solid black; */
    width: 100%;
    height: 100vh;
    min-height: 850px;
    background: linear-gradient(rgba(28, 75, 102, 0.8),rgba(10, 40, 74, 1)), url("https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/cooperate.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .patterns {
    width: 100%;
    transform: translateX(230px);
    opacity: 0;
    transition: all .6s ease-in-out;
  }
  .patternsmove {
    transform: translateX(0);
    opacity: 1;
  }
  svg text {
    letter-spacing: 10px;
    stroke: rgba(28,75,102,.8);
    font-size: 3.5rem;
    font-weight: 700;
    stroke-width: 1.5;
    animation: textAnimate 8s infinite alternate;
  }
  @keyframes textAnimate {
    0% {
      stroke-dasharray: 0 50%;
      stroke-dashoffset:  20%;
      fill:rgb(255, 255, 255);
    }
    100% {
      stroke-dasharray: 50% 0;
      stroke-dashoffset: -20%;
      fill: rgba(10, 40, 74, 1);
    }
  }
  @media screen and (max-width: 1300px) {
    .companypart{
      background-size: 150%;
    }
    svg text {
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 992px) {
    .companypart{
      background-size: 200%;
    }
    svg text {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 768px) {
    .companypart{
      background-size: 250%;
    }
    svg text {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 576px) {
    .companypart{
      background-size: 270%;
      min-height: 320px;
      height: 60vh;
    }
  }
</style>