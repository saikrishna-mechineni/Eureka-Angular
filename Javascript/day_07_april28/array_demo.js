
    // for regular loop

    let names = ['sai','krishna', 'mechineni','8374']
    for (let i = 0; i < names.length; i++){
        console.log(names[i])

    }

    console.log('----------------------');
    
    //for-in loop

    for(i in names){
        console.log((names[i]));
        
    }

    console.log('----------------------');

    //for-of loop
    for(val in names){
        console.log(val);
    }
    console.log('----------------------');

    //for-each menthod

    names.forEach((val,ind,arr) => {
        console.log(val,ind, arr);
    })

    console.log('=======================');

    
