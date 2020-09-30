// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
/*
pick 10 array methods and create tests for each of them
*/

it('add elements to Array', () => {
  const array = [];

  array.push(1);
  array.push(2);
  array.push(3);

  // https://jestjs.io/docs/en/expect#tobevalue
  //https://jestjs.io/docs/en/expect#tostrictequalvalue
  expect(array).toStrictEqual([1, 2, 3]);
});

it('concat Array', () => {
  let array = [1, 2, 3];
  let arrayTwo = [4, 5, 6];

  let arrayThee = array.concat(arrayTwo);

  // https://jestjs.io/docs/en/expect#tobevalue
  //https://jestjs.io/docs/en/expect#tostrictequalvalue
  expect(arrayThee).toEqual([1, 2, 3, 4, 5, 6]);
});

it('reduce Array', () => {
  let sum = [0, 1, 2, 3].reduce(function (a, b) {
    return a + b;
  }, 0);

  // https://jestjs.io/docs/en/expect#tobevalue
  //https://jestjs.io/docs/en/expect#tostrictequalvalue
  expect(sum).toEqual(6);
});

it('filter Array', () => {
  const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }

  // https://jestjs.io/docs/en/expect#tobevalue
  //https://jestjs.io/docs/en/expect#tostrictequalvalue
  expect(array.filter(isPrime)).toEqual([2, 3, 5, 7, 11, 13]);
});

it('sort Array', () => {
  let numbers = [4, 2, 5, 1, 3];

  numbers.sort(function (a, b) {
    return a - b;
  });

  // https://jestjs.io/docs/en/expect#tobevalue
  //https://jestjs.io/docs/en/expect#tostrictequalvalue
  expect(numbers).toStrictEqual([1, 2, 3, 4, 5]);
});

it('slice Array', () => {
  let colors = ['black', 'red', 'white', 'blue', 'green'];

  let usa = colors.slice(1, 4);

  // https://jestjs.io/docs/en/expect#tobevalue
  //https://jestjs.io/docs/en/expect#tostrictequalvalue
  expect(usa).toStrictEqual(['red', 'white', 'blue']);
});

it('find Index of Array', () => {
  let colors = ['black', 'red', 'white', 'blue', 'green'];

  const noColor = colors.findIndex((c) => c === 'white');

  // https://jestjs.io/docs/en/expect#tobevalue
  //https://jestjs.io/docs/en/expect#tostrictequalvalue
  expect(noColor).toStrictEqual(2);
  expect(colors[noColor]).toStrictEqual('white');
});

it('reverse Array', () => {
  let array = [1, 2, 3];

  array.reverse();
  // https://jestjs.io/docs/en/expect#tobevalue
  //https://jestjs.io/docs/en/expect#tostrictequalvalue
  expect(array).toEqual([3, 2, 1]);
});

it("join Array", () => {
  let array = ["red", "white", "and", "blue"];

  let joined = array.join("-");

  // https://jestjs.io/docs/en/expect#tobevalue
  //https://jestjs.io/docs/en/expect#tostrictequalvalue
  expect(joined).toEqual('red-white-and-blue');
});

it('every Array', () => {

    let array = [12, 5, 8, 130, 44]
    
   let notCorrect = array.every(x => x >= 10);   
   let correct = array.every(x => x >= 4); 

   console.log('correct', correct, 'notcorrect', notCorrect)
  // https://jestjs.io/docs/en/expect#tobevalue
  //https://jestjs.io/docs/en/expect#tostrictequalvalue
  expect(correct).toEqual(true);
  expect(notCorrect).toBeFalsy()
});


it('reverse Array', () => {
    let array = ['red', 'white', 'and', 'blue'];

     array.shift();
    

    // https://jestjs.io/docs/en/expect#tobevalue
    //https://jestjs.io/docs/en/expect#tostrictequalvalue
    expect(array).toEqual(['white', 'and', 'blue']);
  });

  it('splice Array', () => {

    let fish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
    let removeMadarin = fish.splice(3, 1) 
    

    // https://jestjs.io/docs/en/expect#tobevalue
    //https://jestjs.io/docs/en/expect#tostrictequalvalue
    expect(removeMadarin).toEqual(['mandarin']);
  });



