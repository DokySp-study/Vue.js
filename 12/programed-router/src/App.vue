<template>
  <div>

    <div id="header">
      <h1 id="headerText">ARIES LCC</h1>
      <nav>
        <ul>
          <li><router-link :to="{name:'home'}">Home</router-link></li>
          <li><router-link :to='{name:"about"}'>About</router-link></li>
          <li><router-link :to="{name:'contacts'}">Contacts</router-link></li>
        </ul>
      </nav>
    </div>

    <div id="container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Contacts from './components/Contact.vue'
import About from "./components/About.vue"
import Home from "./components/Home.vue"
import VueRouter from 'vue-router'
import ContactByNo from './components/ContactByNo.vue';


const router = new VueRouter({
  routes: [
    {path: "/", component: Home},
    {path: "/home", name:"home", component: Home},
    {path: "/about", name:"about",component: About},
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
      children : [
        {path: ":no", name:"contactbyno",component: ContactByNo},
      ]
    },
    // {path: "/contact/:no", component: ContactByNo},
  ]
})

export default {
  name: 'app',
  router  // not a component!! (Vue Obj)
}
</script>

<style>

</style>
