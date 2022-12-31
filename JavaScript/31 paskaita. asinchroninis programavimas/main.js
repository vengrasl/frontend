//                  Async

/*  
  1) async ir await
  2) try catch finally
  3) Promise (resolve, reject)
  4) then catch finally
*/

//  Async Function
/*
  Rašant kodą sinchroniškai kartais prireikia luktelti atsakymų iš prieštai buvusių funkcijų.
  Tam, kad sulauktume atsakymo, reikia uždelsti kodą. Tai galima padaryti su setTimeout();
  Persistengiant su setTimeout'ais ar kitais callback'ais. Sukuriame vadinamąjį "callback Hell". Ko pasekoje nukenčia kodo skaitomumas.
  Tam, kad galėtume rašyti kodą asinchroniškai ir išvengtume "callback Hell" - prieš funkciją/as naudojame prierašą "async", šitaip paversdami funkcijas asinchroniškomis.
  Norėdami nurodyti, kad reikia uždelsti / kažko palaukti - naudojame prierašą await. Await'as gali būti naudojamas tiktais asinchroninių funkcijų viduje.
*/
/*syntax
  async function name(){
    await someOtherF();
    await someMethod();
  }
  let name = async () => {
    await someOtherF();
    await someMethod();
  }
*/

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1(number) {
  try {
    const x = await resolveAfter2Seconds(number*5);
    console.log(x);
  } catch {
    console.log('Neteisinga funkcija');
  } finally {
    console.log('Baigėsi kodas');
  }

  console.log('hallo');
}

//  try... catch... finally...
/*syntax
  try{code}catch{errorInCode}finally{doWhatever}
*/
/*
  try, catch ir finally naudojami kai norima kontroliuoti kodo error handle'inimą
  try bando vykdyti kodą;
  Jeigu try bloke įvyksta error, tuomet vykdomas catch blokas. Galiausiai vykdomas finally blokas.
  Net jeigu try viduje gausime error, kurį pagaus catch'as. Kodas einantis toliau visviena bus vykdomas.
*/

//  Promise
/*syntax
  Promise((resolve, reject)) => {
    if(good){
      resolve('answer');
    } else { // bad
      reject('error');
    }
  }
*/

const delay = (time) => {
  return new Promise((resolve, reject) => {
    if(typeof(time) !== 'number'){
      reject(new Error('function delay parameter has to be a number'));
      // reject( () => 'function delay parameter has to be a number');
    } else {
      setTimeout(() => resolve('grazinta data'), time);
    }
  });
}

// let promisas = async () => {
//   console.log("-----");
//   await delay(2000);
//   console.log('some data');
// }

// then (then...) catch finally
let promisas = () => {
  console.log("-----");
  delay(2000)
  // console.log(x);
  .then((data0) => {
    console.log(data0);
    return data0+'more data';
  })
  .then((data1) => {
    console.log(data1);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('funkcija baigesi');
  })
}
/*
  Rašant asinchroninį kodą, naudojami Promises.
  Kviečiant Promise'ą, už jo rašomi(chain'inami): .then() .catch() .finally(), kurie vykdomi eilės tvarka sulaukdami duomenų vieni iš kitų (kalbant apie then'us).
*/





//=======================================================================================================================================================================
//pavyzdys su async await

//'Padaryti, kad visus produktus palogintu eiles tvarka palaukiant atitinkamo laiko'


// const products = [
//   { name: "strawberry", time: 2000 },
//   { name: "grapes", time: 500 },
//   { name: "banana", time: 1500 },
//   { name: "apple", time: 300 },
//   { name: "water", time: 900 },
//   { name: "peanuts", time: 1500 },
//   { name: "chocolate", time: 600 }
// ]


// let serve = (product, time) => {   
//   return new Promise ((fulfil, reject)=>{ // laukiam, kol bus fulfil arba reject promise
//     setTimeout( // naudojam (STANDARTINĘ) setTimeout funkcijas 
//       ()=>{ // aprašom funkciją kuri yra pirmas parametras  
//         console.log(`${product} served`) // pranešam kad produktas paserviruotas
//         fulfil() // ištęsiam pažadą ir leidžiam judėt toliau
//       },
//       time // antras parametras laikas už kurio funkciją (1 param) iškviesti
//     )
//   })
// }


// let funckicjos_pav = async () =>{   //async pries parametrus, kad nurodytu, jog tai asinchronine funkcija
//   try { // try - bandymas kazka daryt. pvz. 
//     for(i=0; i<products.length; i++){  //suksim loopa per visus produktus
//       await serve(products[i].name, products[i].time) //iskviesim funcija, su tokiais parametrais  //
//     }
//   } catch(e) {  //po catch reikia skliaustu, nes cia bus kaip funkcija. jo parametras - error
//     console.error(e.stack) //parodo kurioje vietoje bus error (jei jis bus)
//   } finally {
  
//   }
// }
// funckicjos_pav(); //call


//====================================================================================================================================================================




//                          UZDUOTIS



