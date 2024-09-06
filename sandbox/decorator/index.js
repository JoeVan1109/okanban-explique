/*
une fonction décorateur est une fonction qui prend un argument une fonction et en modifie le comportement, elle la décore
et renvoie cette nouvelle fonction décorée... les noms de ces fonction décoratrices, commence généralement par with...
pour indiquer la fonctionnalité ajoutée
*/

function withTryCatch(func){
  return function(...args){
    try{
      func(...args);
    } catch(error){
      console.log(error.message);
    }
  };
}

function withLog(func){
  return function(...args){
    console.log(...args);
    func(...args);
  };
}

function rndInterval(min, max){
  const rnd = Math.random();
  if(rnd < min || rnd > max){
    throw new Error('rnd n\'est pas compris dans le bon intervalle');
  }
  return rnd;
}

//rndInterval(0.4,0.6);
console.log('Coucou');

const rndIntervalWithTryCatch = withTryCatch(rndInterval);
// rndIntervalWithTryCatch(0.5,0.6);
/*
function(...args){
    try{
      rndInterval(...args);
    } catch(error){
      console.log(error.message);
    }
  };
*/
const rndIntervalWithLog = withLog(rndInterval);
// rndIntervalWithLog(0.1, 0.9);
/*
function(...args){
    console.log(...args);
    rndInterval(...args);
  };
*/
const rndIntervalWithTryCatchWithLog = withLog(rndIntervalWithTryCatch);
/*
function(...args){
    console.log(...args);
    rndIntervalWithTryCatch(...args)
  };
*/

rndIntervalWithTryCatchWithLog(0.4,0.5);

function rnd(){
  return Math.random();
}

rnd();

function withReturnValueLog(func){
  return function(...args){
    const returnValue = func(...args);
    console.log(returnValue);
    return returnValue;
  };
}

const rndWithReturnLog = withReturnValueLog(rnd);
/*
function(...args){
    console.log(rnd(...args));
  };
*/

const rndValue = rndWithReturnLog();
console.log(rndValue);
