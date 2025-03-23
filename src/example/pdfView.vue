<!-- pdf预览 -->
<template>
  <main class="pdf-view">
    <div class="container">
      <div id="pdf-canvas" v-show="model === 'canvas'"></div>
      <PDFView :url="pdfUrl" v-show="model === 'iframe'" />
    </div>
    <!-- 功能区 -->
    <div class="fun">
      <div class="search-box">
        <input v-model="searchText" class="search" type="text" @keyup.enter="handleSearch" placeholder="输入搜索内容" />
        <button @click="handleSearch">搜索</button>
        <div class="nav-buttons">
          <button @click="jumpToPrev" :disabled="currentPage <= 1">◀ 上一页</button>
          <span class="counter">{{ currentPage }}/{{ pages.length }}</span>
          <button @click="jumpToNext" :disabled="currentPage >= pages.length">下一页 ▶</button>
          <button @click="cutMode">模式切换</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import PDFView from './pdf.vue'
import $ from 'jquery'
import * as pdfjs from 'pdfjs-dist'
import '../utils/turnjs/turn.js'
import jQuery from 'jquery'

const pdfUrl = ref('/《产品之旅：产品经理的方法论与实战进阶（双色）》赖京露经典版.pdf')
const pages = ref([])
const currentPage = ref(1)
const searchText = ref('')
const searchResults = ref([])
const currentMatchIndex = ref(-1)
const pageData = ref([])
const model = ref('canvas')
// PDF初始化
const pdfInit = async url => {
  const pdfContainer = document.querySelector('#pdf-canvas')
  if (!pdfContainer) return

  const loadingTask = pdfjs.getDocument({ url })
  const pdf = await loadingTask.promise
  pageData.value = []
  pdfContainer.innerHTML = ''
  for (let index = 0; index < pdf.numPages; index++) {
    const page = await pdf.getPage(index + 1)
    const viewport = page.getViewport({ scale: 0.8 })

    const divPage = document.createElement('div')
    divPage.classList.add('page')

    const divPageContent = document.createElement('div')
    divPageContent.classList.add('page-content')
    divPageContent.style.position = 'relative'

    // 渲染Canvas
    const canvas = document.createElement('canvas')
    canvas.width = viewport.width
    canvas.height = viewport.height
    const context = canvas.getContext('2d')
    await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise

    // 获取文本内容
    const textContent = await page.getTextContent()

    // 创建文本图层
    const textLayerDiv = document.createElement('div')
    textLayerDiv.className = 'textLayer'
    Object.assign(textLayerDiv.style, {
      position: 'absolute',
      left: '0',
      top: '0',
      right: '0',
      bottom: '0',
      overflow: 'hidden',
      lineHeight: '1',
      pointerEvents: 'none'
    })

    // 存储页面数据
    pageData.value.push({
      pageNum: index + 1,
      textContent,
      viewport,
      divPage
    })

    divPageContent.appendChild(canvas)
    divPageContent.appendChild(textLayerDiv)
    divPage.appendChild(divPageContent)
    pdfContainer.appendChild(divPage)
  }
}

// 处理搜索
const handleSearch = async () => {
  // clearHighlights()
  if (!searchText.value.trim()) return (searchResults.value = [])
  const results = []
  const searchTerm = searchText.value.toLowerCase()

  pageData.value.forEach(page => {
    page.textContent.items.forEach((item, itemIndex) => {
      if (item.str.toLowerCase().includes(searchTerm)) {
        results.push({
          pageNum: page.pageNum,
          transform: item.transform,
          viewport: page.viewport,
          itemIndex
        })
      }
    })
  })

  searchResults.value = results
  currentMatchIndex.value = results.length > 0 ? 0 : -1

  if (results.length > 0) {
    jumpToMatch(currentMatchIndex.value)
  }
}

