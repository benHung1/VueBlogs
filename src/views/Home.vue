<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in blogPostsFeed" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in blogPostsCards" :key="index" />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" :to="{ name: 'Register' }">
          Register for Blogs <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard"
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  data(){
    return {
      welcomeScreen:{
        title:'welcome!',
        blogPost:
        'Weekly blog articles with all things programming including HTML、CSS、JavaScript and more. Register today to never miss a post.',
        welcomeScreen: true,
        photo:'coding',
      },
    };
  },
  computed: {
    blogPostsFeed(){
      return this.$store.getters.blogPostsFeed;
    },
    blogPostsCards(){
      return this.$store.getters.blogPostsCards;
    },    
    user(){
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
  .blog-card-wrap{
    h3{
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }

  .updates{
    .container{
      padding: 100px 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media(min-width: 800px){
        padding: 125px 25px;
        flex-direction: row;
      }
      .router-button{
        display: flex;
        font-size: 16px;
        text-decoration: none;
        background-color:gray;
        @media(min-width: 800px){
          margin-left: auto;
        }
      }
      h2{
        font-weight: 300;
        font-size: 34px;
        width:100%;
        max-width: 425px;
        text-align: center;
        text-transform: uppercase;
        @media(min-width: 800px){
          text-align: initial;
          font-size: 40px;
        }
      }
    }
  }
</style>
