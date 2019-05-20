/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function submitToken(){
    var tokenValue = document.getElementById("dataEntry").value;
    document.getElementById("dataEntry").value = "";
    switch(Number(tokenValue)){
        case generateToken(23):
            document.location = '';//Enter path to zipped file before start.
            break;
        case generateToken(102):
            //The alpha base (wrong)
            printCoOrds(-1211, 616);
            break;
        case generateToken(98):
            //Beta base (wrong)
            printCoOrds(876, 690);
            break;
        case generateToken(40):
            //Gamma base (correct)
            printCoOrds(-1419, -1775);
            break;
        case generateToken(19):
            //Delta base (wrong)
            printCoOrds(1993, -332);
            break;
        default:
            setOutput("Invalid code.");
            break;
            
    }
}

function printCoOrds(x, z){
    //Takes both sets of co-ordinates and outputs them as usual. A bit harder to reverse engineer.
    setOutput("X:" + x.toString() + " Z:" + z.toString());
}

function setOutput(str){
    document.getElementById("Result").innerHTML = str;
}

function generateToken(seed){
    //We need to generate a random token that isn't stored (so deobfuscation must be full)
    //Using the same starting seed. The token should be hard to reverse-engineer if possible.
    seed = Math.pow(seed + 94, Math.PI);
    seed = Math.trunc(seed * 9);
    seed = seed << 4;
    return seed;   
}


