
const changeColor=()=>{
  let x=Math.floor(Math.random()*256);
  document.body.style.background="rgb("+x+",241,237)"
};


function QUOTES2 (){
const[qt,setQt]=useState("gg");

return (
  <div>
    <p id="text">{qt}</p>
    <p id="author">{qt}</p>
    
    <span class="con" >
      <a  href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
      <i class="fa fa-twitter-square btn btn-primary fa-2x " aria-hidden="true"></i> 
    </a>
    <button id="new-quote" class="btn btn-primary">Change Quote</button>
    </span>
   
  </div>
);
}

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>
}

 

const root=ReactDOM.createRoot(document.getElementById("quote-box"));
root.render(<FavoriteColor />)

