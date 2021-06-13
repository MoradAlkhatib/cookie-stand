let seattle={
    min:23,
    max:65,
    avg:6.3,nameOfLocation:'seattle',
    generateRnum:function(){
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        let random= Math.floor(Math.random() * (max - min + 1) + min);
        return  Math.floor(this.avg*random);
    },
    render:function(){
        let articleElement = document.createElement('article');
        SalmonCookies.appendChild(articleElement);
        let nameHeader=document.createElement('h2');
         nameHeader.textContent=this.nameOfLocation;
        articleElement.appendChild(nameHeader);
        let unorderList=document.createElement('ul');
        nameHeader.appendChild(unorderList);
        let listToshow;
        for (let j =0;j<15;j++){
            if(j>=0 && j<7){

                 listToshow=document.createElement('li');
                unorderList.appendChild(listToshow);
                unorderList.textContent=`${j+6}am:  ${this.generateRnum()} cookies`;
                document.write(`${j+6}am:  ${this.generateRnum()} cookies`);
                document.write('<br>');
                
        
            }
            else if(j>6 && j<14)
            {  let listToshow=document.createElement('li');
            unorderList.appendChild(listToshow);
            unorderList.textContent=`${j+6}am:  ${this.generateRnum()} cookies`;
            document.write(`${j-6}am:  ${this.generateRnum()} cookies`);
            document.write('<br>');
        
        
        }
            else {
                console.log('total')
           
            }
        
        }
        

        }
   
}

seattle.render();








let Tokyo={
    min:3,
    max:24,
    avg:1.2,nameOfLocation:'Tokyo',
    generateRnum:function(){
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        let random= Math.floor(Math.random() * (max - min + 1) + min);
        return  Math.floor(this.avg*random);
    },
    render:function(){
        let articleElement = document.createElement('article');
        SalmonCookies.appendChild(articleElement);
        let nameHeader=document.createElement('h2');
         nameHeader.textContent=this.nameOfLocation;
        articleElement.appendChild(nameHeader);
        let unorderList=document.createElement('ul');
        nameHeader.appendChild(unorderList);
        let listToshow;
        for (let j =0;j<15;j++){
            if(j>=0 && j<7){

                 listToshow=document.createElement('li');
                unorderList.appendChild(listToshow);
                unorderList.textContent=`${j+6}am:  ${this.generateRnum()} cookies`;
                document.write(`${j+6}am:  ${this.generateRnum()} cookies`);
                document.write('<br>');
                
        
            }
            else if(j>6 && j<14)
            {  let listToshow=document.createElement('li');
            unorderList.appendChild(listToshow);
            unorderList.textContent=`${j+6}am:  ${this.generateRnum()} cookies`;
            document.write(`${j-6}am:  ${this.generateRnum()} cookies`);
            document.write('<br>');
        
        
        }
            else {
                console.log('total')
           
            }
        
        }
        

        }
   
}


let Dubai={
    min:11,
    max:38,
    avg:3.7,nameOfLocation:'Dubai',
    generateRnum:function(){
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        let random= Math.floor(Math.random() * (max - min + 1) + min);
        return  Math.floor(this.avg*random);
    },
    render:function(){
        let articleElement = document.createElement('article');
        SalmonCookies.appendChild(articleElement);
        let nameHeader=document.createElement('h2');
         nameHeader.textContent=this.nameOfLocation;
        articleElement.appendChild(nameHeader);
        let unorderList=document.createElement('ul');
        nameHeader.appendChild(unorderList);
        let listToshow;
        for (let j =0;j<15;j++){
            if(j>=0 && j<7){

                 listToshow=document.createElement('li');
                unorderList.appendChild(listToshow);
                unorderList.textContent=`${j+6}am:  ${this.generateRnum()} cookies`;
                document.write(`${j+6}am:  ${this.generateRnum()} cookies`);
                document.write('<br>');
                
        
            }
            else if(j>6 && j<14)
            {  let listToshow=document.createElement('li');
            unorderList.appendChild(listToshow);
            unorderList.textContent=`${j+6}am:  ${this.generateRnum()} cookies`;
            document.write(`${j-6}am:  ${this.generateRnum()} cookies`);
            document.write('<br>');
        
        
        }
            else {
                console.log('total')
           
            }
        
        }
        

        }
   
}


let Paris={
    min:20,
    max:38,
    avg:2.3,nameOfLocation:'Paris',
    generateRnum:function(){
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        let random= Math.floor(Math.random() * (max - min + 1) + min);
        return  Math.floor(this.avg*random);
    },
    render:function(){
        let articleElement = document.createElement('article');
        SalmonCookies.appendChild(articleElement);
        let nameHeader=document.createElement('h2');
         nameHeader.textContent=this.nameOfLocation;
        articleElement.appendChild(nameHeader);
        let unorderList=document.createElement('ul');
        nameHeader.appendChild(unorderList);
        let listToshow;
        for (let j =0;j<15;j++){
            if(j>=0 && j<7){

                 listToshow=document.createElement('li');
                unorderList.appendChild(listToshow);
                unorderList.textContent=`${j+6}am:  ${this.generateRnum()} cookies`;
                document.write(`${j+6}am:  ${this.generateRnum()} cookies`);
                document.write('<br>');
                
        
            }
            else if(j>6 && j<14)
            {  let listToshow=document.createElement('li');
            unorderList.appendChild(listToshow);
            unorderList.textContent=`${j+6}am:  ${this.generateRnum()} cookies`;
            document.write(`${j-6}am:  ${this.generateRnum()} cookies`);
            document.write('<br>');
        
        
        }
            else {
                console.log('total')
           
            }
        
        }
        

        }
   
}


let Lima={
    min:2,
    max:16,
    avg:4.6,nameOfLocation:'Lima',
    generateRnum:function(){
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        let random= Math.floor(Math.random() * (max - min + 1) + min);
        return  Math.floor(this.avg*random);
    },
    render:function(){
        let articleElement = document.createElement('article');
        SalmonCookies.appendChild(articleElement);
        let nameHeader=document.createElement('h2');
         nameHeader.textContent=this.nameOfLocation;
        articleElement.appendChild(nameHeader);
        let unorderList=document.createElement('ul');
        nameHeader.appendChild(unorderList);
        let listToshow;
        for (let j =0;j<15;j++){
            if(j>=0 && j<7){

                 listToshow=document.createElement('li');
                unorderList.appendChild(listToshow);
                unorderList.textContent=`${j+6}am:  ${this.generateRnum()} cookies`;
                document.write(`${j+6}am:  ${this.generateRnum()} cookies`);
                document.write('<br>');
                
        
            }
            else if(j>6 && j<14)
            {  let listToshow=document.createElement('li');
            unorderList.appendChild(listToshow);
            unorderList.textContent=`${j+6}am:  ${this.generateRnum()} cookies`;
            document.write(`${j-6}am:  ${this.generateRnum()} cookies`);
            document.write('<br>');
        
        
        }
            else {
                console.log('total')
           
            }
        
        }
        

        }
   
}