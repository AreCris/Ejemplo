

  //ejemplos
  var persona={
    nombre:"jose",
    apellido:"guillen",
    
  };
  var matricula={
    nombre:"ajsjaa",
    apellido:"uUuUaaaaa",
    materia:["ingles","frances"]
  };
  var datos={
    edad:725512315381253816431751219127
  }
  var ficha ={};
  Object.assign(ficha,persona,datos);
  console.log(ficha)
  
  var copias=Object.assign({},matricula);
  console.log(copias.materia);
  console.log(matricula.materia);
  var perfil=matricula
  perfil.nombre="PEPE";
 
  console.log(copias["nombre"])
  copias.materia=Object.assign([],matricula.materia);
  matricula.materia[0]="chino";
  
  //arrays ---> objetos = []