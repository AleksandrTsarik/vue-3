import { createApp } from 'vue'
import App from './App'
import components from '@/components/ui'
import router from './router/router'


const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})


app
    .use(router)
    .mount('#app')
// createApp(App).use(store).use(router).mount('#app')
