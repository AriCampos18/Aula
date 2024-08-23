import { Component } from "react";

export default class Data extends Component{

    constructor(props){
        super(); //executa o construtor do pai
        this.props = props;
        this.dataAtual = new Date().toLocaleString();
    }
    
    pegaDataDe(timeZone){
        const dataAtual = new Date();
        let timeZoneFromDB = parseInt(timeZone); 
        let diferencaTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset();
        let milisecundos = parseInt(dataAtual.getTime() + diferencaTempo * 60 * 1000)
        console.log(milisecundos)
        return Date(milisecundos);
    }

    //fase de montagem
    componentDidMount(){
        console.log("O componente foi montado.");
        //Não é permitido atualizar o estado do componente de forma direta
        //this.state =  ...
        this.setState({
           dataAtual: new Date().toLocaleString() 
        });
    }

    componentDidUpdate(){
        console.log("O componente foi atualizado");
        setTimeout(()=>{
        this.setState({
                dataAtual: this.pegaDataDe(this.props.timeZone).toLocaleString() 
        });
        },1000);
    }

    //sobrescrita de metodo
    render(){
        return (
            <h1>{ this.props.texto || "" }{this.dataAtual}</h1> //dentro das chaves é javascript
                                            // se o valor de texto nao existir, vai exibir o que estiver nas aspas
        )
    }
}