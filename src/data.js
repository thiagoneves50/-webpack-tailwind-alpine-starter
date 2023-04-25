import { App } from './Tracker'

document.addEventListener('alpine:init', () => {
  Alpine.data('data', () => ({
      isActive: true,
      testApp: new App,
      
      init() {
        // This code will be executed before Alpine
        // initializes the rest of the component.
        console.log("Alpine Initialized");
    }
  }))
})