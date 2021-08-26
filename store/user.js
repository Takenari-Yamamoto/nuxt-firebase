import firebase from '~/plugins/firebase'

export const state = () => ({
 email: "",
 password: ""
})

export const actions = {
  register ({ commit, state }, { email, password }) {
    firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  login ({ commit, state }, { email, password }) {
    firebase.auth().signInWithEmailAndPassword(email, password);
    this.$router.push('/AfterLogin');
  }
}
