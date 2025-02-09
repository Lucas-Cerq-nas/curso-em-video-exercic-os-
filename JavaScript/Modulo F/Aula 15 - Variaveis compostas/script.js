
let num = [3,6,9]

num.push(1)
num.sort()

num[3] = 12
num[4] = 15
num[5] = 18

// console.log(num) // sem repetição
/*
    for(let i = 0;i < num.length; i++){
            // console.log(num[i]) // com repetição

    }

for(let pos in num){
    console.log(num[pos])
    
}
    */
let pos = num.indexOf(2)
if(pos != -1){
    console.log(pos)
}else{
    console.log("esse valor n existe")
}


