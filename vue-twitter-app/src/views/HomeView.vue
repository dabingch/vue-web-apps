<template>
  <div class="home">
    <Tweet
      v-for="tweet in tweets"
      :key="tweet._id"
      :tweet="tweet"
    />
  </div>
</template>

<script>
import vweets from "../vweets";
import { ref } from "vue";
import Tweet from "../components/Tweet";

export default {
  components: { Tweet },
  setup() {
    const tweets = ref(vweets);

    return { tweets };
  },
};
</script>
