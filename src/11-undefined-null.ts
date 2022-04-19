(()=>{
    // let myNumber: number = undefined;
    // let myString: string = null;
    let myNull :null = null;
    let myUndefined :undefined = undefined;

    let myNumber: number | null = null;
    myNumber= 12;
    
    let myString: string | undefined = undefined;
    myString = 'Hola';

    function hi(name: string|null){
        let hello = 'Hola';
        if(name){
            hello += name;
        }else{
            hello += 'nobody';
        }
        console.log(hello);

    }
    hi('Roger');
    hi('Emma')

    function hi2(name: string | undefined){
        let hello = 'hola';
        hello += name?.toLocaleLowerCase() || 'nobody';
        console.log(hello);

    }
    hi2('astrid');
    hi2('rocky')
})()