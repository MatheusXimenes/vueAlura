<template>
    <button @click="callAction()" type="type" class="btn" :class="styleButtons"> {{ text }} </button>
</template>

<script>
export default {
    props: {
        type: {
            required : true,
            type: String
        },
        text: {
            required : true,
            type: String
        },
        confirmation: Boolean,
        styleButton: {
            type: String
        }
    },

    methods: {
        callAction() {
            if (this.confirmation) {
                alert('Confirm');
                // $emit call a Method on the Father Element (Custom Method)
                //this.$emit('activatedButton', newDate); --> Passing a value for the parent
                this.$emit('activatedButton');   
            }
        }
    },
    
    computed:  {

        styleButtons () {
            if(this.styleButton == 'Danger') return 'btn-danger';
            if(this.styleButton == '' || !this.styleButton ) return 'primary';
            
        }
    }
}
</script>
<style>
    .btn {
        background-color: blue;
    }

    .btn-danger {
        background-color: red;
    }
</style>
