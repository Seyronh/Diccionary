class Diccionary {
    constructor(lowercase){
        if(typeof lowercase !== 'boolean') throw new Error("Diccionary class needs to get a boolean passed as an argument.")
        this.lowercase = lowercase
        this.list = {}
        this.count = {}
    }
    get maxid(){
        return Object.keys(this.list).length
    }
    get maxcount(){
        let arr = Object.values(this.count);
        let arr2 = Object.keys(this.count)
        let max = Math.max(...arr);
        let index = arr.indexOf(max);
        return {word:arr2[index],counts:max}
    }
    add(texto){
        if(this.lowercase){
        texto = texto.toLowerCase()
        }
        texto = texto.split(" ")
        texto.forEach(w => {
            if(this.list[w] == undefined){
                this.list[w] = Object.keys(this.list).length+1
                this.count[w] = 1
            } else {
                this.count[w] = this.count[w]+1
            }
        })
    }
    convert(texto){
        if(this.lowercase){
            texto = texto.toLowerCase()
        }
        texto = texto.split(" ")
        texto = texto.map(e => {
            if(this.list[e] == undefined){
                return 0
            } else {
                return this.list[e]
            }
        })
        return texto
    }
    convertnormalized(texto){
        let numeros = this.convert(texto)
        numeros = numeros.map(n => {
            return n/this.maxid
        })
        return numeros
    }
    remove(texto){
        if(this.lowercase){
            texto = texto.toLowerCase()
        }
        texto = texto.split(" ")
        let arraylista = Object.entries(this.list)
        texto.forEach(word => {
            let posicion = Object.entries(this.list).findIndex(e => e[0] == word)
            for(let i = posicion+1;i<arraylista.length;i++){
                arraylista[i][1] = arraylista[i][1]-1
            }
            arraylista.splice(posicion,1)
        })
        this.list = Object.fromEntries(arraylista)
    }
}
module.exports = Diccionary
