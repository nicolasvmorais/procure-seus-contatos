let p = document.querySelector("p");
let input = document.querySelector("input");
const contatos = [
  { name: "Rodolfo", number: "(82) 9999-4444" },
  { name: "Paulo", number: "(82) 9999-4444" },
  { name: "Aline", number: "(82) 9999-4444" },
  { name: "Maria", number: "(82) 9999-4444" },
  { name: "João", number: "(82) 1111-1111" },
  { name: "Ana", number: "(82) 2222-2222" },
  { name: "Luiz", number: "(82) 3333-3333" },
  { name: "Carla", number: "(82) 4444-4444" },
  { name: "Pedro", number: "(82) 5555-5555" },
  { name: "Mariana", number: "(82) 6666-6666" },
  { name: "Fernando", number: "(82) 7777-7777" },
  { name: "Larissa", number: "(82) 8888-8888" },
  { name: "Ricardo", number: "(82) 9999-9999" },
  { name: "Camila", number: "(82) 1010-1010" },
  { name: "Guilherme", number: "(82) 1111-1112" },
  { name: "Isabela", number: "(82) 1111-1113" },
  { name: "Leonardo", number: "(82) 1111-1114" },
  { name: "Amanda", number: "(82) 1111-1115" },
  { name: "Carlos", number: "(82) 1111-1116" },
  { name: "Vanessa", number: "(82) 1111-1117" },
  { name: "Gustavo", number: "(82) 1111-1118" },
  { name: "Juliana", number: "(82) 1111-1119" },
  { name: "Daniel", number: "(82) 1111-1120" },
  { name: "Leticia", number: "(82) 1121-1121" }
];

function button() {

  for ( const contato of contatos) {
   while (input.value.toLowerCase() == contato.name.toLowerCase() ) {
    
    p.innerHTML = `Nome : ${contato.name} e Telefone : ${contato.number}`

    break


   } 
    
  }


} 
