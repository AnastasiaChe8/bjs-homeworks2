function getSolutions(a,b,c) {
    let D = b*b - 4 * a * c;
    if (D < 0) {
        console.log ("D: " + D);
    }
    else if (D == 0) {
     let x1 = -b / (2 * a);
        console.log ("roots: ", [x1], "D: ", D);
    }
    else {
        let x1 = (-b + k)/2;
        let x2 = (-b - k)/2;
         console.log ("roots: ", [x1, x2], "D: " + D);
    }
}
getSolutions (2,4,2);