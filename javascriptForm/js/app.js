const input = document.getElementById('input')

const calculate = document.getElementById('calculate')

const result = document.getElementById('result')


const  getSelectValue=()=>{
            var selectedValue = document.getElementById("list").value;
            return selectedValue
        }

calculate.addEventListener('click', (e)=>{
   let value =  getSelectValue();



if (value==='factorial'){
   let inputValue=  parseInt(input.value)
   let x= 1;
   for(let i = 1; i<= inputValue; i++ ){
      x*=+i
   }
   
   result.innerHTML=x
  

} 
if (value==='fibonacci'){
   let inputValue=  parseInt(input.value)
   let f= [];
   let n1=0, n2= 1, nextTerm;
   f.push(n1, n2)
   for(let i = 0; i< inputValue-2; i++ ){
      nextTerm = f[f.length-2]+f[f.length-1]
      
      f.push(nextTerm)     
      
   }
   console.log(f);
   result.innerHTML=f  
}

if(value==='leapYear'){
   let inputValue=  parseInt(input.value)
   console.log(inputValue);
   let x = inputValue%4
   console.log(x);
   let y = inputValue%400
   let z = inputValue%100   
   
   if(x!=0){  
      console.log('It not a leap Year');      
         result.innerHTML='<b>It not a leap Year</b>'
      
   }else{
      console.log('may be leap year');

         if(inputValue>=400 && z==0 && y!=0){
            console.log('not leap');
            result.innerHTML='<b>It not a leap Year</b>'
         }else if(inputValue>=400 && z==0 && y==0){
            // console.log('leap');
            result.innerHTML='<b>It a leap Year</b>'
         }else{
            // console.log('leap');
            result.innerHTML='<b>It a leap Year</b>'
         }


   }
}
if(value==='alphabetecallyOrder'){
   let inputValue=  input.value
   console.log(typeof(inputValue));
   let x= inputValue.replace(/\s/g, "").split('').sort().join('')
   console.log(inputValue.replace(/\s/g, "").split('').sort());
    result.innerHTML = x
}

e.preventDefault()
})

