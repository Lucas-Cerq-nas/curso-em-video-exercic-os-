
let obj = {

    nome: 'lucas',
    peso: 64.0,
    func_luca(){
            return 'isso é uma função'
    },

    fun_luca: () =>{
            return 'isso é uma arrow function'
    },

    test(p=0){

        this.peso += p
    }
}
    

    obj.test(5)
    console.log(obj.peso)