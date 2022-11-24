banner = [
  "██████╗ ██╗██╗   ██╗██╗   ██╗███████╗██╗  ██╗    ██╗   ██╗ █████╗ ██████╗  █████╗ ██╗   ██╗",
  "██╔══██╗██║╚██╗ ██╔╝██║   ██║██╔════╝██║  ██║    ╚██╗ ██╔╝██╔══██╗██╔══██╗██╔══██╗██║   ██║",
  "██████╔╝██║ ╚████╔╝ ██║   ██║███████╗███████║     ╚████╔╝ ███████║██║  ██║███████║██║   ██║",
  "██╔═══╝ ██║  ╚██╔╝  ██║   ██║╚════██║██╔══██║      ╚██╔╝  ██╔══██║██║  ██║██╔══██║╚██╗ ██╔╝",
  "██║     ██║   ██║   ╚██████╔╝███████║██║  ██║       ██║   ██║  ██║██████╔╝██║  ██║ ╚████╔╝",
  "╚═╝     ╚═╝   ╚═╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝       ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝  ╚═══╝",
];

const error=`Command not found.<br>`;

const subtext=`For a list of available commands type <span class="cmd-deco">help</span>`;

const help=`
<table>
<tr>
  <td class="cmd-deco">whoami</td>
  <td>Who is Piyush?</td>
</tr>
<tr>
  <td class="cmd-deco">education</td>
  <td>Where did I study?</td>
</tr>
<tr>
  <td class="cmd-deco">projects</td>
  <td>Coding Projects</td>
</tr>
<tr>
  <td class="cmd-deco">experience</td>
  <td>Work Experience</td>
</tr>
<tr>
  <td class="cmd-deco">skills</td>
  <td>Things I learned</td>
</tr>
<tr>
  <td class="cmd-deco">contact</td>
  <td>Hope to hear from you!</td>
</tr>
<tr>
  <td class="cmd-deco">download</td>
  <td>Download Resume</td>
</tr>
</table>`

const whoami=`
<div>Hii!! I am Piyush Yadav. A 2022 graduate from <i>IIT Roorkee</i></div>
<div>
  <ul>
    <li>A passionate, hard-working and goal-oriented person.</li>
    <li>Full Stack Developer and I love to experiment with the latest of tech.</li>
    <li>I consider myself to be quick and constant learner and can adapt to new tech stacks easily.</li>
  </ul>
</div>
`;

const education=`
<table>
<tr>
  <td class="cmd-deco">IIT Roorkee, 2018-2022</td>
  <td>B.Tech. Civil Engineering</td>
</tr>
<tr>
  <td class="cmd-deco">Modern Public School, Bhiwadi(CBSE)</td>
  <td>Class 12th - 90.8%</td>
</tr>
<tr>
  <td class="cmd-deco">Presidency The International School, Bhiwadi(CBSE)</td>
  <td>Class 10th - 10 CGPA</td>
</tr>
</table>`;

const projects=`
  <ul>
    <li><strong class="cmd-deco">Xflix | Crio.Do</strong> - Build backend for a video sharing platform using Node.js. Implemented the functionality of searching by title, filtering using Genre and Content Rating including sorting by Views and Release Date.<br>
    <b>Tech Stack: Node.js, Express.js, MongoDb, Mongoose</b></li>
    <li><strong class="cmd-deco">Qtrip | Crio.Do</Strong> - Created 3 different web pages for a travelling web app using HTML, CSS and Bootstrap and made them dynamic using Javascript.<br>
    <b>Tech Stack: HTML, CSS, JavaScript, Bootstrap, REST APIs, DOM Manipulation</b></li>
    <li><strong class="cmd-deco">Travel Behaviour Modelling | IIT Roorkee</strong> - Conducted a study to see the implementation of car-free days in the campus. <br>Formed a regression equation using MATLAB for predicting the driving factors for people's choices. Created a Heatmap to showcase the findings.</li>
  </ul>`;

const experience=`
<div>
  <b class="cmd-deco">Jio Platforms | SDE-1 (July 2022 - Present)</b><br>
  <p> -> Worked on the development of Coupon Store Web Application using Spring Boot which is a unified platform to add, update and activate different coupons.<br>
  -> Worked in invenotry management team of JioMart which provided web applications to push and update items.<br>
  Tech Stack: Spring Boot, MySql</p>
</div>`;

const skills=`
<div>
  <ul>
    <li><b>Languages: </b>Java, C++, JavaScript, HTML, CSS</li>
    <li><b>Software Packages: </b>Spring Boot, Node.js, Express.js, MySQL, MongoDb, Mongoose, Git</li>
  </ul>
</div>`;

const contact=`
<div>
-><b>Email: </b><a href="mailto:pyadav2@ce.iitr.ac.in" target="_blank">pyadav2@ce.iitr.ac.in</a><br>
-><b>LinkedIn: </b><a href="https://www.linkedin.com/in/piyush-yadav-a2590416a/" target="_blank">https://www.linkedin.com/in/piyush-yadav-a2590416a/</a><br>
</div>`;

const resume=`
<p>Downloading Resume....<br>
If you are facing any problem, then click <a href="assets/resume.pdf" target="_blank">HERE</a> to download</p>`;

