const app = new Vue({
  el: '#app',
  data: {
    titulo:'Hola mundo con vuej',
    frutas: ['Manzana','pera','platano'],
    vegetales: [
      {nombre:'papa', cantidad:10},
      {nombre:'camote', cantidad:0},
      {nombre:'zanahoria', cantidad:6},
      {nombre:'cebolla', cantidad:17},
    ],
    nuevoVegetal: "",
    total: 0
  },
  methods:{
    metodoAgregarVegetal () {
      this.vegetales.push({
        nombre: this.nuevoVegetal, cantidad: 0
      });
      this.nuevoVegetal = "";
    }
  },
  computed: {
    sumarVegetales() {
      this.total = 0;
      for(vegetal of this.vegetales){
        this.total = this.total + vegetal.cantidad;
      }
      return this.total;
    }
  }
})
