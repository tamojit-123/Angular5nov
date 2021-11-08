var rollno = [100, 101, 102, 103, "hello"];
console.log("Rollno[0]=" + rollno[0]);
for (var i = 0; i < rollno.length; i++) {
    console.log(rollno[i]);
}
var i1;
for (i1 in rollno) {
    console.log(rollno[i1]);
}
