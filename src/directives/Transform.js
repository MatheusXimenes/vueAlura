import Vue from 'vue';

// Study about Directives
// Directive name is 'transform', use with v-transform=""
// el --> DOM Element,
// biding --> Directive Param  (Value, modifiers, arg);
// vnode -->
// Obs: Must be import on main.js

Vue.directive('transform', {

    bind(el, biding, vnode) {
        //console.log('Directive Associated');
        //console.log(el);

        let current = 0;
        el.addEventListener('click', function(){

            let i = 90;
            let animate = false;


            if (biding.value) {
                i = biding.value.i;
                animate = biding.value.animate;
            }
            
            current += i;               
            el.style.transform = `rotate(${current}deg)`;

            if ( animate || biding.modifiers.animation )  
                el.style.transition = `transform .5s`;
        
            //console.log(biding, el, vnode);
        });

    }
});