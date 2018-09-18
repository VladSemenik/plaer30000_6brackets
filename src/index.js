module.exports = function check(str, bracketsConfig) {
  // your solution
  var mas = [];
  for(var k =0; k<str.length; k++){
    for(var m = 0; m < bracketsConfig.length; m++){
         for(var n =0; n< 2; n++){
             if(bracketsConfig[m][n]==str[k]){
                         if(n==0 && bracketsConfig[m][1]!=mas[mas.length-1]){
                              mas.splice(mas.length, 0, bracketsConfig[m][n]);
                             break;
                            }
  
                              if(bracketsConfig[m][0] == mas[mas.length-1] && n==1){
                                  if(mas.length!=0)
                                  mas.splice(mas.length-1, 1);
                          }else {
                            if( n== 1){
                              mas.splice(mas.length, 0, bracketsConfig[m][n]);
                            }
                          }
                     }      
         }
      }
  }
  if(mas.length==0)return true;
  else return false;
}
