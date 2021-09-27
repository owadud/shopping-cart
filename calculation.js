
        
        //function handler
        document.getElementById("countIncrease").addEventListener("click", function () {
            iPhone("caseValue",true);
            
        });

        document.getElementById("countDecrease").addEventListener("click", function () {
            iPhone("caseValue", false);
            
        });




        document.getElementById("phone-plus").addEventListener("click", function () {
            iPhone("phoneNumber",true);
            
        });

        document.getElementById("phone-minus").addEventListener("click", function () {
            iPhone("phoneNumber", false);
            
        });

        function iPhone(id,Increase){
            const phoneCount = document.getElementById(id);
            
            const phoneNum = parseInt(phoneCount.value);
            let phoneAmount = phoneNum;
            if(Increase== true){
                phoneAmount = phoneNum +1;
            }
            if(Increase== false && phoneNum>1){
                phoneAmount = phoneNum -1;
        
            }
            phoneCount.value = phoneAmount;
            let totalPhonePrice;
            if(id=="caseValue"){
                 totalPhonePrice = phoneAmount* 59;
                 document.getElementById("case-total").innerText = totalPhonePrice;
            }
            if(id=="phoneNumber"){
                totalPhonePrice = phoneAmount* 1219;
                document.getElementById("iphonePrice").innerText = totalPhonePrice;
            }    

            calculate();
            
        }

        function calculate(){
            const caseCount = document.getElementById("caseValue");
            
            const caseNum = parseInt(caseCount.value);

            const phoneCount = document.getElementById("phoneNumber");
            
            const phoneNum = parseInt(phoneCount.value);

            const totalPrice = caseNum*59 + phoneNum * 1219;
            
            document.getElementById("subTotal").innerText = totalPrice;

            const tax = Math.round(totalPrice *0.1);

            document.getElementById("tax").innerText =tax;

            const finalTotal = totalPrice + tax;

            document.getElementById('finalTotal').innerText = finalTotal;

          



        }
        //    const countIncrease = document.getElementById("countIncrease");
        //    countIncrease.addEventListener("click",function(){
        //     const caseValue = document.getElementById("caseValue");
        //     const caseNum = parseInt(caseValue.value);
        //     const updateCount = caseNum+1;
        //     caseValue.value = updateCount;   

        //     const totalCount = 59* updateCount;

        //     document.getElementById("case-total").innerText = totalCount;



        //    });
        //    document.getElementById("countDecrease").addEventListener("click",function(){
        //        const castValue = document.getElementById("caseValue");
        //        const caseNum = parseInt(caseValue.value);
        //        const updateCount = caseNum-1;
        //        caseValue.value = updateCount; 
        //        const totalCount = 59* updateCount;
        //        document.getElementById("case-total").innerText = totalCount;

        //    })

        


        // function counter(isIncrease) {
            
        //     const caseAmount = document.getElementById("caseValue");
        //     const caseNum = parseInt(caseAmount.value);
            
        //     let updateCount = caseNum;
            

        //     if (isIncrease ==true) {
        //          updateCount = caseNum + 1;
                
        //     }
        //     if (isIncrease == false && caseNum > 1) {
        //          updateCount = caseNum - 1;
        //     }
        //     caseAmount.value = updateCount;
            
        //     const totalCount = 59 * updateCount;
        //     document.getElementById("case-total").innerText = totalCount;

        // };


    