function deleteDouble(arr) {
  let newArr =[];
  arr.forEach((element, index, arr) => {
    for(let i = index + 1; i < arr.length; i++) {
      if(element === arr[i]) {
        return;
      };
      
    };
    newArr.push(element);
  });
  console.log(newArr);
}

deleteDouble([3, 5, 3, 10, 2, 3, 10, 1]);

function transformation(num) {
  num = 25 + num*5/6;
  console.log(num);
}

transformation(0);
transformation(15);
transformation(30);
transformation(54);
transformation(60);


function odd(arr) {
  let a = 0;
  arr.forEach((element, index, arr) => {
    let counter = 0;
    if(a === 0) {
      for(let i = index + 1; i < arr.length; i++) {
        if(element === arr[i]) {
          counter++;
        }
      }
      if(!(counter % 2)) {
        a = element;
      }
    }
    })
  console.log(a);
}

odd([3, 5, 6, 3, 6, 5, 6]);
