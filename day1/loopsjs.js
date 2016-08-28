LOOPS
var ratings = [1, 3, 1, 1, 5, 4, 3, 2, 2, 2, 3, 3, 1, 1, 2, 4, 5, 1, 2];
var sum=0, index=0;
while(index<ratings.length){
sum += ratings[index];
index++;
}
var average = sum / ratings.length;

18
##############################################################
var ratings = [1, 3, 1, 1, 5, 4, 3, 2, 2, 2, 3, 3, 1, 1, 2, 4, 5, 1, 2];
length = ratings.length;
var sum = 0;
for (var index = 0; index < length; index++) {
  sum += ratings[index];
}
var average = sum / length;
###############################################################
functions
function avg() {
  var ratings = [1, 3, 1, 1, 5, 4, 3, 2, 2, 2, 3, 3, 1, 1, 2, 4, 5, 1, 2];
length = ratings.length;
  var sum = 0;
  for (var index = 0; index < length; index += 1) {
    sum += ratings[index];
  }
  return sum / length; // instead of storing the result, we say to return
                       // the result.
}
undefined
##################################################################
function avg(ratings) {
length = ratings.length;
  var sum = 0;
  for (var index = 0; index < length; index += 1) {
    sum += ratings[index];
  }
  return sum / length; // instead of storing the result, we say to return
                       // the result.
}
avg([1, 3, 1, 1, 5, 4, 3, 2, 2, 2, 3, 3, 1, 1, 2, 4, 5, 1, 2])
2.4210526315789473

###############################################################
//reduce
//






