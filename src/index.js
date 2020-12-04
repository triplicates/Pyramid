function control(){
    let btn = document.querySelector('.header__counter');

    btn.addEventListener('change', () => {
        let rows = +btn.value;
        if(rows > btn.max || rows < btn.min){
            btn.classList.add('header__counter_error')
            setTimeout(() => {btn.classList.remove('header__counter_error')}, 500);
            return;
        } else{
            let instance = new Pyramid(rows);
            instance.clearPyramid();
            instance.createPyramid();
        }
       
    })
    
}; control();







