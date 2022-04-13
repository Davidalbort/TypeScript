(() => {
    let isEnable = true;
    // isEnable = 'as';
    // isEnable = 122;
    isEnable = false;

    let isNew: boolean = false;
    console.log('new',isNew);
    isNew = true;
    console.log('new',isNew);

    const random = Math.random();
    console.log('random',random);
    isNew = random > 0.5 ? true: false;
    console.log('isNew',isNew);

    const myBoolean: boolean = true;
})();