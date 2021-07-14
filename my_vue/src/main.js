import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue'
import TheHeader from './components/UI/TheHeader.vue'

const myApp = createApp(App);

myApp.component('BaseButton', BaseButton);
myApp.component('the-header',TheHeader);
myApp.mount('#app')