<template>
  <div class="columns is-mobile is-multiline is-centered m-5">
    <div class="column is-narrow is-centered rate-card columns is-multiline is-mobile m-3">
      <div class="column is-full scale-up six-ease" style="font-size: 38px;">
        1 <b>fruit cup</b> (for 0.49 USD)
      </div>
      <div class="column is-full">
        is
      </div>
      <div class="column is-full scale-up six-ease" style="font-size: 24px">
        <b>{{ btc }}</b> BTC
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Rate',
  props: {
    btc: Number
  }
}
</script>

<style scoped>

</style>
