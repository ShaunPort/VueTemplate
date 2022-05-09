<template>
  <div class="card">
      <div class="card-header" v-if="$slots.header">
          <slot name="header"></slot>
      </div>
      <div class="card-body">
          <slot></slot>
      </div>
      <div class="card-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.card {
    border: solid 1px #ddd;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    .card-header {
        padding: 0.5rem 1rem;
        border-bottom: solid 1px #ddd;
    }
    .card-body {
        padding: 1rem;
    }
    .card-footer {
        padding: 0.5rem 1rem;
        border-top: solid 1px #ddd;
    }
}
</style>