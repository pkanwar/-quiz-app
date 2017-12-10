

function question(txt,choice,answer)
{
	this.txt = txt;
	this.choice = choice;
	this.answer = answer;
}

var ques =[

	new question("Which one is not OOP Language ?",["(a) Java","(b) C#","(c) C++","(d) C"],"d"),
	new question("Which language is used for styling web pages?",["(a) HTML","(b) Jquery","(c) CSS","(d) XML"],"c"),
	new question("There are ___ main components of OOP",["(a) 1","(b) 6","(c) 2","(d) 4"],"d"),
	new question("Which language is used for Web App ?",["(a) PHP","(b) PYTHON","(c) JAVASCRIPT","(d) ALL"],"d"),
	new question("MVC is a ___ ",["(a) Language","(b) Library","(c) Framework","(d) All"],"c")

]

var index=0,len=0,score=0;

len = ques.length;

function display()
{
	var test = document.getElementById("options");
	var str = ques[index].txt;
	var num = index + 1;
	var dis = "<p id= 'question' >"+ str +"</p>"
	
	dis += "<input type='radio' name='choices' value='a' /> <span id='rad1'>" + ques[index].choice[0] + "</span> <br />";
	dis += "<input type='radio' name='choices' value='b' /> <span id='rad2'>" + ques[index].choice[1] + "</span> <br />";
	dis += "<input type='radio' name='choices' value='c' /> <span id='rad3'>" + ques[index].choice[2] + "</span> <br />";
	dis += "<input type='radio' name='choices' value='d' /> <span id='rad4'>" + ques[index].choice[3] + "</span> <br />";
	dis += "<div class='sub'> <button onclick='check_ans()' id='bt' >Submit Answer</button> </div>";
	
	dis += "<p id='progress'>"+"Question "+ num + " of "+ len +"</p>"
	test.innerHTML = dis;
	
}



function finish()
{
	var game_over =  "<h1> Result </h1>";
	game_over += "<h2 id='score' > Your Score : " + score + "</h2>";
	
	var ele = document.getElementById("quiz");
	ele.innerHTML = game_over;
}

function check_ans()
{
	var ch = document.getElementsByName("choices");
	var choice;
	var x = 0;
	
	for(var i=0; i<ch.length ; i++)
	{
		if(ch[i].checked)
		{
			choice = ch[i].value;
			x++;
		}
	}
	
	var ans = ques[index].answer;
	
	if(x!=0)
	{
		if(choice == ans)
		{
			score  = score + 4;
		}else{
			score = score - 1;
		}
	}
	
	index++;
	
	
	if(index ==  len)
	{
		finish();
	}
		display();
		
	
}




