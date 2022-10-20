  
  function dot_product(v1, v2)
   {
    var dotProduct = 0;
    for (i in v1) {
      dotProduct = dotProduct + v1[i] * v2[i];
    }
    return dotProduct;

  }
  
  function nVector(vec1, vec2)
   {
    console.log("Dot Product:")
    for (let i = 0; i < vec1.length; i++)
     {
      console.log(
        ` v1: [${vec1[i]}]
         v2: [${vec2[i]}] 
         equal [${dot_product(vec1[i], vec2[i])}]`
      );
    }
  }
let arry1 = [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
  ];
  let arry2 = [
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
  ];
  nVector(arry1, arry2);
