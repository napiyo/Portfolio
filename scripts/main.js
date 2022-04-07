const app = document.querySelector("#app");
let userIp = "unknown";
const delay = ms => new Promise(res => setTimeout(res, ms));

var getIPAddress = function() {
    fetch('https://api.ipify.org?format=json')
        .then((resp) => resp.json())
        .then((ip) => {
            userIp = ip;
        });

};
getIPAddress()
let step = 0;
// step -0 -> user is not choosen to send msg
// step- 1 -> user selected send msg
//step -2 -> user has typed msg
// let stopDefaultNewLine = false;
app.addEventListener("keypress", async function(event) {
    // user is entering message- prevent default enter to show new line and get inputs

    if (event.key === "Enter") {
        if (step == 1) {
            const msg = document.querySelector('#msgInput');
            const msgDiv = document.querySelector('#msgDiv');

            if (!msg.value.trim()) {
                createCode("message not sent", "you didnt typed any message, so we didnt save it");
            } else {
                createText("<div class=\"animatedInfinite\">sending message ...</div>", "sendingmsgLoader");
                const inptforfocusonly = document.createElement('input');

                // inptforfocusonly.disabled = true;
                app.appendChild(inptforfocusonly);
                inptforfocusonly.focus();
                await sendMessage(msg.value.trim(), userIp);

                const sendingmsgLoader = document.querySelector('#sendingmsgLoader');
                app.removeChild(inptforfocusonly);
                app.removeChild(sendingmsgLoader);
                createText("Thanks for your feedback")
                    //reset
            }
            app.removeChild(msgDiv);
            await delay(150)
            new_line();
            step = 0;
        } else if (step == 0) {
            getInputValue();
            removeInput();
            await delay(150);
            if (step == 0) {
                new_line()
            }
        }


    }
});

app.addEventListener("click", function(event) {
    const input = document.querySelector("#commandinput");
   
    if (input) {
        input.focus();
    }
})


async function open_terminal() {
    createText("Welcome to my portfolio");
    await delay(700);
    createText("<div class=\"animated\" >Starting the server...</div>");
    await delay(4000);
    createText("<p class=\"helperText\">- You can run \"ls\" command to show all available commands</p>");
    await delay(300)
    createText("<p class=\"helperText\">- or to know how to run this terminal type \"help\"</p>");
    await delay(300)
    createText("<p class=\"helperText\">- To view my resume type \"resume\"</p>");

    new_line();
}


async function new_line() {
    await delay(700)
    const p = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    p.setAttribute("class", "path")
    p.textContent = "$ user";
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
    input.setAttribute('id','commandinput');
    div.appendChild(i);
    div.appendChild(input);
    app.appendChild(div);
    input.focus();

}

function removeInput() {
    const div = document.querySelector(".type");
    app.removeChild(div);
}

