const fs=require('fs');

//Read the file from command line argument:
var data=fs.readFileSync(process.argv[2]).toString();


//Split data to array of Lines,use '\r' for determine End of Line:
var ArrayOfData= data.split('\r');


//Split first line of ArrayOfData as Header of file and will use them as Label of JSON field:
var header=ArrayOfData[0].split(',');


//write '[' as first charactor of output JSON file because of JSON STANDARD STRUCTURE :
fs.appendFileSync('output.json','[',undefined);


//make loop to read input data line by line : 
//////loop start:
for (var i=1 ;i<=ArrayOfData.length-1;i++)
{
    //write '{' for every record : 
    fs.appendFileSync('output.json','{',undefined);
    //get one line of data :    
    var lineOFdata =ArrayOfData[i].split(',');
        //make loop for adding Labels And datas to file :
        for (var j=0;j<=9;j++)
        {
        fs.appendFileSync('output.json','"'+ header[j] +'"' + ': "' + lineOFdata[j] +(j<9 ? '",': '"'));
        }    
    //write '{' for end of  every record : (iknow i can merge some lines of code but i think my code is more clear without merging) 

        fs.appendFileSync('output.json','},',undefined);   
}

/////loop end 

//write '[' as last charactor of output JSON file because of JSON STANDARD STRUCTURE :

fs.appendFileSync('output.json',']',undefined);
fs.close();
