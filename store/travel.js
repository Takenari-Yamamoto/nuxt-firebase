import firebase from '~/plugins/firebase';

export const state = {
  // いらんかも？
  // title: '',
  // content: '',
  // post: '',
  allPosts: {},
  postDetail: {},
};

export const mutations = {
  setAllTravelPosts(state, allPosts) {
    state.allPosts = allPosts;
  },
  setTravelDetail(state, post) {
    state.postDetail = post;
  },
};

export const actions = {
  // 投稿する
  post({ context, state }, { title, content, uid, postId }) {
    const id = firebase.database().ref().child('posts').push().key;
    firebase
      .database()
      .ref('posts/' + id)
      .set({
        content,
        title,
        uid,
        postId: id,
      });
  },
  // 投稿詳細を編集する
  editTravelDetail({ context, state }, { title, content, postId }) {
    firebase
      .database()
      .ref('posts/' + postId)
      .update({
        content,
        title,
      });
  },
  // 全てのユーザーの全ての投稿を取得
  getAllTravelPosts(context) {
    firebase
      .database()
      .ref('/posts')
      .once('value')
      .then((result) => {
        if (result.val()) {
          // 変数に入れないとエラーになる
          const allPosts = result.val();
          context.commit('setAllTravelPosts', allPosts);
        }
      });
  },
  // 投稿詳細を取得
  getTravelDetail(context, params) {
    firebase
      .database()
      .ref('posts/' + params)
      .once('value')
      .then((result) => {
        if (result.val()) {
          const post = result.val();
          context.commit('setTravelDetail', post);
        }
      });
  },
};
