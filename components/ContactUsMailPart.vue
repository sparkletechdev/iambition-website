<template>
  <div class="contactusmailpartborder">
    <div class="contactusmailborder">
      <div class="contactusmailleftborder">
        <div class="contactusmailleftcontain">
          <h3 class="contactusmaillefttitle">
            Mail
          </h3>
          <h5 class="contactusmailleftsubtitle">
            We will get back to you in a flash!
          </h5>
          <h1 :class="{contactusmailleftsendsuccess:true,contactusmailleftsendsuccessshow:show}">
            Sending Mail Success
          </h1>
          <form ref="contactusmailleftformborder" :class="{contactusmailleftformborder:true,contactusmailleftformbordernone:show}">
            <div class="contactusmailleftformnameinput">
              <div class="contactusleftnameborder">
                <label for="firstnameinput" class="samelabel">
                  First Name *
                </label>
                <input id="firstnameinput" ref="firstnameinput" class="sameinput" type="text" required pattern="[a-zA-Z]{3,}" oninvalid="this.setCustomValidity('Please Enter a Valid Name.')" oninput="this.setCustomValidity('')">
              </div>
              <div class="contactusleftnameborder">
                <label for="lastnameinput" class="samelabel">
                  Last Name *
                </label>
                <input id="lastnameinput" ref="lastnameinput" class="sameinput" type="text" required pattern="[a-zA-Z]{2,}" oninvalid="this.setCustomValidity('Please Enter a Valid Last Name.')" oninput="this.setCustomValidity('')">
              </div>
            </div>
            <div class="contactusmailleftformmailinput contactusmailsame">
              <label for="mailinput" class="samelabel">
                Email Address *
              </label>
              <input id="mailinput" ref="mailinput" class="sameinput" type="email" required pattern="^\w.+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(.+)$" oninvalid="this.setCustomValidity('Please Enter Business Email Only.')" oninput="this.setCustomValidity('')">
            </div>
            <div class="contactusmailleftformcompanyinput contactusmailsame">
              <label for="companyinput" class="samelabel">
                Company *
              </label>
              <input id="companyinput" ref="companyinput" class="sameinput" type="text" required pattern="[A-Za-z ]{3,}" oninvalid="this.setCustomValidity('Please Enter a Valid Company Name.')" oninput="this.setCustomValidity('')">
            </div>
            <div class="contactusmailleftformmassageinput contactusmailsame">
              <label for="massageinput" class="samelabel">
                Message
              </label>
              <textarea id="massageinput" ref="massageinput" class="sameinput massagetextarea" rows="5" required>
              </textarea>
            </div>
            <div class="contactusmailleftformbuttoninput">
              <button type="submit" class="contactusbuttoninput" @click="contactusbuttoninput($event)">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="contactusmailrightborder">
        <div class="contactusmailrightcontain">
          <h1 class="contactusmailrighttitle">
            Contact Information
          </h1>
          <p class="contactusmailrightsubtitle">
            sparkel@gmail.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    contactusbuttoninput(e){
      const ref = this.$refs;
      const firstnameinput = ref.firstnameinput.value;
      const lastnameinput = ref.lastnameinput.value;
      const mailinput = ref.mailinput.value;
      const companyinput = ref.companyinput.value;
      const massageinput = ref.massageinput.value;
      
      if (massageinput) {
        e.preventDefault();
        this.show = true;
        setTimeout(()=>{
          this.show = false;
          ref.contactusmailleftformborder.style.transform = "translateY(80px)";
        },3000);
        setTimeout(()=>{
          ref.contactusmailleftformborder.style.transform = "translateY(0px)";
        },3050)

        fetch("http://localhost:3003/getMailInformation",{
          method: 'PUT',
          body: JSON.stringify({
            mail: mailinput,
            firstname: firstnameinput,
            lastname: lastnameinput,
            company: companyinput,
            massage: massageinput,
          }),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        });

        ref.firstnameinput.value = "";
        ref.lastnameinput.value = "";
        ref.mailinput.value = "";
        ref.companyinput.value = "";
        ref.massageinput.value = "";
      }
    }
  },
}
</script>

<style>
  .contactusmailpartborder {
    /* border: 1px solid black; */
    width: 100%;
    height: 600px;
    position: relative;
  }
  .contactusmailborder {
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 30%);
    width: 1140px;
    height: 700px;
    position: absolute;
    left: 50%;
    top: -40%;
    transform: translate(-50% ,0);
    display: flex;
  }
  .contactusmailleftborder {
    background: white;
    width: 65%;
  }
  .contactusmailleftcontain {
    padding: 50px 100px 50px 50px;
  }
  .contactusmaillefttitle {
    color: rgb(21, 62, 82);
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: .5rem;
  }
  .contactusmailleftsubtitle {
    color: rgb(21, 62, 82);
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: .5rem;
  }
  .contactusmailleftsendsuccess{
    display: none;
  }
  .contactusmailleftsendsuccessshow{
    display: block;
    text-align: center;
    font-size: 2rem;
    line-height: 10;
    color: #2c75c4;
  }
  .contactusmailleftformborder {
    padding: 30px 0 0;
    display: flex;
    flex-direction: column;
    opacity: 1;
    transform: translateY(0);
    transition: all .6s ease-in-out;
  }
  .contactusmailleftformbordernone{
    display: none;
  }
  .contactusmailleftformnameinput{
    width: 100%;
    justify-content: space-between;
    display: flex;
    margin-bottom: .5em;
  }
  .contactusleftnameborder{
    width: 49%;
    display: flex;
    flex-direction: column;
  }
  .samelabel{
    width: 100%;
    font-size: 14px !important;
    font-weight: lighter;
    color: rgb(123, 124, 125);
  }
  .sameinput{
    height: calc(2.25rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .massagetextarea{
    height: auto;
  }
  .sameinput:focus{
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
  .contactusmailsame{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: .5em;
  }
  .contactusbuttoninput{
    color: white;
    text-align: center;
    margin-top: 20px;
    padding: 10px 50px;
    border-radius: 30px;
    background: linear-gradient(to right, #145484 50%, #1868a4 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .5s ease-out;
    text-decoration: none;
    font-weight: bold;
  }
  .contactusbuttoninput:hover{
    background-position: left bottom;
  }
  .contactusbuttoninput:not(:hover){
    background-position: right bottom;
  }
  .contactusmailrightborder {
    background: black;
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contactusmailrightcontain {
    display: flex;
    flex-direction: column;
    height: 30%;
    justify-content: space-evenly;
    align-items: center;
  }
  .contactusmailrighttitle {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
  .contactusmailrightsubtitle {
    color: white;
  }
</style>