// 跳转到指定匹配项
const jumpToMatch = index => {
  if (index < 0 || index >= searchResults.value.length) return
  const match = searchResults.value[index]
  // 翻页跳转
  $('#pdf-canvas').turn('page', match.pageNum)
}
// ===========================高亮功能不稳定 仅供参考============================
// 高亮单个匹配项
const highlightMatch = match => {
  const pageDiv = document.querySelectorAll('.page')[match.pageNum - 1]
  const textLayer = pageDiv?.querySelector('.textLayer')
  if (!textLayer) return

  const highlightDiv = document.createElement('div')
  highlightDiv.className = `highlight match-${match.itemIndex}`
  Object.assign(highlightDiv.style, {
    position: 'absolute',
    backgroundColor: 'rgba(255,215,0,0.4)',
    borderRadius: '3px',
    pointerEvents: 'none'
  })

  // 坐标转换
  const scale = 0.8
  const x = match.transform[4] * scale
  const y = (match.viewport.height - match.transform[5]) * scale
  const width = match.transform[2] * 50 * scale // 近似宽度计算
  const height = 20 * scale

  Object.assign(highlightDiv.style, {
    left: `${x}px`,
    top: `${y}px`,
    width: `${width || 38}px`,
    height: `${height}px`
  })
  textLayer.appendChild(highlightDiv)
}
// 滚动到高亮位置
const scrollToHighlight = match => {
  const pageDiv = document.querySelectorAll('.page')[match.pageNum - 1]
  const highlight = pageDiv?.querySelector(`.match-${match.itemIndex}`)
  highlight?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest'
  })
}
// 清除高亮
const clearHighlights = () => {
  document.querySelectorAll('.highlight').forEach(el => el.remove())
}
// ===========================高亮功能不稳定 仅供参考============================
// 上一页 响应会有点慢 需要自己调整
const jumpToPrev = () => {
  if (currentPage.value > 1) $('#pdf-canvas').turn('page', currentPage.value - 1)
}
//  下一页  响应会有点慢 需要自己调整
const jumpToNext = () => {
  $('#pdf-canvas').turn('next')
}

// 翻页插件初始化
const onTurn = () => {
  $('#pdf-canvas').turn({
    autoCenter: true,
    height: 673,
    width: 500,
    display: 'single',
    elevation: 50,
    duration: 800,
    gradients: true,
    acceleration: true,
    page: 1,
    pages: pages.value.length,
    // turnCorners: 'l,r',
    when: {
      turned: function (e, page) {
        currentPage.value = page
        // 翻页后重新高亮当前页的匹配项
        const currentMatches = searchResults.value.filter(m => m.pageNum === page)
        currentMatches.forEach(m => highlightMatch(m))
      }
    }
  })
}
// 模式切换
const cutMode = () => {
  model.value = model.value === 'canvas' ? 'iframe' : 'canvas'
}
const initCanvas = async () => {
  currentPage.value = 1
  pages.value = []
  searchText.value = ''
  searchResults.value = []
  currentMatchIndex.value = -1
  pageData.value = []
  await pdfInit(pdfUrl.value)
  pages.value = document.querySelectorAll('#pdf-canvas .page')
  onTurn()
}
onMounted(async () => {
  pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js'
  initCanvas()
})
</script>

<style lang="scss" scoped>
.pdf-view {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  gap: 48px;
  background: #f0f2f5;

  .container {
    width: 70%;
    height: 100%;
    overflow: auto;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    .page {
      margin: 20px auto;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
  }

  .fun {
    width: 25%;
    padding: 24px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    .search-box {
      display: flex;
      flex-direction: column;
      gap: 16px;

      input {
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
      }

      button {
        padding: 8px 16px;
        background: #1890ff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: #40a9ff;
        }

        &:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
      }

      .nav-buttons {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 12px;

        .counter {
          color: #666;
          font-size: 14px;
        }
      }
    }
  }
}

.textLayer {
  opacity: 0.2;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
}

.highlight {
  background-color: yellow;
  color: #fff;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
