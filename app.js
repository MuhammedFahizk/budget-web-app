let sum = 0 ;
let expsum = 0;
let count = 0;
    function add(){
        count++;
        const selectElement = document.getElementById("select-cat");
        const text = document.getElementById("details");
        var textvalue = text.value;
        const transaction = document.getElementById("trio");
        const tamount1 = document.getElementById("tramount");
        const item = document.getElementById("trdet");


        if(selectElement){
            let selectvalue = selectElement.value;
            if(selectvalue ===  "income"){
        const input = document.getElementById("amt");
        const result = document.getElementById("inc");
        const num = input.value;
        const parsedNum = parseFloat(num);

       

      
        if(!isNaN(parsedNum)){
            sum += parsedNum;
            result.textContent=""+sum;
            
            transaction.innerHTML="income";
            tamount1.innerHTML=""+parsedNum;
            item.innerHTML=""+textvalue;

                     
                  

        }
        balence();
        
        storeValue("income");
        input.value = "";
        text.value = "";


            }
            else{
                const exp = document.getElementById("amt");
                const expresult =document.getElementById("expc");
                const expnum =exp.value;
                const parsedexp = parseFloat(expnum);
                    if(!isNaN(parsedexp)){
                        expsum += parsedexp;
                        expresult.textContent =""+expsum;
                        transaction.innerHTML="Expense";
                         tamount1.innerHTML=""+parsedexp;
                     item.innerHTML=""+textvalue

                    
                     var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); 
                     
                     
                     data.labels.push(textvalue);
                     data.datasets[0].data.push(parsedexp);
                     data.datasets[0].backgroundColor.push(randomColor);
                    
                     myPieChart.update(); 

                    //  data1.labels.push(textvalue);
                    //  data1.datasets[0].data.push(parsedexp);
                    //  data1.datasets[0].backgroundColor.push(randomColor);

                    //  mypichart.update();
               

                    }
                    balence(); 
                    

                    storeValue("Expense");
                    exp.value = "";
                    text.value = "";


            }
        }
      
        
    }


    function balence(){
        const bal = document.getElementById("balence");
        let balence = 0;
        balence += sum ;
        balence -= expsum;
        bal.textContent = ""+balence;
        
    }
    var userInputArray = [];
    var inputammtarray =[];

    
    function storeValue(a) {
    
        var userInput = document.getElementById("details");
        var inputamt = document.getElementById("amt").value;
        

        
        var userValue = userInput.value;

        
        userInputArray.push(userValue);
        inputammtarray.push(inputamt);
        
        var valueTableBody = document.getElementById("valueTableBody");

        var newRow = valueTableBody.insertRow();
        var cell = newRow.insertCell(0);
        cell.innerHTML = +count;
        var cell1 = newRow.insertCell(1);
        cell1.innerHTML =  userValue;
        var cell2 = newRow.insertCell(2);
        cell2.innerHTML = inputamt;
        var cell3 = newRow.insertCell(3);
        cell3.innerHTML = a;



        cell1.style.textAlign = 'center'; 
        cell2.style.textAlign = 'center';   
        cell3.style.textAlign = 'center';  
        cell.style.textAlign = 'center'; 
        
        newRow.classList.add("display-grid")
        // cell1.style.padding = '80px';
        // cell2.style.padding = '80px';
        // cell3.style.padding = '80px';
        // cell.style.padding = '80px';        
    }
    var data = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [],
        }]
    };


    // var data1 = {
    //     labels:[],
    //     datasets:[{
    //         data:[],
    //         backgroundColor:[],
    //     }]
    // }
    // var ctx1 =document.getElementById('mypichart').getContext('2d');
    var ctx = document.getElementById('myPieChart').getContext('2d');
    // var mypichart = new Chart(ctx1,{
    //     type: 'pie',
    //     data:data1,
    //     Option: {
    //         responsive :true,
    //         maintainAspectRatio:false,
    //         title:{
    //             display:true,
    //             text: 'Expense chart',
    //             font: {
    //                 size: 16,
                    
    //             }

    //         }
    //     }
    // })

    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display:true,
                text: 'Expense chart',
                font: {
                    size: 16,
                    
                }
            }
        }
    });

    
