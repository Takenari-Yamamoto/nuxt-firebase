import firebase from '~/plugins/firebase'

export const state = {
  title: '',
  content: '',
}

export const mutations = {
  // setPost(state, { title, content }) {
  //   ;(state.title = title), (state.content = content)
  // },
}

export const actions = {
  post({ context, state }, { title, content, uid }) {
    const Ref = firebase.database().ref(uid + '/post')
    Ref.push({
      travel_title: title,
      travel_content: content,
    })
  },
}
