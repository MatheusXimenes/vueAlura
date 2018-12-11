<template>

  <div>
    <h1 class="">{{ pageTitle }}o</h1>
    <h2 class="centralizado"> {{ image.title }} </h2>

    <form @submit.prevent="saveImage()">
      <div class="controle">
        <label for="titulo">Title</label>
        <!-- <input id="titulo" @input="image.title=$event.target.value" :value="image.title" autocomplete="off"> Changed to TwoWayDataBind-->
        <input id="titulo" v-model.lazy="image.title" autocomplete="off">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="image.url">
        <image-responsive v-show="image.url" :src="image.url" :title="image.title" />
      </div>

      <div class="controle">
        <label for="descricao">Description</label>
        <textarea id="descricao" autocomplete="off" v-model="image.description"></textarea>
      </div>

      <div class="centralizado">
        <Button text="Save" type="submit"/>
        <router-link to="images"><Button text="back" type="button"/></router-link>
      </div>

    </form>
  </div>

</template>

<script>
import Button from '@/components/shared/button/Button.vue';
import Image from '@/components/shared/image/Image.vue';
import ImageModel from '@/domain/images/image.js';
import ImageService from '@/domain/images/imageService.js';

export default {
  components: {
    Button,
    'image-responsive': Image,
  },  
  data() {
    return {
        pageTitle: 'Register Form',
        image: new ImageModel()
    }    
  },
  methods: {
    saveImage() {

      this.service = new ImageService(this.$resource);
      this.service.save(this.image)
        .then( () => new ImageModel(), error => console.log(error));
      
      /* Old Code 
        this.$http.post('http://localhost:3000/v1/fotos', this.image) 
      */

      //Clean Form
      this.image = new ImageModel();
    }
  }, 
  created() {
    // Creating this.resource  
    this.resource = this.$resource('v1/fotos');
  }

}
</script>

<style scoped>
  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }
</style>
