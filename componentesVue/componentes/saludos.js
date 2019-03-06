Vue.component('saludo',{
  template: `
    <div>
      <h1>{{saludo}}</h1>
      <h3>Adios</h3>
    </div>
  `,
  data(){
    return {
      saludo: 'Holaa este es dinamico'
    }
  }
});
