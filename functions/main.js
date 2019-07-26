function getSolutions(a,b,c) {
  let object = {};
    let D = b*b - 4 * a * c;
    object.D = D;
    if (D < 0) {
      return object;
        //console.log ("D: " + D);
    }
    else if (D == 0) {
     let x1 = -b / (2 * a);
     object.roots = x1;
     return object;
    }
     else {
        let k = Math.sqrt(D);
        let x1 = (-b + k)/2 * a;
        let x2 = (-b - k)/2 * a;
        object.roots = [x1, x2];
        return object;
    }
}
getSolutions (2,4,2);

function showSolutionsMessage (a,b,c) {
    let result = getSolutions(a,b,c);
    console.log (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log("Значение дискриминанта: " + result.D);
    if (result.D == 0) {
      console.log (`Уравнение имеет один корень X1 = ${result.roots}`);
    } else if (result.D > 0) {
      console.log (`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
    }
    else {

        let k = Math.sqrt(D);
        let x1 = (-b + k)/2;
        let x2 = (-b - k)/2;
         console.log ("roots: ", [x1, x2], "D: " + D);
    }
}
getSolutions (2,4,2);

function showSolutionsMessage (a,b,c) {
    let result = this.getSolutions(a,b,c);
    console.log("Значение дискриминанта: " + result);

}
showSolutionsMessage();


      console.log("Уравнение не имеет вещественных корней");
    }
}
showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);

function getAverageScore(data) {
  let averageSum = 0;
  let i = 0;
  for (let dat in data) {
      let value = data [dat];
      let averageSubject = averageMiddle (value);
      console.log (`${dat}: ${averageSubject}`);
      averageSum += averageSubject;
      i++;
  }
  let average = averageSum / i;
   console.log(`average: ${average}`);
}

  function averageMiddle(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
      sum += array[i];
    }
    let averageArray = sum / array.length;
    return averageArray;
  }

  getAverageScore ({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2,4,5],
    russian: [3,3,4,5],
    music: [5,5,4,5],
    english: [3,3,4,5,4]
});

function  getPersonData( secretData ) {
    let result = {
        firstName: help (secretData.aaa),
        lastname: help (secretData.bbb)
    };
    return result;
}

function help (a) {
    if (a===1) {
        return "Эмильо";
    }

    if (a===0) {
        return "Родриго";
    }
}

console.log(getPersonData({aaa: 0, bbb: 0 }));
console.log(getPersonData({aaa: 0, bbb: 1 }));
console.log(getPersonData({aaa: 1, bbb: 0 }));
console.log(getPersonData({aaa: 1, bbb: 1 }));
>>>>>>> be4bf949a0fcc70167fce32c05521b0776376487
