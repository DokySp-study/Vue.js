<template>
  <div>

    <div id="header">
      <h1 id="headerText">ARIES LCC</h1>
      <nav>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/Contact">Contact</router-link></li>
          <!-- <li><a href="/#/home">Home</a></li>
          <li><a href="/#/about">About</a></li>
          <li><a href="/#/cOnTaCt">Contact</a></li>   -->
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
import ContactByNo from './components/ContactByNo.vue';


const router = new VueRouter({
  routes: [
    {path: "/", component: Home},
    {path: "/home", component: Home},
    {path: "/about", component: About},
    {path: "/Contact", component: Contact},
    {path: "/contact/:no", component: ContactByNo},
  ]
})

export default {
  name: 'app',
  // components: {
  //   router
  // }
  router  // not a component!! (Vue Obj)
}
</script>

<style>

</style>
