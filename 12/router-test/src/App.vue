<template>
  <div>

    <div id="header">
      <h1 id="headerText">ARIES LCC</h1>
      <nav>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/Contact">Contact</router-link></li>
        </ul>
      </nav>
    </div>

    <div id="container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Contact from './components/Contact.vue'
import About from "./components/About.vue"
import Home from "./components/Home.vue"
import VueRouter from 'vue-router'


const router = new VueRouter({
  routes: [
    {path: "/", component: Home},
    {path: "/home", component: Home},
    {path: "/abut", component: About},
    {path: "/Contact", component: Contact},
  ]
})

export default {
  name: 'app',
  components: {
    router
  }
}
</script>

<style>

</style>
