import firebase from '~/plugins/firebase'

export const state = {
  user: {},
  email: '',
  name: '',
  id: '',
  registeredDate: '',
  isLoggedIn: false,
}

export const mutations = {
  // state の user に user 情報を格納
  saveUserInformation(state, user) {
    state.user = JSON.parse(JSON.stringify(user))
    state.email = state.user.email
    state.name = state.user.displayName
    state.id = state.user.uid
    state.registeredDate = state.user.createdAt
  },
  changeAuthState(state) {
    state.isLoggedIn = true
    console.log(state.isLoggedIn)
  },
}

export const actions = {
  register(context, { email, password }) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.$router.push('/mypage')
      })
      .catch(() => {
        window.alert('会員登録に失敗しました')
      })
  },
  login(context, { email, password }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
          context.commit('saveUserInformation', user)
          context.commit('changeAuthState')
        })
        this.$router.push('/mypage')
      })
      .catch(() => {
        window.alert('ログインに失敗しました')
      })
  },
  // 果たして必要なのか
  setPersistenceSession(context, { email, password }) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  },
  // ログイン中のユーザー情報を取得
  getAuthenticatedUserInformation(context) {
    firebase.auth().onAuthStateChanged((user) => {
      context.commit('saveUserInformation', user)
      context.commit('changeAuthState')
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
