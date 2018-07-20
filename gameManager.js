console.log('linked');

class Trainer {
  constructor() {
    this.pokemon = [];
 }
  addPoke(pokemon){
   this.pokemon.push(pokemon);
 }
  all(){
   return this.pokemon;
 }
 get(name){
   for (let i = 0; i < this.pokemon.length; i++) {
       console.log(this.pokemon[i]);
   }
 }
}



/* Pikachu
================================= */
class Pokemon {
  constructor(name, hp, attack, defense, abilities){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}

let Joseph = new Trainer();


function pikachuDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);
      pikachu = new Pokemon (
        this.name = myObj.name,
        this.hp = myObj.stats[5].base_stat,
        this.attack = myObj.stats[4].base_stat,
        this.defense = myObj.stats[1].base_stat,
        this.ability = myObj.abilities[0].ability.name,
      );
      console.log(pikachu);

      document.getElementById("pikachu-name").innerHTML = 'My name is ' + pikachu.name;
      document.getElementById("pikachu-hp").innerHTML = 'My health is at ' + pikachu.hp;
      document.getElementById("pikachu-attack").innerHTML = 'My attack is ' + pikachu.attack;
      document.getElementById("pikachu-defense").innerHTML = 'My defense is ' + pikachu.defense;
      document.getElementById("pikachu-ability").innerHTML = 'My ability is ' + pikachu.abilities;


    }
  }
  xhttp.open("GET","https://pokeapi-nycda.firebaseio.com/pokemon/25.json", true);
  console.log(xhttp);
  xhttp.send();
}

function loadPokemon() {
  var xhttp = new XMLHttpRequest();
  console.log(xhttp); {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      document.getElementById('info').src = myObj.sprites.front_default;
      console.log(this.responseText);
    }yorvi
    };
    xhttp.open("GET","https://pokeapi-nycda.firebaseio.com/pokemon/25.json", true);
    xhttp.send();
  }


  /* Eevee
  ================================= */




  function eeveeDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        var myObj = JSON.parse(this.responseText);
        var eevee = new Pokemon (
          this.name = myObj.name,
          this.hp = myObj.stats[5].base_stat,
          this.attack = myObj.stats[4].base_stat,
          this.defense = myObj.stats[1].base_stat,
          this.ability = myObj.abilities[0].ability.name,
        );
        console.log(eevee);

        document.getElementById("eevee-name").innerHTML = 'My name is ' + eevee.name;
        document.getElementById("eevee-hp").innerHTML = 'My health is at ' + eevee.hp;
        document.getElementById("eevee-attack").innerHTML = 'My attack is ' + eevee.attack;
        document.getElementById("eevee-defense").innerHTML = 'My defense is ' + eevee.defense;
        document.getElementById("eevee-ability").innerHTML = 'My ability is ' + eevee.abilities;


      }
    }
    xhttp.open("GET","https://pokeapi-nycda.firebaseio.com/pokemon/133.json", true);
    console.log(xhttp);
    xhttp.send();
  }

  function loadPokemon() {
    var xhttp = new XMLHttpRequest();
    console.log(xhttp); {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById('info').src = myObj.sprites.front_default;
        console.log(this.responseText);
      }
      };
      xhttp.open("GET","https://pokeapi-nycda.firebaseio.com/pokemon/133.json", true);
      xhttp.send();
    }

    /* Mewtwo
    ================================= */




    function mewDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

          var myObj = JSON.parse(this.responseText);
          var mewtwo = new Pokemon (
            this.name = myObj.name,
            this.hp = myObj.stats[5].base_stat,
            this.attack = myObj.stats[4].base_stat,
            this.defense = myObj.stats[1].base_stat,
            this.ability = myObj.abilities[0].ability.name,
          );
          console.log(mewtwo);

          document.getElementById("mewtwo-name").innerHTML = 'My name is ' + mewtwo.name;
          document.getElementById("mewtwo-hp").innerHTML = 'My health is at ' + mewtwo.hp;
          document.getElementById("mewtwo-attack").innerHTML = 'My attack is ' + mewtwo.attack;
          document.getElementById("mewtwo-defense").innerHTML = 'My defense is ' + mewtwo.defense;
          document.getElementById("mewtwo-ability").innerHTML = 'My ability is ' + mewtwo.abilities;


        }
      }
      xhttp.open("GET","https://pokeapi-nycda.firebaseio.com/pokemon/150.json", true);
      console.log(xhttp);
      xhttp.send();
    }

    function mewPokemon() {
      var xhttp = new XMLHttpRequest();
      console.log(xhttp); {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);
          document.getElementById('info').src = myObj.sprites.front_default;
          console.log(this.responseText);
        }
        };
        xhttp.open("GET","https://pokeapi-nycda.firebaseio.com/pokemon/150.json", true);
        xhttp.send();
      }

      /* Charmander
      ================================= */




      function charmDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {

            var myObj = JSON.parse(this.responseText);
            var charmander = new Pokemon (
              this.name = myObj.name,
              this.hp = myObj.stats[5].base_stat,
              this.attack = myObj.stats[4].base_stat,
              this.defense = myObj.stats[1].base_stat,
              this.ability = myObj.abilities[0].ability.name,
            );
            console.log(charmander);

            document.getElementById("charmander-name").innerHTML = 'My name is ' + charmander.name;
            document.getElementById("charmander-hp").innerHTML = 'My health is at ' + charmander.hp;
            document.getElementById("charmander-attack").innerHTML = 'My attack is ' + charmander.attack;
            document.getElementById("charmander-defense").innerHTML = 'My defense is ' + charmander.defense;
            document.getElementById("charmander-ability").innerHTML = 'My ability is ' + charmander.abilities;


          }
        }
        xhttp.open("GET","https://pokeapi-nycda.firebaseio.com/pokemon/4.json", true);
        console.log(xhttp);
        xhttp.send();
      }

      function loadPokemon() {
        var xhttp = new XMLHttpRequest();
        console.log(xhttp); {
          if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById('info').src = myObj.sprites.front_default;
            console.log(this.responseText);
          }
          };
          xhttp.open("GET","https://pokeapi-nycda.firebaseio.com/pokemon/4.json", true);
          xhttp.send();
        }


document.images['images/tv.jpeg'].style.visibility = hidden;
