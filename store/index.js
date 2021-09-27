import axios from 'axios';
export const strict = false;
// state
export const state = () => ({
  major: {},
  url: {},
  button: {},
  majorPartAllData: [],
})

// actions
export const actions = {
  fetch(context){
    axios.get('http://localhost:3003/component/MajorPart')
    .then(res => {
      const major = res.data.data
      context.dispatch('actionMajor',major)
    })
    
    axios.get('http://localhost:3003/component/getComponentUrl/MajorPart')
    .then(res =>{
      const url = res.data
      context.dispatch('actionUrl',url)
    })

    axios.get('http://localhost:3003/button/buttonIndexMajorPart')
    .then(res =>{
      const button = res.data
      context.dispatch('actionButton',button)
    })

    const majorPartAllData = [
      {"name":"majorPartBordercomponent","value":""},
      {"name":"darkbackground","value":""},
      {"name":"titleBordrcomponent","value":""},
      {"name":"titlecomponent","value":""},
      {"name":"contentcomponent","value":""}
    ];
    axios.get('http://localhost:3003/componentstylename/allComponent/MajorPart')
    .then(res => {
      res.data.data.forEach(async res => {
        const data = await axios.get(`http://localhost:3003/componentstyle/${res.className}`)
        Promise.all([data]).then(res => {
          for (let i = 0; i < majorPartAllData.length; i++) {
            if (majorPartAllData[i].name === res[0].data.data.className) {
                majorPartAllData[i].value = res[0].data.data
            }
          }
        });
      });
      context.dispatch('actionMajorPartAllData',majorPartAllData)
    })
  },
  actionMajor(context,major){
    context.commit('mutationMajor',major);
  },
  actionUrl(context,url){
    context.commit('mutationUrl',url);
  },
  actionButton(context,button){
    context.commit('mutationButton',button);
  },
  actionMajorPartAllData(context,majorPartAllData){
    context.commit('mutationMajorPartAllData',majorPartAllData);
  },
}

// mutation
export const mutations = {
  mutationMajor(state,major){
    state.major = major
  },
  mutationUrl(state,url){
    state.url = url
  },
  mutationButton(state,button){
    state.button = button
  },
  mutationMajorPartAllData(state,majorPartAllData){
    state.majorPartAllData = majorPartAllData
  },
}