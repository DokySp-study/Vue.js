<template>
  <div id="app">
    <layout>

      <h1 slot="header">Header Space</h1>

      <div slot="sidebar">
        <ul class="menu">
          <li v-for="i in sidebars" :key="i.menu">
            <a :href="i.link">{{ i.menu }}</a>
          </li>
        </ul>
      </div>

      <div slot="content">
        <h2>Contnets Area</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eos distinctio aliquid! Voluptatum veniam illum maxime reiciendis omnis, odit doloremque? Distinctio saepe ducimus at incidunt ut. Nostrum esse suscipit deleniti!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eos distinctio aliquid! Voluptatum veniam illum maxime reiciendis omnis, odit doloremque? Distinctio saepe ducimus at incidunt ut. Nostrum esse suscipit deleniti!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eos distinctio aliquid! Voluptatum veniam illum maxime reiciendis omnis, odit doloremque? Distinctio saepe ducimus at incidunt ut. Nostrum esse suscipit deleniti!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eos distinctio aliquid! Voluptatum veniam illum maxime reiciendis omnis, odit doloremque? Distinctio saepe ducimus at incidunt ut. Nostrum esse suscipit deleniti!</p>
      </div>

      <div slot="footer">Footer Text</div>

    </layout>
  </div>
</template>

<script>
import Layout from './components/NamedSlot.vue'

export default {
    name: 'app',
    data() {
        return {
            sidebars: [
                {menu: "Home", link: "#"},
                {menu: "About", link: "#"},
                {menu: "Contact", link: "#"},
                {menu: "Vue.js", link: "#"},
            ]
        }
    },
    components: {
      Layout
    }
}
</script>

<style scoped>
  ul.menu {
    position: relative;
    padding: 5px 5px 5px 5px;
    list-style: none;
    font-style: italic;
  }

  ul.menu a{
    text-decoration: none;
  }
</style>
