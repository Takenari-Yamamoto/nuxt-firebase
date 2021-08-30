import firebase from '~/plugins/firebase'

export const state = {
  isLoggedIn: false,
  user: {},
  email: '',
  name: 'aaa',
  id: '',
  createdAt: '',
}

export const mutations = {
  // state の user に user 情報を格納
  onAuthStateChanged(state, user) {
    state.user = JSON.parse(JSON.stringify(user))
    state.email = state.user.email
    state.name = state.user.displayName
    state.id = state.user.uid
    state.createdAt = state.user.createdAt
    // console.log("ユーザー情報は？")
    // console.log(state.user)
  },
  // ログインしているかどうか
  onUserLoginStatusChanged(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn
    // console.log("ログインしていますか？")
    // console.log(state.isLoggedIn)
  },
}

export const getters = {
  // ログイン状態
  isLoggedIn(state) {
    return state.isLoggedIn
  },
  // ユーザ情報を配列に保存
  user(state) {
    return state.user
  },
  email(state) {
    return state.email
  },
  name(state) {
    return state.name
  },
  id(state) {
    return state.uid
  },
  createdAt(state) {
    return new Date(state.createdAt * 1000).toString()
  },
}

export const actions = {
  register(context, { email, password }) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  login(context, { email, password }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // firebase.auth().onAuthStateChanged(user => {
        //   context.commit('onAuthStateChanged', user);
        //   context.commit('onUserLoginStatusChanged', true)
        // });
      })
      .catch((error) => {
        console.alert(error)
      })
  },
  setPersistenceSession(context, { email, password }) {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        context.dispatch('login', { email, password })
        this.$router.push('/AfterLogin')
      })
  },
  // ログイン中のユーザー情報を取得
  onAuth(context) {
    firebase.auth().onAuthStateChanged((user) => {
      context.commit('onAuthStateChanged', user)
      context.commit('onUserLoginStatusChanged', true)
    })
  },
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.push('/')
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
