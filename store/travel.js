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
  post({ context, state }, { title, content, uid, postId }) {
    const id = firebase.database().ref().child('posts').push().key
    firebase
      .database()
      .ref('posts/' + id)
      .set({
        content,
        title,
        uid,
        postId: id,
      })
  },
  // 投稿詳細を編集する
  editTravelDetail({ context, state }, { title, content, postId }) {
    firebase
      .database()
      .ref('posts/' + postId)
      .update({
        content,
        title,
      })
  },
}
