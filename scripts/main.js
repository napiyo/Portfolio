
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome to my portfolio");
  await delay(700);
  createText("Starting the server...");
  await delay(500);
  createText("<p class=\"helperText\">- You can run \"ls\" command to show all available commands</p>");
  await delay(300)
  createText("<p class=\"helperText\">- or to know how to run this terminal type \"help\"</p>");
  await delay(300)
  createText("<p class=\"helperText\">- To view my resume type \"resume\"</p>");
 
  new_line();
}


async function new_line(){
  await delay(700)
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/napiyo";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value.toLocaleLowerCase() == "ls"){
    trueValue(value);
    
    createCode("projects", "show My all projects");
    createCode("about", "Who am I and what do I do.");
    createCode("social", "All my social networks.");
    createCode("ls", "show all available commands");
    createCode("help", "to know how to use this terminal");
    createCode("clear", "Clean the terminal.");
    createCode("resume", "download my resume");
    
  }
  else if(value.toLowerCase()=="help"){
    trueValue(value);
    createText(`<p class ="path">This is portfolio of Narendra Dewasi</p>
   
    - To know anything about me, simply type a command.<br>
    &nbsp;for example to know about me - (who I'm and what I do). type "about"<br>
    <p class ="path"><span>To know all available commands type "ls"</span>`)
  }

  else if(value.toLowerCase() === "projects"){
    trueValue(value);
    createCode(`Bookias | E-commerce | M.E.R.N`,`
    <ul>
    <li>Bookias is an online Book Store</li>
    <li>Admin Panel, Payment, user profile, review, cancel orders, delete user, order tracking.. all E-commerce features</li>
    <li><a href="https://bookias.herokuapp.com/" target='_blank'>Visit website</a> &emsp;&emsp;|&emsp;&emsp; 
    <a href="https://github.com/napiyo/bookias-online-Book-Store" target='_blank'><i class='fab fa-github white'></i>&nbsp;GitHub</a>
    </li>
    `)
    createCode(`petMe | pet-Adoption Platform | React-Native,Firebase`,`
    <ul>
    
    <li>cross-platform mobile app where people can post request for adoption of animals</li>
<li> people send them request to adopt that pet, auther of pet request can accept any one of the requests for that pet</li>
<li>history/details of adopted pet can be seen in history tab</li>
   <li> <a href="https://github.com/napiyo/petME" target='_blank'><i class='fab fa-github white'></i>&nbsp;GitHub</a>
    </li>
    `)
    createCode(`chat App | Reactjs,Socket.io`,`
    <ul>
    <li>Real Time chat application - using Reactjs and socket.io</li>
    <li><a href="https://chat-by-napiyo.herokuapp.com/" target='_blank'>Visit website</a> &emsp;&emsp;|&emsp;&emsp; 
    <a href="https://github.com/napiyo/chat" target='_blank'><i class='fab fa-github white'></i>&nbsp;GitHub</a>
    </li>
    </ul>`)
    createText(`<p class="helperText"> There are lots of more intresting projects have a look  on my github <br> <a href='https://github.com/napiyo' target='_blank' class=\"helperText\"><i class='fab fa-github white'></i> github.com/napiyo</a> `)
  }
  else if(value.toLowerCase()=="resume"){
    trueValue(value)
 window.open('./resume.pdf','_blank');
 createText(`<p class="helperText"> resume pdf downloaded...</p>`)
  }
  else if(value.toLowerCase() === "about"){
    trueValue(value);
    createText("<p class=\"path center\">Narendra Dewasi</p>")
    createText(`<p class="helperText center"> Self taught Coder -- Looking for internship/fullTime SDE roles`)
    createText(`<div class="center">--------------------------------</div>`)
    createCode("Education",`
    - Ramaiah Institute of Technology,Bengaluru,India<br>
    &emsp;&emsp;&emsp;<span class="helperText">B.E.(civil Engineering) ||  CGPA - 8<sup>*</sup> &emsp;&emsp;&emsp;2018-2022</span><br><br>
    &nbsp;- Shiv Jyoti sr. Sec. School, Kota,Rajasthan<br>
    &emsp;&emsp;&emsp;<span class="helperText">12th (PCM) || 89.4% (BSER)<sup>RAJASTHAN STATE BOARD</sup> &emsp;&emsp;&emsp;2017</span>
    
    `)
    createCode("Skills","MongoDB, Express, React, Node, Java , JavaScript")
  }
  else if(value.toLowerCase() === "social"){
    trueValue(value);
    createText("<a href='https://github.com/napiyo' target='_blank'><i class='fab fa-github white'></i> github.com/napiyo</a>")
    createText("<a href='https://www.linkedin.com/in/narendra_dewasi/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/narendra_dewasi</a>")
    createText("<a href='https://www.instagram.com/narendra_dewasi/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/narendra_dewasi</a>")
    createText("<a href='mailto:radioactivenarendra@gmail.com' target='_blank'><i class='fa fa-envelope'></i> radioactivenarendra@gmail.com</a>")
    createText("<a href='tel:+917976224104' target='_blank'><i class='fa fa-phone'></i> +91 7976224104</a>")
    createText("<a href='https://www.codechef.com/users/napiyo' target='_blank'><i class='fa fa-code'></i> Codechef - (3 stars) <i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i></a>")
    createText("<a href='https://leetcode.com/napiyo/' target='_blank'><i class='fa fa-code'></i> leetCode - 150+ problems</a>")
    createText("<a href='https://auth.geeksforgeeks.org/user/radioactivenarendra/practice/' target='_blank'><i class='fa fa-code'></i> Geeks For Geeks - 110+ problems</a>")

  }
  
  
  else if(value.toLowerCase() === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`<p class="error">command not found: ${value} </P>`)
    createText(`<p class="helperText">type "ls" to show all available commands </p>`)

  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
  // delay(3500)
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();