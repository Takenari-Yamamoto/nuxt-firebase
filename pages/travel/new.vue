<template>
  <div class="post-page">
    <div class="header">
      <h1 class="title">投稿ページ</h1>
      <!-- アップされた画像 -->
      <!-- <img class="preview-item-file" :src="uploadedImage" alt="" /> -->
      <div class="contents">
        <label v-show="!uploadedImage" class="input-item__label"
          >画像を選択
          <input type="file" @change="onFileChange" />
        </label>
        <div class="preview-item">
          <img
            v-show="uploadedImage"
            class="preview-item-file"
            :src="uploadedImage"
            alt=""
          />
        </div>
      </div>

      <button
        class="btn -blue"
        @click="
          $store.dispatch('travel/post', {
            title: title,
            content: content,
            uid: uid,
          })
        "
      >
        投稿
      </button>
    </div>
    <input
      v-model="title"
      placeholder="Title"
      class="title"
      type="text"
      name="title"
    />
    <textarea
      v-model="content"
      placeholder="Content"
      class="content"
      type="text"
      name="content"
    />
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';

export default {
  data() {
    return {
      title: '',
      content: '',
      uploadedImage: '',

      img_name: '',
    };
  },
  computed: {
    uid() {
      return this.$store.state.user.id;
    },
  },
  methods: {
    onFileChange(e) {
      console.dir(e.target.files);
      const file = e.target.files[0];
      console.log(file.name);
      const ref = firebase.storage().ref('images/' + file.name);
      ref.put(file).then(() => {
        console.log('UPLOAD SIMASITA !!');
      });

      // this.createImage(file[0]);
    },
    // createImage(file) {
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     this.uploadedImage = e.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // },
  },
};
</script>
