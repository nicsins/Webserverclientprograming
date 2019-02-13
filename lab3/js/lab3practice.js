var classes=['microsoft server','software develment projects','web client server'];
classes.push('linux');

classes.forEach(function (el) {{
    console.log(el);
}

});

var alphabetized_classes=classes.sort();
var reversed_classes= alphabetized_classes.reverse();
reversed_classes.forEach(function (el) {{
    console.log(el);
}

});
var longest= classes[0];
for (var i=0 ; i< classes.length-1;i++){
    if (classes[i].length<=classes[i+1].length){
        longest= classes[i+1];
    }
} console.log(longest);

