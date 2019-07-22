<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li>
            <!-- <a href="#" @click="changeMenu('hOmE')">Home</a>       이건 에러남 --> 
            <!-- <a href="#" @click="changeMenu('homePage')">Home</a>   이건 ㅇㅋ   --> 
            <!-- <a href="#" @click="changeMenu('HomePage')">Home</a>   이건 ㅇㅋ   -->
            <!-- <a href="#" @click="changeMenu('HoMePage')">Home</a>   이건 에러남 -->

            <!-- 되도록이면 컴포넌트를 템플릿에 쓸 때 사용하는 케밥케이싱으로 작성하는게 안전할듯! -->
            <a href="#" @click="changeMenu('home-page')">Home</a>
          </li>
          <li>
            <a href="#" @click="changeMenu('about')">About</a>
          </li>
          <li>
            <a href="#" @click="changeMenu('contact')">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    <div>
      <!-- 컴포넌트가 한 번 로드된 후에 계속 살아있는 상태로 지속된다 -->
      <!-- 즉, 이 예제에서는 홈과 어바웃 컴포넌트 시계가 처음 로드 된 시간 그대로 멈춰있게 된다. -->
      <keep-alive include="about,home">
        <!-- <component :is="componentId"></component> -->
        <div :is="currentView"></div>
      </keep-alive>
      
    </div>
  </div>
</template>

<script>
  import HomePage from './components/Home.vue'
  import Contact from './components/Contact.vue'
  import About from './components/About.vue'

  export default {
      name: 'app',
      components: {
        HomePage, Contact, About
      },
      // 여기서 선언한 컴포넌트가 사용되지 않았을 경우, 에러로 처리한다!!

      data() {
        return {
          currentView: 'home-page'
        }
      },
      methods: {
        changeMenu(view) {
          this.currentView = view
        }
      },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
