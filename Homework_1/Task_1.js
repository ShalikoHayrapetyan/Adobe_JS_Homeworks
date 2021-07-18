function printFrequency(array) {
    const object = {}
    
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      object.hasOwnProperty(element) ? object[element]++ : object[element] = 1;
    }

    for(key in object){
        console.log(key + " : " + object[key]/array.length)
    }
  }
  
  printFrequency([1,2,3])
  