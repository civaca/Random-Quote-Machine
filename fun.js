const { useState, useEffect } = React

const changeColor=()=>{
  let x=Math.floor(Math.random()*256);
  document.body.style.background="rgb("+x+",241,237)"
};


function QUOTES2 (){
  //using Hooks
const[qt,setQt]=useState({author:"",text:""});
useEffect(()=>handleClick(),[]);


let handleClick=()=>{
  fetch("https://api.quotable.io/random")
  .then(response=>response.json())
  .then(data=>setQt({
    author:data.author,
    text:data.content
  })); changeColor()
}

return (
  <div>
    <p id="text">{qt.text}</p>
    <p id="author">{qt.author}</p>
    
    <span class="con" >
      <a  href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
      <i class="fa fa-twitter-square btn btn-primary fa-2x " aria-hidden="true"></i> 
    </a>
    <button id="new-quote" class="btn btn-primary" onClick={handleClick}>Change Quote</button>
    </span>
   
  </div>
);
};

const root=ReactDOM.createRoot(document.getElementById("quote-box"));
root.render(<QUOTES2 />)

