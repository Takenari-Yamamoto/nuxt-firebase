import firebase from '~/plugins/firebase'

export const state = () => ({
 email: "",
 password: ""
})

export const actions = {
  register ({ commit, state }, { email, password }) {
    firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(email);
    console.log(password);
  },
  login (context, payload) {
    console.log('ログイン')
  }
}
