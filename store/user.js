import firebase from '~/plugins/firebase'

export const state = {
  user: {},
  isLoggedIn: false,
}

export const mutations = {
  // state の user に user 情報を格納
  onAuthStateChanged(state, user) {
    state.user = JSON.parse(JSON.stringify(user));
    console.log("ユーザー情報は？")
    console.log(state.user)
  },
  // ログインしているかどうか
  onUserLoginStatusChanged(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn;
    console.log("ログインしていますか？")
    console.log(state.isLoggedIn)
  }
}

export const getters = {
  user(state) {
    return state.user;
  },
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
}

export const actions = {
  register (context, { email, password }) {
    firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  login (context, { email, password }) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        // firebase.auth().onAuthStateChanged(user => {
        //   context.commit('onAuthStateChanged', user);
        //   context.commit('onUserLoginStatusChanged', true)
        //   this.$router.push('/AfterLogin');
        // });
        })
  },
  setPersistenceSession(context, { email, password }) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        context.dispatch('login', { email, password })
          this.$router.push('/AfterLogin');
        })
  },
  onAuth(context) {
    firebase.auth().onAuthStateChanged(user => {
      context.commit('onAuthStateChanged', user);
      context.commit('onUserLoginStatusChanged', true)
    })
  },
  logout() {
    firebase.auth().signOut().then(() => {
      this.$router.push('/');
    }).catch((error) => {
      console.error(error)
    });
  },
}