let stocks = {
  Fruits : ["strawberry", "grapes", "banana", "apple"],
  liquid : ["water", "ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["chocolate", "peanuts"],
};

 let is_shop_opened = false;

 function time(ms){
  return new Promise( (resolve, reject)=>{
    if(is_shop_opened){
      setTimeout(resolve, ms)
    }
    else{
      reject(console.log("day ended .Shop is closed"))
    }
  } )
 }

 async function kitchen () {
  try{
    await time(2000) //nustatome, kad funkcija isivykdys po 2 sec
    console.log(`${stocks.Fruits[0]} was selected`)

    await time(0000)
    console.log('start the production')

    await time(2000)
    console.log('cut the fruit')

    await time(1000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

    await time(1000)
    console.log('start the machine')

    await time(2000)
    console.log(`ice cream ${stocks.holder[0]}`)

    await time(3000)
    console.log(`${stocks.toppings[0]} was selected`)

    await time(2000)
    console.log("serve ice cream")

  } catch(error){
    console.log("customer left", error);
    
  } finally{
    console.log('shop is closed');
  }
  

 }

kitchen();













// let toppings_choice = () =>{
//   return new Promise((resolve, reject)=>{ 
//     setTimeout(()=>{ //nustatom laika, po kurio isivykdys funkcija
//        resolve( //kai isivykdys resolve, gris prie pradines funkcijos ir ja tes
//         console.log('which topping would you like?' + "returns to the kitchen") //isivykdys po 3sec
//        )
      
//     },3000)
//   });
// };

// async function kitchen() {
//   console.log("a") //eina per abc
//   console.log("b")
//   console.log("c")

//   await toppings_choice() //palaukti, kol isivykdys si funkcija

//   console.log("d")
//   console.log("e")
// }

// kitchen();

// console.log('doing the dishes')
// console.log('cleaning the tables')
// console.log('doing something else')



//------------------------------------callback----------------------------------------

//  let stocks = {
//    Fruits : ["strawberry", "grapes", "banana", "apple"],
//    liquid : ["water", "ice"],
//    holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
//  };

// let is_shop_opened = true; //ar atidaryta parduotuve



// let order = (time, work) =>{ //sukurta funkcija su 2 parametrais

//   return new Promise ((resolve, reject)=>{ //2 promise outcome - ivyks arba ne. Jei resolved - bus, jei rected - nebus. Tai reikalauja salygos

//     if(is_shop_opened){ //jei parduotuve atidaryta, atlikti siuos veiksmus:

//       setTimeout(()=>{ //nustatyti atlikimo laika

//         resolve( work() ) //bus atliktas toks veiksmas ////////////////////////////////salia work skliaustai kaip veikia funckijos kvietimo metu?

//       }, time) //setTimeOut nustatytas laikas
      
//     }

//     else{ //jei parduotuve uzdaryta:
//       reject(console.log('our shop is closed')); //bus gaunamas pranesimas, kad parduotuve uzdaryta
//     }
//   }) 
// }

// //step 1 - ar yra pirmas igredientas
// order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

// //step 2 - jei yra pirmas igredientas, pradeti gamyba
//   .then(()=>{
//   return order(0000,()=>console.log('production has started'))
// })
// //step3....
//   .then(()=>{
//   return order(2000, ()=>console.log('Fruit has been chopped'))
// })

//   .then(()=>{
//   return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[0]} was selected`))
// })

//   .then(()=>{
//     return order(1000, ()=> console.log('start the machine'))
//   })

//   .then(()=>{
//     return order(2000, ()=>console.log(`icecream was placed on ${stocks.holder[0]}`))
//   })

//   .then(()=>{
//     return order(3000, ()=>console.log(`${stocks.toppings[0]} was selected`))
//   })

//   .then(()=>{
//     return order(1000, ()=>console.log("ice cream was served"))
//   })

//   .catch(()=>{
//     console.log('customer left')
//   })

//   .finally(()=>{
//     console.log('day ended, shop is closed')
//   })





//------------------------------------ callbackhell-----------------------------------------




// let stocks = {
//   Fruits : ["strawberry", "grapes", "banana", "apple"],
//   liquid : ["water", "ice"],
//   holder : ["cone", "cup", "stick"],
//   toppings : ["chocolate", "peanuts"],
// };


// let order = (Fruit_name, call_production) => {

//   setTimeout(()=>{
//     console.log(`${stocks.Fruits[Fruit_name]} was selected`); // po 2 sec

//    call_production(); //funkcija, kaip parametras

//   }, 2000)

// };



// let production = () => {
//   setTimeout(()=>{
//     console.log('production has started') //iskart (0000)

//     setTimeout(()=>{
//       console.log('the fruit has been chopped') //po 2 sec (2000)

//       setTimeout(()=>{ //isiterpia callback hell (1000)
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

//         setTimeout(()=>{ //(1000)
//           console.log('the mashine was started')

//           setTimeout(()=>{
//             console.log(`ice cream was placed on ${stocks.holder[0]}`); //2000

//             setTimeout(()=>{
//               console.log(`${stocks.toppings[0]} was added`) //3000

//               setTimeout(()=>{
//                 console.log('serve ice cream') //2000
//               },2000)
//             },3000)
//           },2000)
//         },1000) 
//       }, 1000)
//     }, 2000);
//   }, 0000);
// };

// order(0, production); // iskvieciam order funkcija ir jai suteikiame parametrus(0 - fruit select ypatumai ir kita funkcija - production, kuri apjungia keleta dalyku)