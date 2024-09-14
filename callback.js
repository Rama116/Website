// function one(data)
//     {
//         console.log(`${data} is the GOAT`)
//         two()
//     }
//     function two()
//     {
//         console.log("CR7")
//     }

//     setTimeout(one,3000,"Luffy")

function goat()
{
    console.log("He is the GOAT")
}
function notgoat()
{
    console.log("He isnt the GOAT")
}
function error()
{
    console.log("Absolutely not")
}

function exec(data,callback)
{
    if(data)
    {
        console.log(`Player : ${data}`)
    }
    // callback()
    setTimeout(callback,2000)
}

function check(data){
        if(data==="Ronaldo")
        {
            exec(data,goat)
        }
        else if(data==="Messi")
        {
            exec(data,notgoat)
        }
        else{
            exec("He's shit",error)
        }
}

check("Ronaldo")