
const changeColor=()=>{
  let x=Math.floor(Math.random()*256);
  document.body.style.background="rgb("+x+",241,237)"
};


class QUOTES extends React.Component{
  constructor(props){
    super(props);
    this.state={
      author:"",
      text: ""
    }
    this.handleClick=this.handleClick.bind(this)
  }
  
  handleClick(){
    fetch("https://api.quotable.io/random")
    .then(response=>response.json())
    .then(data=>this.setState({
      author:data.author,
      text:data.content
    }))
    changeColor();
  }
  componentDidMount(){
    this.handleClick();
   }
  render(){
    return (
      <div>
        <p id="text">{this.state.text}</p>
        <p id="author">-{this.state.author}</p>
        
        <span class="con" >
          <a  href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
          <i class="fa fa-twitter-square btn btn-primary fa-2x " aria-hidden="true"></i> 
        </a>
        <button id="new-quote" onClick={this.handleClick} class="btn btn-primary">Change Quote</button>
        </span>
       
      </div>
    )
  }
}

 

const root=ReactDOM.createRoot(document.getElementById("quote-box"));
root.render(<QUOTES/>)

