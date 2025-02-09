class Component {
    constructor(options){
        this.el=options.el;
        this.data=options.data;
        this.template=options.template;
    }
    render(){
        this.el.innerHTML=this.template(this.data);
    }
    setData(obj){
        for(let key in obj){
            this.data[key]=obj[key];
        }
    }
    getData(){
        return this.data;
    }
}