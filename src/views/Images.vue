<template>
  <div>teste
    <h1>{{ pageTitle }}</h1>
    <p v-show="message">{{ message }}</p>
    <input type="search" class="image-search" @input="filter = $event.target.value" name="list-name" id="" placeholder="Type your image title...">
    {{ filter }}
    <ul>
      <li v-for="(image, index) of filteredImageList" :key="index">
        <!-- Component Card -->
        <div>
        <!-- <div @dblclick="openModal()"> -->
          <transition name="card-transition">
            <Card :title="image.titulo" >
              <image-responsive v-transform.animation= "{ i:180, animate:false }" :src="image.url" :title="image.titulo"/>
              <Button
                type="button" 
                text="Delete" 
                :confirmation="true"
                styleButton="Danger"
                @activatedButton="removeImage(image)"
              />
            </Card>
          </transition>
        </div>
      </li>
    </ul>
    <Img/>
  </div>
</template>

<script>
//Components
import Card from '@/components/shared/card/Card.vue';
import Image from '@/components/shared/image/Image.vue';
import Button from '@/components/shared/button/Button.vue';
import ImageService from '@/domain/images/imageService.js';

export default {  
  
  //Name
  name: 'Images',
  
  // Components
  components: {
    Card,
    'image-responsive': Image,
    Button
  },
  
  //Data()
  data() {
    return {
      pageTitle: "ImageApp",
      images: [],
      filter: '',
      message: ''
    }
  },
  
  //life Cicle Hook
  created() {

    this.service = new ImageService(this.$resource);
    this.service
      .list()
      .then(json =>  {
        this.images = json;
      });

    // Using Resource --> Add a new property in this component this.resource
    // {/id} is a parameter for use in the resource
    /* Old Code 1
    this.resource = this.$resource('v1/fotos{/id}');
    this.resource.query()
      .then(res => res.json())
      .then(json =>  {
        this.images = json;
      });
    */

    /*
    // Old Code 2
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(json =>  {
        this.images = json;
        //console.log(json);
      });
    */
  },

  computed: {
    /// Filter the Images on the List
    filteredImageList(){
      if(this.filter){
        let expression = new RegExp(this.filter.trim(), 'i');
        return this.images.filter( image => expression.test(image.titulo) );
      } else {
        return this.images;
      }
    }
  },
  
  methods: {
    //Modal
    openModal() {
      alert('Modal');
    },

    //Remove
    //removeImage($event, image){
    removeImage(image){
      
      // id must be equal to a param of resource;
      //this.resource.delete( { id: image._id} )
      
      this.service
        .remove(image._id)
        .then( () => {
            //Remove Image from Array Images
            let position = this.images.indexOf(image);
            this.images.splice(position, 1);
          
            this.message = 'Image removed with success.' 
            }, erro => this.messagem = 'Message not Removed.')

      /* Old Code 
      this.$http.delete(`v1/fotos/${image._id}`)
        .then( () => {
          //Remove Image from Array Images
          let position = this.images.indexOf(image);
          this.images.splice(position, 1);
          
          //Return of Message
          this.message = 'Image removed with success.' 
          }, erro => this.messagem = 'Message not Removed.')
      */
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-transition-enter{} //antes de ser incluido ou removido
  .card-transition-enter-active{} //Incluido
  .card-transition-leave-active{} //Removido
</style>


