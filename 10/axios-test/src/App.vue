<template>
  <div id="app">

    <div id="container">
      
      <h2>Read (GET)</H2>
      <!-- 연락처들 조회 -->
      <div>
        *
        <button @click="fetchContacts">1페이지 연락처 조회</button>
      </div>
      <br>

      <!-- 연락처 1건 조회 -->
      <div>
        *
        <input type="text" v-model="no">
        <button @click="fetchContact">연락처 1건 조회</button>
      </div>
      <br><hr><br>


      <H2>Create (POST)</H2>
      <!-- 연락처 추가 -->
      <div>
        *
        <input type="text" v-model="name" placeholder="이름 입력">
        <input type="text" v-model="tel" placeholder="전화번호 입력">
        <input type="text" v-model="address" placeholder="주소 입력">
        <button @click="addContact">연락처 1건 추가</button>
      </div>
      <br>

      <!-- 지정된 연락처 사진 수정 -->
      <div>
        *
        <input type="text" v-model="no">
        <input type="file" ref="photofile" name="photo">
        <button @click="changePhoto">사진 파일 변경</button>
      </div>
      <br><hr><br>


      <h2>Update (PUT)</h2>
      <!-- 지정된 연락처 수정 -->
      <div>
        *
        <input type="text" v-model="no">
        <input type="text" v-model="name" placeholder="이름 입력">
        <input type="text" v-model="tel" placeholder="전화번호 입력">
        <input type="text" v-model="address" placeholder="주소 입력">
        <button @click="updateContact">수정</button>
      </div>
      <br><hr><br>


      <h2>Delete (DELETE)</h2>
      <!-- 지정된 연락처 삭제 -->
      <div>
        *
        <input type="text" v-model="no">
        <button @click="deleteContact">삭제</button>
      </div>
      <br><hr><br>

    </div>


    <span>JSON 출력 (response.data)</span>

    <div id="result" class="container">
      <xmp>{{result}}</xmp>
    </div>



  </div>
</template>

<script>
import axios from 'axios'
// this.$axios -> Vue.prototype.${{이름}} 등록 시 사용 가능!
// ~~Vue.prototype에 맴버로 등록하면 (전체 부분의 멤버로 등록..?) 전역으로 사용이 가능하다!~~ -> 보류
// 멤버 -> 클래스 내부 어떤 항목을 지정하는 것을 의미

export default {
  name: 'app',
  data() {
    return {
      no: 0,
      name: '',
      tel: '',
      address: '',
      result: null,
    }
  },
  methods: {

    fetchContacts : function() {
      // 저수준 API
      // 모든 전달값을 config 객체로 전달!
      // GET /api/contacts?pageno=1&pagesize=5

      // axios({
      //   method: 'GET',
      //   url: '/api/contacts',
      //   params: {pageno: 1, pagesize:5},
      // })

      // GET (url, config)
      // 별칭 메소드 사용 시,
      axios.get('/api/contacts', {
        params: {pageno:1, pagesize:5},
      })
      .then((res) => {
        console.log(res)
        this.result = res.data
      })
      .catch((err) => {
        console.log("Err: ", err)
      })
    },
    fetchContact: function() {
      axios.get('/api/contacts/'+this.no)
      .then((res) => {
        console.log(res)
        this.result = res.data
      })
    },
    
    // POST (url, data, config)
    addContact : function() {
      axios.post("/api/contacts",
      {name:this.name, tel:this.tel, address:this.address})
      .then((res) => {
        console.log(res)
        this.result = res.data
        this.no = res.data.no  //등록된 연락처의 고유 번호를 알려준다.
      })
      .catch((err) => {
        console.log("Err: "+err)
      })
    },
    // UPDATE => POST와 비슷 (url, data, config)
    updateContact: function() {
      axios.put("/api/contacts/"+this.no, {
        name: this.name, tel: this.tel, address: this.address
      })
      .then((res) => {
        console.log(res)
        // 등록 후 기존 인풋값 초기화 
        this.name = ''
        this.tel = ''
        this.address = ''
        this.result = res.data
      })
      .catch((err) => {
        console.log("Err: " + err)
      })
    },
    // DELETE => GET과 비슷! (url, config)
    deleteContact: function() {
      axios.delete("/api/contacts/"+this.no)
      .then((res) => {
        console.log(res)
        this.no = 0
        this.result = res.data
      })
      .catch((err) => {
        console.log("Err: "+err)
      })
    },
    

    changePhoto: function() {
      // <form method="POST" enctype="multipart/form-data" action="/contacts/132123/photo">
      //   <input type="file" name="photo">
      //   <input type="submit">
      // </form>
      // 이런 폼이 있다고 가정을 하고 작성!
      //   type="file" input 태그를 직접 참조해야 한다!
      //   ref 옵션 지정 시,  this.$refs 로 직접 접근 가능하다!

      var data = new FormData()
      var file = this.$refs.photofile.files[0]
      data.append('photo', file)  // name값이 input type="file" 의 name 이랑 같아야 한다!
      // formData.append(name, value, *filename);
      //  - name: value 에 포함되는 데이터 필드의 이름입니다.
      //  - value: 필드의 값입니다. USVString 또는 Blob (File과 같은 sublcass를 포함하여) 일 수 있습니다.
      //  - filename(optional): Blob 또는 File 이 두 번째 매개 변수로 전달될 때, 서버에 리포트하는 파일 이름(a USVString)입니다. Blob 객체의 기본 파일 이름은 "blob" 입니다. File 객체의 기본 파일 이름은 파일의 이름이 됩니다.

      axios.post("/api/contacts/"+this.no+"/photo", data)
      .then((res) => {
        console.log(res)
        this.result = res.data
      })
      .catch((err) => {
        console.log("Err to upload photo: " + err)
      })
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
