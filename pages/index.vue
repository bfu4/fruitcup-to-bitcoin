<!-- eslint-disable -->
<template>
  <div class="columns m-5 is-multiline is-centered is-mobile center">
    <div class="column m-5 columns is-centered center is-multiline is-mobile is-full">
      <p class="btitle is-narrow six-ease mb-5">
        fruit bowl -> bitcoin
      </p>
    </div>
    <div class="column m-5 columns is-centered center is-multiline is-mobile is-full">
      <p class="column m-5 is-full">
        Are you <b>fucking broke</b>? Looking for a way to make <b>BITCOIN</b>? Well, here is
        something that won't help you <b>AT ALL</b>! (what else could you ask for?)
      </p>
      <div @click="$data.clicked = !$data.clicked" class="column m-5 is-full">
        <div v-if="!clicked" class="columns is-multiline is-centered center is-mobile">
          <p class="column is-full">You see this little shit? <b>This is a fruit cup</b>. Click it, I dare you.</p>
          <figure class="column cup center">
            <img src="/cup.png" alt="fruit cup">
          </figure>
        </div>
        <div v-else class="columns is-multiline is-centered center is-mobile">
          <p class="column is-full"> Remember that fruit cup? <b>Now it's a bitcoin</b>.</p>
          <figure class="column is-full cup center is-centered">
            <img src="/btc.png" alt="bitcoin">
          </figure>
        </div>
        <p class="column is-full" style="font-size: 30px"> Cool concept, right? </p>
        <p class="column">now that items are like crypto or whatever, fruit cups would be gr8 nfts!! they can be collected like boxtops or something!</p>
      </div>
      <div class="column m-5 columns is-centered center is-multiline is-mobile is-full">
        <Rate class="column" :btc="$data.btc"></Rate>
      </div>
      <div class="column m-5">
        It's too bad it's not a thing (yet)! This idea comes from
        <a class="spec" href="https://media.discordapp.net/attachments/826894920844443681/827288591670575144/ac1ed2a302c8649ca0dc0e35dca26cebc9e7ac0f.png">this</a>.
      </div>
    </div>
    <div class="column mt-5">
      <a href="https://github.com/bfu4">
        <font-awesome-icon style="font-size: 30px; opacity: 80%;" :icon="['fab', 'github']"></font-awesome-icon>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { convert } from 'current-currency';

import Vue from 'vue'

export default Vue.extend({
  data () {
    return { clicked: false }
  },
  async asyncData () {
    return { btc: (await convert('USD', 0.49, 'BTC')).amount }
  },
  methods: {
    convert
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
