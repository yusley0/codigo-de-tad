 var elementos:any =[]
 var opciones = 0;
 
do{
    opciones = Number(prompt("\n" +
    "\n 1.- Crear la pila" +
    "\n 2.- Ingresar elemento(PUSH)" +
    "\n 3.- Sacar elemento (POP)" +
    "\n 4.- Cuantos elementos hay: " +
    "\n 5.- Imprimir toda la pila" + 
    "\n 6.- Salir \n"));
   
    switch (opciones) {

        case 1: //Crear
              var nombrePila = prompt("\nIngrese el nombre de la pila: ");
               console.log("se creo la  " + nombrePila );
                console.log("se creo con exito" );
            if(nombrePila){
                opciones
            } else {
            opciones 
         } 
         
           
            break;
        case 2: //PUSH
        var nuevo = prompt("Ingrese un elemento a la pila");
            elementos.push(nuevo)
            console.log("se ingreso: " +elementos );
            if(elementos){
                opciones
        }else{
          opciones
               }
            break;
        case 3: //POP
           var elim= elementos.pop();
            console.log("se elimino el elemento: " +elim);
            if(elementos){
                opciones
           } else{
         opciones

           } 
        
            break;   
        case 4: //PEEK
        console.log("hay "  +elementos.length+ " elementos");
        
        if(opciones){
            opciones 
        } else{
        opciones }
            break; 
        case 5: //Imprimir
                console.log(elementos)
                if(elementos==null)
    console.log("Hey inicializala pila primero");
    else
    console.log(elementos.toString());
            break;
        case 6: 
           var b:any = prompt("seguro que quieres salir ..?? SI o NO \n" + "\n 1. Si" +"\n 2. NO");
           this.elementos.push(b);
          
            break;
    }
}while(opciones !=6);
console.log("Gracias por usar el programa");






