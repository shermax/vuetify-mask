<template>
  <div id="app">
    <v-text-field v-model="phone" label="Phone" required mask="+998 (##) ### ## ##" class="ma-5"></v-text-field>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      phone: ''
    }
  }
}
</script>
