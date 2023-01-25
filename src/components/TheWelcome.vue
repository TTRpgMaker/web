<template>
  <WelcomeItem>
    <template #heading>
      <span class="label">Welcome</span>
    </template>
    <hr class="neo-line">
    <div>User {{ JSON.stringify(data) }}</div>
    <div id="loginGoogleButton" v-show="googleCredential === '' "></div>
  </WelcomeItem>
</template>
<script setup lang="ts">
import {ref} from "vue";
import WelcomeItem from "./WelcomeItem.vue";
import {useRoute} from "vue-router";
import {UserRepository} from "@/user/user.repository";

let data = ref({});
const error = ref(null);
const route = useRoute();
let googleCredential = ref("");

async function getUser(token: string) {
  const result = UserRepository.getUser(token);
  data.value = result || {};
}

function handleGoogleLoginResponse(response: any) {
  googleCredential.value = response.credential;
  getUser(googleCredential.value);
}

window.onload = () => {
  (window as any).google.accounts.id.initialize({
    client_id:
    import.meta.env.VITE_TTRPG_CLIENT_ID,
    callback: handleGoogleLoginResponse,
  });
  (window as any).google.accounts.id.renderButton(
      document.getElementById("loginGoogleButton"),
      {theme: "filled_black", size: "large", shape: "circle"}
  );
};
</script>
<style scoped lang="stylus">
.label {
  color: #86f7be;
  text-shadow: 0 0 10px lime;
}

.neo-line {
  border: #dd726d solid;
  border-radius: 16px;
  box-shadow: 0 0 2px #ff0e00, 0 0 12px #fa0d00, 0 0 22px #6e1510, 0 0 30px #6e1510, 0 0 41px #3d0606;
  margin: 10px 0 30px 0;
}
</style>
