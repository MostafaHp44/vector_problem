let arry1 = [
    [2, 3],
    [5, 3],
    [6, 4],
    [7, -8],
  ];
  let arry2 = [
    [4, 5],
    [5, 5],
    [7, 6],
    [8, 7],
  ];
  
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
  nVector(arry1, arry2);