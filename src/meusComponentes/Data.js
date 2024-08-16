import { Component } from "react";

export default class Data extends Component{

    constructor(props){
        super(); //executa o construtor do pai
        this.props = props;
        this.dataAtual = new Date().toLocaleString();
    }

    //fase de montagem
    componentDidMount(){ 
        console.log("O componente foi montado.");
        
    }

    componentDidUpdate(){
        console.log("O componente foi atualizado.");
    }

    //sobrescrita de metodo
    render(){
        return (
            <h1>{ this.props.texto || "" }{this.dataAtual}</h1> //dentro das chaves é javascript
                                            // se o valor de texto nao existir, vai exibir o que estiver nas aspas
        )
    }
}