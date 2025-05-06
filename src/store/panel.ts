import { defineStore } from 'pinia'

export const usePanelStore = defineStore('panelStore', {
  state: () => {
    return {
      componentsName: ''
    }
  },
  getters: {},
  actions: {
    updatePanelName(name: string = '') {
      this.componentsName = name
    }
  }
})
