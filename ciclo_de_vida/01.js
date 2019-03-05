const app = new Vue({
  el: '#app',
  data: {
    saludo: 'soy el ciclo de vida de Vue'
  },
  beforeCreate(){
    console.log('beforeCreate');
  },
  create(){
    // Al crear los metodos, observadores y eventos, pero aun no accede al dom
    // Aun no se puede acceder a 'el'
    console.log('created');
  },
  beforeMount(){
    // Se ejecuta antes de insertar el Dom
    console.log('beforeMount');
  },
  mounted(){
    // Se ejecuta al insertar el Dom
    console.log('mounted');
  },
  beforeUpdate(){
    // Se ejecuta al detectar un cambio
    console.log('beforeUpdate');
  },
  update(){
    // Se ejecuta al realizar un cambio
    console.log('update');
  },
  beforeDestroy(){
    // Se ejecuta antes de destruir la instancia
    console.log('beforeDestroy');
  },
  destroyed(){
    // Se destruye toda la instancia
    console.log('destroyed');
  },
  methods:{
    destruir(){
      this.$destroy();
    }
  }
})
