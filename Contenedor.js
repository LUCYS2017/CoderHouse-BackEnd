const fs = require('fs');
const path='./Productos.txt';

async function getRandom(file){
    try{
        const contenido = await readFiles(file);              
        let cant = contenido.length;  
        return parseInt(Math.random()*cant) +1;  
    }
    catch(error){
        console.log(error);
    }    
};

async function readFiles(file){
    try{
        const contenido = await fs.promises.readFile(file, 'utf-8'); 
        const info =JSON.parse(contenido);
        return info; 
    }
    catch(error){
        console.log(error);
    }
};

async function getAll(file){
    const info = await readFiles(file);
    console.log(info);
};

async function getById(file){
    try {
      const info = await readFiles(file);
      const  id= await getRandom(file); 
      let ban=0;     
      for(const item of info){
        if(item.id == id){
            console.log(item); 
            ban=1;              
        }
      } 
      if(ban==0){
        console.log('Registro no existe'); 
      }      
    } catch(error) {
        console.log(error);
    }
};

class Contenedor{    
    constructor(nameFile){
        this.nameFile = nameFile;
    }    
    getById(){
        getById(this.nameFile);    
    }

    getAll(){
        getAll(this.nameFile);           
    }   
}

const cont = new Contenedor(path);

//cont.getById();

//cont.getAll();

module.exports.Contenedor = Contenedor

