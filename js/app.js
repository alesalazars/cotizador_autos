// Constructor para seguro
function Seguro(marca, anio, tipo){
  this.marca = marca;
  this.anio = anio;
  this.tipo = tipo;
}


// Todo lo que se muestra
function Interfaz(){}

// mensaje que se imprime en el HTML
Interfaz.prototype.mostrarError = function(mensaje, tipo){
  const div = document.createElement('div');

  if(tipo === 'error'){
    div.classList.add('mensaje', 'error');
  }else{
    div.classList.add('mensaje', 'correcto');
  }
  div.innerHTML = `${mensaje}`;
  formulario.insertBefore(div, document.querySelector('.form-group'));

  setTimeout(function(){
    document.querySelector('.mensaje').remove();
  }, 3000);
}



// Event listeners
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e){
  e.preventDefault();

  // leer la marca seleccionada del primer select
  const marca = document.getElementById('marca');
  const marcaSeleccionada = marca.options[marca.selectedIndex].value;

  // leer el año seleccionado del segundo select
  const anio = document.getElementById('anio');
  const anioSeleccionado = anio.options[anio.selectedIndex].value;

  // lee el valor del radio button
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  // crear instancia de interfaz
  const interfaz = new Interfaz();

  // revisar que los campos no esten vacios
  if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
    // interfaz imprimiendo un error
    interfaz.mostrarError('Faltan datos, revisa el formulario y prueba de nuevo.', 'error');
  }else{
    // instanciar seguro y mostrar interfaz
    console.log('todo correcto')
  }

});


// generamos los años del select
const max = new Date().getFullYear(),
      min = max - 20;

const selectAnios = document.getElementById('anio');
for(let i = max ; i > min ; i--){
  let option = document.createElement('option');
  option.value = i;
  option.innerHTML = i;
  selectAnios.appendChild(option);
}