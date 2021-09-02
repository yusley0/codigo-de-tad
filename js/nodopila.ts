
 class NodoPila{
    Pila: any []=[]
    elementos: null | undefined;
     Nodo: any;
     static elementos: null;
     static Nodo: any;

     crearPila(){
        this.Pila =[]
        console.log("\nLa pila"+this.Pila+ "se ha creado con exito")
        return opciones
}
  imprimirPila(): void{
    if(elementos==null)
    console.log("Hey inicializala pila primero");
    else
    console.log( +elementos.toString());
}
 peekPila(){
     if(this.elementos==null)
     console.log("Hey inicializala pila primero");
     else{
        console.log("Peek a la pila"+ elementos.peekBack());
        console.log("Sacaste un elemento.");
     }
     return elementos;
   }
    popPila(){ 
        this.Pila= [] 
            if(this.Nodo.elementos.length>0){
                console.log("\nLa pila"+elementos+ "ha sido eliminado con exito")
                    return elementos.pop();
                   ;
                }else{
                    return null
                }
                }
salir(){
    if(this.elementos==null)
    console.log("Hey inicializala pila primero");
     else{     
        if(elementos.isEmpty())
        elementos==null;
}
return this.elementos;

} 

}