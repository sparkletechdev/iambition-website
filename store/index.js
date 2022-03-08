// import axios from 'axios'
// import majorPart from '~/assets/data/major-part.json'
export const strict = false
// state
export const state = () => ({
  major: {
    data: {
      id: 1,
      componentName: 'MajorPart',
      title: 'Using Data To Drive Possibilities',
      subtitle: '',
      content:
        'Several years ago, we embarked on a journey to evolve the way business leaders make and execute their decisions. Now we create applications to tackle deep business problems, with solutions that were impossible to find without Data-Driven Technologies.',
      subContent: '',
      background: 'indexFirstBackground.jpeg',
      headerId: 1,
      subheaderId: 1,
      created_at: '2021-09-28T03:07:55.000Z',
      updated_at: '2021-09-28T03:07:55.000Z',
    },
  },
  url: {
    url: 'https://sthree3.s3.ap-southeast-1.amazonaws.com/indexFirstBackground.jpeg?AWSAccessKeyId=AKIATQVQFY3D77YVJKEZ&Expires=1646653134&Signature=RngrVhK1dtwCuTajNYtjrKkoX7c%3D',
  },
  button: {
    data: {
      id: 1,
      buttonName: 'buttonIndexMajorPart',
      title: 'Know more about Tuple',
      link: '/subPage/About Us',
      created_at: '2021-09-28T03:07:55.000Z',
      updated_at: '2021-09-28T03:07:55.000Z',
      buttonstyles: [
        {
          id: 1,
          idName: 'buttonRadiusBorder',
          className: 'buttonRadiusBorder',
          idStyle: '',
          classStyle: '',
          style:
            '\n          background: linear-gradient(to right, #fab81e 50%, #eda905 50%);\n          background-size: 200% 100%;\n          background-position: right bottom;\n          padding: 10px 50px;\n          border-radius: 30px;\n          margin: 20px 0 0 0;\n          position: relative;\n          width: 280px;\n          transition: all .5s ease-out;\n        ',
          buttonId: 1,
          created_at: '2021-09-28T03:07:55.000Z',
          updated_at: '2021-09-28T03:07:55.000Z',
        },
        {
          id: 2,
          idName: 'yellowButtonRadius',
          className: 'yellowButtonRadius',
          idStyle: '',
          classStyle: '',
          style:
            '\n          font-size: 15px;\n          color: white;\n        ',
          buttonId: 1,
          created_at: '2021-09-28T03:07:55.000Z',
          updated_at: '2021-09-28T03:07:55.000Z',
        },
      ],
    },
  },
  majorPartAllData: [],
  production: {},
})

// actions
// export const actions = {
//   fetch(context) {
//     // axios.get('assets/data/major-part.json')
//     // .then(res => {
//     //   const major = res.data.data
//     //   context.dispatch('actionMajor',major)
//     // })
//     context.dispatch('actionMajor', majorPart)

//     axios
//       .get('http://localhost:3003/component/getComponentUrl/MajorPart')
//       .then((res) => {
//         const url = res.data
//         context.dispatch('actionUrl', url)
//       })

//     axios
//       .get('http://localhost:3003/button/buttonIndexMajorPart')
//       .then((res) => {
//         const button = res.data
//         context.dispatch('actionButton', button)
//       })

//     const majorPartAllData = [
//       { name: 'majorPartBordercomponent', value: '' },
//       { name: 'darkbackground', value: '' },
//       { name: 'titleBordrcomponent', value: '' },
//       { name: 'titlecomponent', value: '' },
//       { name: 'contentcomponent', value: '' },
//     ]
//     axios
//       .get('http://localhost:3003/componentstylename/allComponent/MajorPart')
//       .then((res) => {
//         res.data.data.forEach(async (res) => {
//           const data = await axios.get(
//             `http://localhost:3003/componentstyle/${res.className}`
//           )
//           Promise.all([data]).then((res) => {
//             for (let i = 0; i < majorPartAllData.length; i++) {
//               if (majorPartAllData[i].name === res[0].data.data.className) {
//                 majorPartAllData[i].value = res[0].data.data
//               }
//             }
//           })
//         })
//         context.dispatch('actionMajorPartAllData', majorPartAllData)
//       })
//   },
//   actionMajor(context, major) {
//     context.commit('mutationMajor', major)
//   },
//   actionUrl(context, url) {
//     context.commit('mutationUrl', url)
//   },
//   actionButton(context, button) {
//     context.commit('mutationButton', button)
//   },
//   actionMajorPartAllData(context, majorPartAllData) {
//     context.commit('mutationMajorPartAllData', majorPartAllData)
//   },
//   actionProductionPart(context) {
//     axios.get('http://localhost:3003/production/productionAll').then((res) => {
//       const production = res.data
//       context.commit('mutationProductionPart', production)
//     })
//   },
// }

// mutation
// export const mutations = {
//   mutationMajor(state, major) {
//     state.major = major
//   },
//   mutationUrl(state, url) {
//     state.url = url
//   },
//   mutationButton(state, button) {
//     state.button = button
//   },
//   mutationMajorPartAllData(state, majorPartAllData) {
//     state.majorPartAllData = majorPartAllData
//   },
//   mutationProductionPart(state, production) {
//     state.production = production
//   },
// }
