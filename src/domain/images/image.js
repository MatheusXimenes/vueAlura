import { throws } from "assert";

//Modal of Images to use in the Application

export default class Image {

        //Constructor
        constructor(title='', url='', description=''){
            this.title = title;
            this.url = url;
            this.description = description;
        }

}