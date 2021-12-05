<template>
  <div class="solutionpartborder">
    <div id="patterns" class="patterns">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="polka-dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
          </pattern>
        </defs>
        <text x="50%" y="60%" text-anchor="middle">
          Our Solutions
        </text>
      </svg>
    </div>
    <p id="solutionpartsubtitle" class="solutionpartsubtitle">
      Tuple is disrupting the workforce in public, private & non-profit sectors with automation fuelled by A.I, Machine Learning & by leveraging Big Data. With tuple, businesses are finding opportunities they have never seen before by increasing their productivity & workplace efficiency.
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.solutiontitleemove();
  },
  methods: {
    solutiontitleemove(){
      window.addEventListener("load",function(){
        const patterns = document.getElementById("patterns");
        const solutionpartsubtitle = document.getElementById("solutionpartsubtitle");
        patterns.classList.add("patternsmove");
        solutionpartsubtitle.classList.add("solutionpartsubtitlemove");
      })
    }
  },
}
</script>

<style>
  .solutionpartborder{
    width: 100%;
    height: 100vh;
    min-height: 850px;
    background: linear-gradient(rgba(28, 75, 102, 0.8),rgba(10, 40, 74, 1)), url("https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/solutionpart.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
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
  .solutionpartsubtitle{
    display: flex;
    width: 60%;
    min-width: 1140px;
    text-align: center;
    color: white;
    transform: translateX(50px);
    opacity: 0;
    transition: all .6s ease-in-out;
  }
  .solutionpartsubtitlemove{
    transform: translateX(0);
    opacity: 1;
  }
  @media screen and (max-width: 1300px) {
    .solutionpartborder {
      background-size: 150%;
    }
    svg text {
      font-size: 2.5rem;
    }
    .solutionpartsubtitle {
      padding: 0 150px;
    }
  }
  @media screen and (max-width: 992px) {
    .solutionpartborder {
      background-size: 200%;
    }
    svg text {
      font-size: 2rem;
    }
    .solutionpartsubtitle {
      width: 70%;
      padding: 0 250px;
    }
  }
  @media screen and (max-width: 768px) {
    .solutionpartborder {
      background-size: 250%;
    }
    svg text {
      font-size: 1.5rem;
    }
    .solutionpartsubtitle {
      padding: 0 350px;
    }
  }
  @media screen and (max-width: 576px) {
    .solutionpartborder {
      background-size: 270%;
      min-height: 320px;
      height: 60vh;
    }
    svg text {
      font-size: 1.5rem;
    }
    .solutionpartsubtitle {
      padding: 0 400px;
    }
  }
</style>