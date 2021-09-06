import firebase from '~/plugins/firebase'

export const state = {
  title: '',
  content: '',
  allPosts: {},
  personalPosts: {},
  post: '',
}

export const mutations = {
  // setPost(state, { title, content }) {
  //   ;(state.title = title), (state.content = content)
  // },
}

export const actions = {
  // 投稿する
  post({ context, state }, { title, content, uid }) {
    const Ref = firebase.database().ref(uid + '/post')
    Ref.push({
      travel_title: title,
      travel_content: content,
    })
  },
  // 全ての投稿を取得
  // getPersonalPosts({ context, state }, uid) {
  //   const database = firebase.database()
  //   database.ref(uid + '/post').on('value', (data) => {
  //     if (data) {
  //       const rootList = data.val()
  //       const key = data.key
  //       let list = []
  //       // データオブジェクトを配列に変更する
  //       if (rootList != null) {
  //         Object.keys(rootList).forEach((val, key) => {
  //           rootList[val].id = val
  //           list.push(rootList[val])
  //         })
  //       }
  //     }
  //   })
  // },
  getAllPosts() {},
}
