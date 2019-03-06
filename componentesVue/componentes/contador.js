Vue.component('contador', {
  template: //todoo se envuelve en un div SIEMPRE
  `
    <div>
      <h3>{{numero}}</h3>
      <button @click="numero++">+</button>
    </div>
  `,
  data(){
    return {
      numero: 0
    }
  }
})
