<!DOCTYPE html>
<html lang="en">  

<head>
    <meta charset="UTF-8">
    <meta  name="author" content="Bel Oppong">
    <meta name="description" content="This page contains all the things I am learning how to create as I learn html">
    <title>My First Web Page</title>
    <link rel="icon" href="html5.png" type="image/x-icon">
    <link rel="stylesheet" href="main.css" type="text/css">
</head>

<body>
   <h1>My goals for the Year</h1>

   <hr>

   <nav>
        <ul>
            <li>
                <a href="#html">Learning HTML</a>
            </li>
            <li>
                <a href="#vacation">Planning a Vacation</a>
            </li>
        </ul>
   </nav>

   <hr>
   <section id="html">
        <h2> I'm Ready to Learn HTML</h2>
        <p>This is my first web page</p>
        <img src="img/html_img.jfif" alt="HTML5 LOGO" title="I am learning HTML5" width="300" height="300">
        <h3> My Daily Schedule</h3>
        <p>Let me tell you how:</p>
        <ol>
            <li>...I learn about web dev.</li>
            <li>...I plan my schedule.</li>
            <li>...I use resources from <abbr title="Mozilla Developer Network">
                    <a href="https://developer.mozilla.org/">MDN</a>
                </abbr>.</li>
        </ol> 

    </section>

    <hr>

    <section id="vacation">
        <h2>I Am Also Planning A Vacation</h2>
        <p>I've been working <em>really heard and really need a getaway</em>.</p> 
        <p>I live in <abbr title="Kansas">KS</abbr> so I want to visit a beach.</p>

        <h3>Places I would Like To Visit</h3>
        <ul>
            <li>
                <p>I've heard good things about the Caribbean.</p>
                <img src="img/caribbean.png" alt="Caribbean beach" title="I want to visit the Caribbean beach." width="400" height="300" loading="lazy">
            </li>
            <li>
                <p>I've heard good things about going here:</p>
                <address>
                    Margaritaville Island Reserve Rivera Cancun<br>
                    Bahia Petempich Pureto Morelos, Mexico<br>
                    Colonia Morelos, Mexico 77580
                </address>
            </li>   
        </ul>

        <!-- TODO: Add more places-->
        <h3>Places To Avoid</h3>
        <dl>
            <dt>North Pole</dt>
            <dd>I hear this is <strong>cold</strong>!</dd>
            
            <dt>South Pole</dt>
            <dd>This is also cold/<dd>

            <dt>Mountain Tops</dt>
            <dd>These are also cold</dd>
        </dl>   

    </section>
    <hr>
    &lt;&lt;&lt; &copy; <a href="about.html">Bel</a> &gt;&gt;&gt;
    <p>
        <a href="#">Back to top</a>
    </p>
</body>

</html>
