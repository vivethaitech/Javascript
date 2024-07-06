var arr=["Full Stack Course", "Front End Course", "PostgreSql Course","Java Course","Python Course","Machine Learning","Data Science"];
var dropdown=document.getElementById("dropdown");

arr.forEach(course=>{
    var opt=document.createElement('option');
    opt.textContent=course;
    opt.value=course;
    dropdown.appendChild(opt);
})