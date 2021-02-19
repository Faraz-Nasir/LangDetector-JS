const franc=require('franc')
const langs=require("langs")
let string_passed_to_detect=process.argv[2]


if(franc(string_passed_to_detect)==="und"){
    console.log("Could'nt Figure It out")
}
else{
    console.log(langs.where("3",franc(string_passed_to_detect)).name)
}