async function getInputValue() {

    const value = document.querySelector("#commandinput").value;
    if (value.toLocaleLowerCase() == "ls") {
        trueValue(value);

        // createCode("projects", "show My all projects");
        // createCode("about", "Who am I and what do I do.");
        // createCode("social", "All my social networks.");
        // createCode("ls", "show all available commands");
        // createCode("help", "to know how to use this terminal");
        // createCode("clear", "Clean the terminal.");
        // createCode("resume", "download my resume");
        // createCode("send msg", "send me feedback/message anonymously");
        const table = document.createElement('div');
        table.setAttribute('class', 'table')
        table.innerHTML = `
        <table>
  <tr>
    <th>Command</th>
    <th>Action</th>
   
  </tr>
  <tr>
    <td>ls</td>
    <td>show all available commands</td>
  
  </tr> 
  <tr>
    <td>projects</td>
    <td>show My all projects</td>
  
  </tr>
  <tr>
    <td>about</td>
    <td>Who am I and what do I do</td>
  </tr>
   <tr>
    <td>social</td>
    <td>All my social networks.</td>
  </tr>
   <tr>
    <td>send msg</td>
    <td>send me feedback/message anonymously</td>
  </tr>
   <tr>
    <td class="resumeTable">resume</td>
    <td>download my resume</td>
  </tr>
   <tr>
    <td>clear</td>
    <td>Clean the terminal.</td>
  </tr>
   <tr>
    <td>help</td>
    <td>to know how to use this terminal</td>
  </tr>
  
</table>`
        app.appendChild(table)


    } else if (value.toLowerCase().trim() == "send msg") {
        trueValue(value);
        createText(`<p class ="path"><i class="fas fa-comment-dots"></i> Please Enter your message/feedBack</p>`);


        step = 1;

        const div = document.createElement("div");
        div.setAttribute("id", "msgDiv")
        const i = document.createElement("i");
        i.setAttribute("class", "fas fa-angle-right icone")
        const msginput = document.createElement("input");
        msginput.setAttribute("id", "msgInput")
        div.appendChild(i);
        div.appendChild(msginput);
        app.appendChild(div);
        msginput.focus();


    } else if (value.toLowerCase().trim() == "help") {
        trueValue(value);
        createText(`<p class ="path">This is portfolio of Narendra Dewasi</p>
   
    - To know anything about me, simply type a command.<br>
    &nbsp;for example to know about me - (who I'm and what I do). type "about"<br>
    <p class ="path"><span>To know all available commands type "ls"</span>`)
    } else if (value.toLowerCase().trim() === "projects") {
        trueValue(value);
        createCode(`Bookias | E-commerce | M.E.R.N`, `
    <ul>
    <li>Bookias is an online Book Store</li>
    <li>Admin Panel, Payment, user profile, review, cancel orders, delete user, order tracking.. all E-commerce features</li>
    <li><a href="https://bookias.herokuapp.com/" target='_blank'>Visit website</a> &emsp;&emsp;|&emsp;&emsp; 
    <a href="https://github.com/napiyo/bookias-online-Book-Store" target='_blank'><i class='fab fa-github white'></i>&nbsp;GitHub</a>
    </li>
    `)
        createCode(`petMe | pet-Adoption Platform | React-Native,Firebase`, `
    <ul>
    
    <li>cross-platform mobile app where people can post request for adoption of animals</li>
<li> people send them request to adopt that pet, auther of pet request can accept any one of the requests for that pet</li>
<li>history/details of adopted pet can be seen in history tab</li>
   <li> <a href="https://github.com/napiyo/petME" target='_blank'><i class='fab fa-github white'></i>&nbsp;GitHub</a>
    </li>
    `)
        createCode(`chat App | Reactjs,Socket.io`, `
    <ul>
    <li>Real Time chat application - using Reactjs and socket.io</li>
    <li><a href="https://chat-by-napiyo.herokuapp.com/" target='_blank'>Visit website</a> &emsp;&emsp;|&emsp;&emsp; 
    <a href="https://github.com/napiyo/chat" target='_blank'><i class='fab fa-github white'></i>&nbsp;GitHub</a>
    </li>
    </ul>`)
        createText(`<p class="helperText"> There are lots of more intresting projects have a look  on my github <br> <a href='https://github.com/napiyo' target='_blank' class=\"helperText\"><i class='fab fa-github white'></i> github.com/napiyo</a> `)
    } else if (value.toLowerCase().trim() == "resume") {
        trueValue(value)
        window.open('./resume.pdf', '_blank');
        createText(`<p class="helperText"> resume pdf downloaded...</p>`)
    } else if (value.toLowerCase().trim() === "about") {
        trueValue(value);

        createText("<p class=\"path center\">Narendra Dewasi</p>")
        createText(`<p class="helperText center"> Self taught Coder -- Looking for internship/fullTime SDE roles`)
        createText(`<div class="center">--------------------------------</div>`)
        createCode("Education", `
    - Ramaiah Institute of Technology,Bengaluru,India<br>
    &emsp;&emsp;&emsp;<span class="helperText">B.E.(civil Engineering) ||  CGPA - 8<sup>*</sup> &emsp;&emsp;&emsp;2018-2022</span><br><br>
    &nbsp;- Shiv Jyoti sr. Sec. School, Kota,Rajasthan<br>
    &emsp;&emsp;&emsp;<span class="helperText">12th (PCM) || 89.4% (BSER)<sup>RAJASTHAN STATE BOARD</sup> &emsp;&emsp;&emsp;2017</span>
    
    `)
        createCode("Skills", "MongoDB, Express, React, Node, Java , JavaScript")
    } else if (value.toLowerCase().trim() === "social") {
        trueValue(value);
        createText("<a href='https://github.com/napiyo' target='_blank'><i class='fab fa-github white'></i> github.com/napiyo</a>")
        createText("<a href='https://www.linkedin.com/in/narendra_dewasi/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/narendra_dewasi</a>")
        createText("<a href='https://www.instagram.com/narendra_dewasi/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/narendra_dewasi</a>")
        createText("<a href='mailto:radioactivenarendra@gmail.com' target='_blank'><i class='fa fa-envelope'></i> radioactivenarendra@gmail.com</a>")
        createText("<a href='tel:+917976224104' target='_blank'><i class='fa fa-phone'></i> +91 7976224104</a>")
        createText("<a href='https://www.codechef.com/users/napiyo' target='_blank'><i class='fa fa-code'></i> Codechef - (3 stars) <i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i></a>")
        createText("<a href='https://leetcode.com/napiyo/' target='_blank'><i class='fa fa-code'></i> leetCode - 150+ problems</a>")
        createText("<a href='https://auth.geeksforgeeks.org/user/radioactivenarendra/practice/' target='_blank'><i class='fa fa-code'></i> Geeks For Geeks - 110+ problems</a>")

    } else if (value.toLowerCase().trim() === "clear") {
        document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
        document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
        const w = document.querySelectorAll('.table').forEach(e => e.parentNode.removeChild(e));
        // app.removeChild(w)
    } 
    else if(value.toLowerCase().trim()==='admin show msgs'){
        showmsgs()
    }
    else {
        falseValue(value);
        createText(`<p class="error">command not found: ${value} </P>`)
        createText(`<p class="helperText">type "ls" to show all available commands </p>`)

    }
}

