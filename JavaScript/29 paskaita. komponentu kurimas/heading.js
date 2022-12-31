export default class Heading{
  constructor(props){
    this.props = props;
    return this.render();
  }

  render = () =>{
    this.htmlElement = document.createElement(`h${this.props.dydis}`);
    this.textElement = document.createTextNode(this.props.tekstas);   
    this.htmlElement.append(this.textElement);

    if(this.props.atributai){
      Object.keys(this.props.atributai).forEach(raktas => {
        this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
      });
    }

    return this.htmlElement;
  }
}


export const helloWorld = () =>{
  console.log('hello world')
}

export const tavoVardas = () => {
  console.log('tavo vardas Lukas')
}