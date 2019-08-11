<template>
  <div>

    <div id="header">
      <h1 id="headerText">ARIES LCC</h1>
      <nav>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/Contacts">Contacts</router-link></li>
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
    {path: "/home", component: Home},
    {path: "/about", component: About},
    {
      path: "/contacts",
      component: Contacts,
      children : [
        {path: ":no", component: ContactByNo},
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
