const input = document.getElementById('input')
const calculate = document.getElementById('calculate')
const result = document.getElementById('result')

const  getSelectValue=()=>{
            var selectedValue = document.getElementById("list").value;
            return selectedValue            
        }
calculate.addEventListener('click', (e)=>{
   e.preventDefault()
   let value =  getSelectValue();
   switch(value){
      case "factorial":{      
         inputValue=  parseInt(input.value)
         let x= 1;
         for(let i = 1; i<= inputValue; i++ ){
            x*=+i
            }   
         return result.innerHTML=x   
      }
      case 'fibonacci':{
         inputValue=  parseInt(input.value)
         let f= [];
         let n1=0, n2= 1, nextTerm;
         f.push(n1, n2)
         for(let i = 0; i< inputValue-2; i++ ){
            nextTerm = f[f.length-2]+f[f.length-1]      
            f.push(nextTerm)
         }
         return result.innerHTML=f
      }
      case 'leapYear':{
      inputValue=  parseInt(input.value);
      let x = inputValue%4;
      let y = inputValue%400
      let z = inputValue%100

      return x!=0 ? (result.innerHTML='<b>It not a leap Year</b>')
         : (
            inputValue>=400 && z==0 && y!=0 ? result.innerHTML='<b>It not a leap Year</b>' : (inputValue>=400 && z==0 && y==0) ? result.innerHTML='<b>It a leap Year</b>' :  result.innerHTML='<b>It a leap Year</b>'
            )
      }
      default: {
         let inputValue=  input.value;   
         let x= inputValue.replace(/\s/g, "").split('').sort().join('');
         return result.innerHTML = x;
      }
   }
})

