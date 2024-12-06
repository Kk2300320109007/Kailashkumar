function Roll_nu(num,delay,nextroll){
    setTimeout(()=>{
        console.log("Roll no. is -> " , num);
        if(nextroll)nextroll();
    },delay);
}
Roll_nu(12,400,()=>{
    Roll_nu(13,500,()=>{
        Roll_nu(14,600,()=>{
            Roll_nu(15,700,()=>{
                Roll_nu(16,800,()=>{
                    Roll_nu(17,900,()=>{

                    });

                });

            });

        });

    });

});