// Can use array accessor on object properties

var tmp = {
  start: "my start date",
  finish: "last day on the job"
};
var now = "start";
var later = "finish";

console.log("currently:", tmp[now])
console.log("later:", tmp[later])
console.log("later:", tmp.later)
