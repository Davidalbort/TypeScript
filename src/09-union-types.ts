(() =>{
    let userId: string | number;
    userId = 1222;
    userId = 'asaaa';

    function greeting (myText: string | number){
        if(typeof myText === 'string'){
            console.log(`string ${myText.toLowerCase()}`);

        }else{
            console.log(`string ${myText.toFixed(1)}`);
        }

    }
    greeting('Nicolas');
    greeting(12345);
})();