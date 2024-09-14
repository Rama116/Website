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

// function goat()
// {
//     console.log("He is the GOAT")
// }
// function notgoat()
// {
//     console.log("He isnt the GOAT")
// }
// function error()
// {
//     console.log("Absolutely not")
// }

// function exec(data,callback)
// {
//     if(data)
//     {
//         console.log(`Player : ${data}`)
//     }
//     // callback()
//     setTimeout(callback,2000)
// }

// function check(data){
//         if(data==="Ronaldo")
//         {
//             exec(data,goat)
//         }
//         else if(data==="Messi")
//         {
//             exec(data,notgoat)
//         }
//         else{
//             exec("He's shit",error)
//         }
// }

// check("Ronaldo")

async function API(){
    try{
        const r = await fetch('https://66e526ff5cc7f9b6273c6cfb.mockapi.io/register')
        const d = await r.json()
        // console.table(d)
        return d
    }catch(error)
    {
        console.log(error)
    }
}

// need to print like this when it is not printed in API function
async function APID()
{
    const r = await API()
    console.table(r)
    const structureddatamap = r.map((data) => {console.log(data)})
    console.table(structureddatamap)
}

APID()