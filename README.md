<h1>CoderJs</h1>
<p><strong>Coderjs</strong> is an amazing js wrapper around <a href="https://prismjs.com">prismjs</a> (code highlighter) that lets you easily embed multple codes in html. That's mean you can also use your code in your website.</p>
<center><img src="https://raw.githubusercontent.com/DarkSecDevelopers/CoderJs/master/Demo/demo.png" /></center>
<h2>Demo</h2>
<p>You can see live demos below</p>
<p><a href="https://codepen.io/graysuit/pen/XWXaxjY">demo1</a><br /> <a href="https://codepen.io/graysuit/pen/LYGjgba">demo2</a><br /> <a href="https://codepen.io/graysuit/pen/GRovYrJ">demo3</a></p>
<h2>How to use (for community):</h2>
<p>Just open Builder/Coder.html, Select your settings and Click Generate.</p>
<p>It will generate html code automatically at bottom.</p>
<p>You can embed this code in any site or play locally with any broswer.</p>
<p>&nbsp;</p>
<h2>How to use (for developers):</h2>
<h5>Step:1 (Put code with settings)</h5>
<p>I am always use textarea for displaying codes,<br /> Because it don't need to escape characters,<br /> Currently, github don't allow running js,<br /> So we can't show live demo here.</p>
<pre><code>
&lt;textarea 
language="javascript" &lt;!-- Define your language                        --&gt;
index="1"             &lt;!-- At which plote should code go ?             --&gt;
display="block"       &lt;!-- Should code be displayed ?                  --&gt;
id="coderjs"          &lt;!-- Leave as it was. Wrapper will deal with it  --&gt;
&gt;
//You can embed any type of code here
//For example, I am using javascript
document.write("Hello World");
&lt;/textarea&gt;
</code></pre><br /><br /> 

<p><strong>*language</strong></p>
<p>Define name of language which you will put as code in textarea, Currently, <a href="https://github.com/DarkSecDevelopers/CoderJs/blob/master/Languages/languages.txt">these languages are suppoerted</a>,<br /> At a time, only language allowed for 1 textarea.<br /> Example:<strong> language="vbnet"</strong> , <strong>language="csharp"</strong> , <strong>language="cpp"</strong> , <strong>language="python"</strong></p>
<p><br /> <strong>*Index</strong></p>
<p>Define plot number where code should be embed,<br /> Let's suppose I have 3 code snippets,<br /> I want to show them all in one place with tabs,<br /> When specific tab pressed then specific language should be shown at a time,<br /> So I will have to give same plot number to all of them.<br /> Example: <strong>index="0"</strong> , <strong>index="4"</strong> , <strong>index="5"</strong> , <strong>index="8"</strong></p>
<p><br /> <strong>*Display</strong></p>
<p>Define that should your code be visible at startup.<br /> Example: <strong>display="none"</strong> , <strong>display="block"</strong></p>
<p><br /> <strong>*ID</strong></p>
<p><strong>id="coderjs"</strong> should remain as it was,<br /> It is for wrapper only, Wrapper will automatically detect textareas with id coderjs.</p>
<h5>Step:2 (Put script with settings)</h5>
<p>Add this code at the end of page.</p>
<pre><code>
&lt;script src=&quot;https://raw.githack.com/DarkSecDevelopers/CoderJs/master/Codes/script.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
//Choose your theme
//SetTheme(&quot;-okaidia&quot;);
//SetTheme(&quot;-solarizedlight&quot;);	 
//SetTheme(&quot;-coy&quot;);
//SetTheme(&quot;-dark&quot;);
//SetTheme(&quot;-funky&quot;);
//SetTheme(&quot;-tomorrow&quot;); 
//SetTheme(&quot;-twilight&quot;);
//SetTheme(&quot;&quot;); //Default theme

//Should tab be displayed ? 
//Yes = true and No = false
ShowTabs = true; //true or false 

//Don't touch, Leave as it was.
window.onload = StartAction();
&lt;/script&gt;
</code></pre>




<h2>Contact me:</h2>
<p>Please don't waste time in hello,hi. Just tell what you need or want.</p>
<ul>
<li>Facebook: <a href="https://fb.com/messages/t/gray.programmerz.5"><strong>gray.programmerz.5</strong></a></li>
<li>Email: <strong><a href="mailto:hackrefisher@gmail.com">hackrefisher@gmail.com</a></strong></li>
<li>Website: <a href="https://tiplava.blogspot.com/"><strong>tiplava</strong></a></li>
</ul>
<h1>I Love ALLAH + Holy Prophet + Islam and Pakistan.</h1>
