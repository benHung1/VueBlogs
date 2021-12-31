<template>
  <div class="profile">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <div class="container">
      <h2>Account Setting</h2>
      <div class="profile-info">
        <div class="initials">{{ $store.state.profileInitials }}</div>
        <div class="admin-badge">
          <adminIcon class="icon" />
          <span>admin</span>
        </div>
        <div class="input">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div class="input">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
        <div class="input">
          <label for="username">UserName:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="input">
          <label for="email">Email:</label>
          <input disabled type="text" id="email" v-model="email" />
        </div>
        <button @click="updateProfile">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal";
import adminIcon from "../assets/Icons/user-crown-light.svg";
export default {
  name: "Profile",
  components:{
    Modal,
    adminIcon,
  },
  data(){
    return {
      modalMessage: "Changes were saved!",
      modalActive: null,
    };
  },
  methods:{
    updateProfile(){
      this.$store.dispatch("updateUserSettings");
      this.modalActive = !this.modalActive;
    },
    closeModal(){
      this.modalActive = !this.modalMessage;
    }
  },
  computed:{
    firstName: {
      get(){
        return this.$store.state.profileFirstName;
      },
      set(payload){
        this.$store.commit("changeFirstName", payload);
      },
    },
    lastName: {
      get(){
        return this.$store.state.profileLastName;
      },
      set(payload){
        this.$store.commit("changeLastName", payload);
      },
    },
    username: {
      get(){
        return this.$store.state.profileUsername;
      },
      set(payload){
        this.$store.commit("changeUsername", payload);
      },
    },
    email(){
      return this.$store.state.profileEmail;
    }
  },
};
</script>

<style lang="scss" scoped>
  .profile {
    .container{
      max-width: 1000px;
      padding: 60px 25px;

      h2{
        text-align: center;
        margin-bottom: 16px;
        font-weight: 300;
        font-size: 30px;
      }

      .profile-info{
        border-radius: 10px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        padding: 30px;
        background-color: lightgray;
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: 30px auto;

        .initials{
          position: initial;
          width: 80px;
          height: 80px;
          font-size: 30px;
          background-color: #303030;
          color:#fff;
          display: flex;
          align-self: center;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .admin-badge{
          display: flex;
          align-self: center;
          color: #fff;
          font-size: 15px;
          padding: 10px 25px;
          border-radius: 10px;
          background-color: #303030;
          margin: 15px 0;
          text-align: center;
          text-transform: capitalize;

          .icon{
            width: 15px;
            height: auto;
            margin-right: 10px;
          }
        }

        .input{
          margin: 16px 0;
          
          label{
            font-size: 15px;
            display: block;
            padding-bottom: 8px;
          }
          input{
            width: 100%;
            border: none;
            background-color: #fff;
            padding: 10px;
            height: 50px;
            @media (min-width: 900px){

            }
            &:focus{
            outline: none;
            }
          }
        }
        button{
          align-self: center;
        }
      }
    }
  }
</style>