function trueValue(value) {

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

function falseValue(value) {

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

function createText(text, id) {
    const p = document.createElement("p");
    if (id) {
        p.setAttribute("id", id)
    }
    p.innerHTML =
        text;
    app.appendChild(p);
    // delay(3500)
}

function createCode(code, text) {
    const p = document.createElement("p");
    p.setAttribute("class", "code");
    p.innerHTML =
        `${code} <br/><span class='text'> ${text} </span>`;
    app.appendChild(p);
}
async function showmsgs(){
    await fetch('/api/msg/showmsgs').then((res)=>{
        res.json()
    }).then((res)=>{
        console.log(res);
        console.log(res.data);
        for(i in res.data){
            createCode(i.sender+" - "+i.sentOn,i.message)
        }
    }).catch((e)=>{

        console.log(e);
    })
}
async function sendMessage(message, sender) {
    let _data = {
        message,
        'sender':sender.ip
    }
    await fetch('/api/msg/sendmessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: (JSON.stringify(_data)),
        }).then((res) => {
            res.json();
        }).then((res) => {
            console.log(res);
        })
        .catch((e) => {
            console.log(e);
        })
}
const gui = document.querySelector('.GUI');
const terminal = document.querySelector('.terminal');
async function closeterminal(){

    const app = document.querySelector('#app');
    const footer = document.querySelector('.footer');

    terminal.style.position = 'absolute';
    if(window.innerWidth <= 600){
        terminal.style.top='10px'
        console.log(window.innerWidth);
        
    }
    else{

        terminal.style.bottom='0px'
    }
    // terminal.style.left='0'
    app.style.display='none';
    terminal.style.width='250px';
    terminal.style.height='37px';
    footer.style.left='-100vw';
    gui.style.display='block';
    await delay(1000)
    gui.style.opacity=1;
    // open GUI mode
   

  
}
async function maximizeTerminal(){
    gui.style.opacity=0;
    await delay(1000);
    gui.style.display='none';
    // await delay(200)
    // const terminal = document.querySelector('.terminal');
    const app = document.querySelector('#app');
    const footer = document.querySelector('.footer');
    terminal.style.bottom='0px'
    // terminal.style.rigth='0'
    terminal.style.width='100%';

    terminal.style.height='500px';
    // await delay(500)
    app.style.display='block';
    footer.style.left='0'
    terminal.style.position = 'relative';
   
}

let terminalMode = document.getElementById('terminalMode');
terminalMode.addEventListener('click',()=>{
   if(terminalMode.checked){
       
       const soundopen = document.getElementById('winopensound');
       maximizeTerminal();
       soundopen.play()
    }
    else{
       const shutdownsound = document.getElementById('shutDownSound');

       closeterminal()
       shutdownsound.play();

    }

})




open_terminal();