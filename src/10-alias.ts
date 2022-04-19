(()=>{
    // alias type
    type UserId = string | number | boolean;
    let userId: UserId;
    

    function greeting (userId: string | number){
        if(typeof userId === 'string'){
            console.log(`string ${userId.toLowerCase()}`);

        }else{
            console.log(`string ${userId.toFixed(1)}`);
        }

    }
    // literal types
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Sizes;
    shirtSize = 'XL';
    shirtSize = 'S'
})();