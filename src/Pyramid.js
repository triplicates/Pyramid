class Pyramid{
    constructor(rows){
        this.rowsCount = rows || 12;
        this.row = {className: "row", root: "pyramid"};
        this.brick = {className: "brick", root: this.row.className};
    }
    Errors(){
        let ERROR = [];

        if( isNaN(this.rowsCount) || typeof(this.rowsCount) != "number"){
            ERROR.push("ERROR: rows count can only be a number")
        } 

        ERROR.forEach(err => {
            throw new Error(err);
        })
    }
    createElement(_type, obj = { className: "block", root: "pyramid"}){
        let {className, root} = obj,
            container = document.querySelector(`.${root}`);
            
        let element = `<${_type} class=${className}></${_type}>`;
        container.insertAdjacentHTML("afterbegin", element)
    } 

    createRow(count = 1){
        for (let i = 0; i < count; i++) {
            this.createElement("div", this.row)
        }
    }

    createBrick(count = 1){
        for (let i = 1; i < count * 2; i++) {
           this.createElement("div", this.brick)
        }
    }

    isSimple(x){
        let result = false;

        if(x < 2) return;
        if(x === 2) result = true;

        for(let i = 2; i < x ; i++){
            if(x % i === 0){
                result = false;
                return;
            }
            else result = true;
        }
        return result;
    }

    controlNumbers(){
        let blocks = document.querySelectorAll(`.brick`);
            for (let i = 0; i < blocks.length; i++) { 
                blocks[i].textContent = i + 1;
                if(this.isSimple(Number(blocks[i].textContent))) {
                    blocks[i].classList.add('brick_marked');
                    
                } 
            }
    }

    createStructure(x){
        while(x >= 1){
            this.createRow();
            this.createBrick(x);
            x--;
        }
    }

    clearPyramid(){
        let wrapper = document.querySelector('.pyramid');

        while(wrapper.firstChild){
            wrapper.removeChild(wrapper.firstChild)
        }
        
    }

    createPyramid(){
        this.Errors();
        this.createStructure(this.rowsCount);
        this.controlNumbers();
    }
    
}