Vue.component('padre',{
  template:
  `
    <div class="p-5 bg-dark text-white">
      <h2>Componente Padre: {{numeroPadre}}</h2>
      <button class="btn btn-danger" @click="numeroPadre++">+</button>
      {{nombrePadre}}
      <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
  `,
  data(){
    return{
      numeroPadre: 0,
      nombrePadre: ''
    }
  }
})

// es importante resaltar que antes de numero los dos puntos es para que se pueda visualizar el tipo de dato en numerico
