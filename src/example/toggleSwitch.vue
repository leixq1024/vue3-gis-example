<template>
  <main class="container">
    <div class="toggle__warpper">
      <div
        class="toggle"
        :class="{
          'toggle--active': toggleStatus
        }"
        @click="onToggleClick"
      >
        <div class="toggle__btn" ref="toggleBtn">
          <div class="toggle__btn--after"></div>
          <div class="toggle__btn--before"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
const toggleStatus = ref(false)
const toggleBtn = ref(null)
const onToggleClick = () => {
  const btnDom = toggleBtn.value
  btnDom.style.left = toggleStatus.value ? '-12px' : '346px'
  toggleStatus.value = !toggleStatus.value
}
</script>

<style lang="scss" scoped>
.container {
  background: linear-gradient(#fff, #a7adbb);
}
.toggle {
  position: relative;
  width: 600px;
  height: 120px;
  border-radius: 64px;
  background: linear-gradient(#fff, #828a9a);
  box-shadow:
    inset 0px 4px 13px 0 rgba(#000, 0.5),
    inset 0px -4px 13px 0 rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  &--active {
    animation: bgAnimation 0.35s linear 0.35s forwards;
  }

  &__warpper {
    border-radius: 120px;
    width: 664px;
    height: 184px;
    box-shadow:
      inset 0px 4px 13px 0 rgba(25, 45, 85, 0.5),
      inset 0px -4px 13px 0 rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__btn {
    position: absolute;
    border-radius: 120px;
    left: -12px;
    width: 268px;
    height: 160px;
    background: linear-gradient(170deg, #ffffff, #f4f7fd 20%, #afb5c1, #929caf);
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 14px 33px 20px -15px rgba(25, 45, 85, 0.45);
    transition: all ease-in-out 0.35s;
    &--after {
      width: 100px;
      height: 115px;
      background: linear-gradient(101deg, #cfd5dd, #f9f9f9);
      border-radius: 50%;
    }
    &--before {
      width: 100px;
      height: 115px;
      background: linear-gradient(112deg, #969fb0, #ffffff);
      border-radius: 50%;
    }
    &::after {
      position: absolute;
      content: '';
      left: 53px;
      bottom: -58px;
      width: 250px;
      height: 174px;
      background: rgba(#192d55, 0.19);
      border-radius: 120px;
      filter: blur(16px);
      z-index: 999;
      display: block;
    }
  }
}
// 背景渐变动画
@keyframes bgAnimation {
  0% {
    background: linear-gradient(#fff, #828a9a);
  }
  100% {
    background: linear-gradient(#9cff8c, #0b4f00);
  }
}
</style>
