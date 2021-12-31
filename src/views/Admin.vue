<template>
  <div class="admin">
    <div class="container">
      <h2>Administration</h2>
      <div class="admin-info">
        <h2>Add Admin</h2>
        <div class="input">
          <input placeholder="Enter user email to make them an admin" type="text" id="addAdmins" v-model="adminEmail" />
        </div>
        <span>{{ this.functionMsg }}</span>
        <button class="button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default { 
  name: "Admin",
  data(){
    return{
      adminEmail: "",
      functionMsg: null,
    };
  },
};
</script>

<style lang="scss" scoped>
  .admin{
    .container{
      max-width: 1000px;
      padding: 60px 25px;

      h2{
        text-align: center;
        margin-bottom: 15px;
        font-weight: 300;
        font-size: 30px;
      }
      .admin-info{
        border-radius: 10px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 2px 4px -1px rgba(0, 0, 0, 0.06);
        padding: 30px;
        background-color: lightgray;
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: 30px auto;

        span{
          font-size: 15px;
        }

        .input{
          margin: 16px 0;

          label{
            font-size: 15px;
            display: block;
            padding-bottom: 5px;
          }
          input{
            width: 100%;
            border: none;
            background-color: #fff;
            padding: 8px;
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