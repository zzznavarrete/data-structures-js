// forma convencional
//const array = ["diego", "karen", "Oscar"]
//console.log(array)

// Construir un array de 0
class MyArray {

    constructor(){
        this.length = 0; // para tener el conteo de los elementos del array
        this.data = {} // donde se guardar'an los elementos que se agreguen al array
    }

    // Para obtener un dato por indice
    // le paso el indice del elemento que quiero que me devuelva
    get(index) {
        return this.data[index];
    }

    // Agregar datos
    // le paso por parametro el item que quiero agregar
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    // Borra el último elemento de un array
    pop(){
        const lastItem = this.data[this.length - 1]; // lo guardo para luego retornarlo pero ya borrado
        delete this.data[this.length - 1] // borro el elemento
        this.length--;
        return lastItem;
    }

    // elimina un elemento especificado del array
    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    // Cambia el indice del elemento a borrar para que pase de n a n-1
    shiftIndex(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];

        this.length--;
    }

}

const myArray = new MyArray()

// Adding data
myArray.push("Nicolas")
myArray.push("Chica")
myArray.push("Javi")
console.log(myArray)

// Getting index 1
console.log(myArray.get(1))

// delete last index
console.log(myArray.pop())
console.log(myArray)

// Delete specific index
console.log(myArray.delete(0))
console.log(myArray)