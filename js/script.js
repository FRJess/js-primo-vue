const { createApp } = Vue;

createApp({
  data(){
    return{
      messaggio: 'Ciao!',
      coloreClasse: 'rosso',
    }
  },

  methods:{
    colorRed(){
      this.coloreClasse = 'rosso';
    },
    dynamicBlu(colore){
      this.coloreClasse = colore;
    }

  }
  

}).mount('#app')