// Hash Table: Diccionario de datos, par {key-value}
// guarda el valor de la direccion donde está almacenado el valor de la variable

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]; // retornamos el valor de la key encontrada
                }
            }
        }
        return undefined;
    }


    getAllKeys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keys.push(this.data[i][j][0]);
                }
            }
        }
        return keys;
    }

    remove(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    const deletedValue = this.data[address][i];
                    this.data[address].splice(i, 1);
                    return deletedValue;
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(50);



myHashTable.set("Nico", "Desarrollador")
console.log('myhashtable = ', myHashTable)

myHashTable.set("Chica", "bb mascota")
console.log('myhashtable = ', myHashTable)

myHashTable.set("Ibai", "Streamer")
console.log('myhashtable3 =  ', myHashTable)

console.log('myHashTable.get("Ibai")  = ', myHashTable.get("Ibai"));

myHashTable.remove("Ibai")
console.log('deleting ibai', myHashTable)
console.log('2 - myHashTable.get("Ibai")  = ', myHashTable.get("Ibai"));
