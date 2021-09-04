<template>
  <div>
    <TheAppHeader></TheAppHeader>
    <h1>MY PAGE です</h1>
    <TheUserInfomation />
    <UserPostList />
  </div>
</template>

<script>
import TheUserInfomation from '../components/Templates/TheUserInfomation'
import UserPostList from '../components/Templates/UserPostList'
import TheAppHeader from '../components/Organisms/TheAppHeeader'

export default {
  components: {
    TheUserInfomation,
    UserPostList,
    TheAppHeader,
  },
}
</script>
