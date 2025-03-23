<template>
  <div class="container">
    <iframe :src="pdfUrl" width="100%" height="100%"></iframe>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Props {
  url: string // PDF 文件地址
}

const props = defineProps<Props>()
const pdfUrl = ref('')
const fileUrl = '/pdfjs-4.10.38-dist/web/viewer.html?file=' // pdfjs 文件地址

onMounted(() => {
  pdfUrl.value = fileUrl + encodeURIComponent(props.url)
})
</script>

<style scoped lang="scss">
container {
  width: 100%;
  height: 100%;
}
</style>
