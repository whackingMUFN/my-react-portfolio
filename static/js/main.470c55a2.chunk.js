(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{23:function(e,t,i){},29:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i(1),c=i.n(s),n=i(15),r=i.n(n),o=(i(23),i(17)),l=i(8);var d=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),i=t[0],c=t[1];return Object(a.jsxs)("nav",{className:"navbar is-info",role:"navigation","aria-label":"main navigation",children:[Object(a.jsxs)("div",{className:"navbar-brand",children:[Object(a.jsx)(l.b,{class:"navbar-item",to:"/",children:Object(a.jsx)("figure",{className:"image is-32x32",children:Object(a.jsx)("img",{className:"is-rounded",src:"./images/logo.png",alt:"logo"})})}),Object(a.jsxs)("a",{onClick:function(){c(!i)},role:"button",className:"navbar-burger burger ".concat(i?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbarLinks",children:[Object(a.jsx)("span",{"aria-hidden":"true"}),Object(a.jsx)("span",{"aria-hidden":"true"}),Object(a.jsx)("span",{"aria-hidden":"true"})]})]}),Object(a.jsx)("div",{id:"navbarLinks",className:"navbar-menu ".concat(i?"is-active":""),children:Object(a.jsxs)("div",{className:"navbar-start",children:[Object(a.jsx)(l.b,{exact:!0,className:"navbar-item",to:"/",children:"Portfolio"}),Object(a.jsx)(l.b,{exact:!0,className:"navbar-item",to:"/about",children:"About"})]})})]})},h=[{id:1,title:"Eat Da Burger!",image:"./images/eat-da-burger.png",description:"Have you ever wanted to keep track of all the burgers you've consumed and have yet to consume? Then this is the app for you! Eat-Da-Burger allows users to add burgers via text-input and then devour them. Burgers devoured move to a separate list. All urgers added and devoured are stored in a SQL database table.",repo:"https://github.com/whackingMUFN/Eat-Da-Burger",live_site:"https://whispering-bayou-19745.herokuapp.com/",technologies:["HTML/CSS","JavaScript","MySQL & MySQL Workbench","Bootstrap","Node & NPM","VS Code","cmder"]},{id:2,title:"Employee Manager",image:"./images/viewAll.gif",description:"Use this application to manage your company's employees, roles, and departments. Employee Manager uses a series of CLI prompts that kick off queries to a MySQL database based on the user's input.",repo:"https://github.com/whackingMUFN/Employee_Manager",technologies:["JavaScript","Node & NPM","MySQL & MySQL Workbench"]},{id:3,title:"Jasmine-RPG",image:"./images/jasmine-rpg.gif",description:"Create a fantasy character to take on adventures or send to the fight pits! Adventures allow characters to find ancient relics, armor, or weapons that will boost character stats.",repo:"https://github.com/whackingMUFN/Jasmine-RPG",live_site:"https://team-jasmine-rpg.herokuapp.com/",technologies:["HTML/CSS","JavaScript/jQuery/Ajax","Node & NPM","MySQL & MySQL Workbench","Heroku"]},{id:4,title:"React Employee Directory",image:"./images/react-directory-base.png",description:"Construcuted with React, this application pulls in employee data from an API and maps each user to a row. Employees can be filtered by typing any portion of their name, phone, email, or birth year. Sorting by [A-Z] or [Z-A] can be performed on Name and Email, and by [0-9] or [9-0] Phone and DOB. Image is not a sortable item.",repo:"https://github.com/whackingMUFN/react-employee-directory",live_site:"https://whackingmufn.github.io/react-employee-directory/",technologies:["HTML/CSS","JavaScript","React","Node & NPM"]},{id:5,title:"Budget Tracker",image:"./images/budget-tracker.png",description:"Track your incoming and outgoing transactions on or offline! While offline, transactions are cached using indexedDB. As soon as the application goes online, the records in indexedDB are pushed to a mongo database.",repo:"https://github.com/whackingMUFN/Budget-Tracker",live_site:"https://radiant-chamber-05596.herokuapp.com/",technologies:["HTML/CSS","JavaScript","MongoDB","Node & NPM","Heroku"]},{id:6,title:"Worldwide COVID-19",image:"./images/worldwide-covid-19.png",description:"Delivers COVID-19 statistics, news articles, and visual data for a selected country by utilizing API calls with jQuery/Ajax.",live_site:"https://afazeez82.github.io/worldwidecovid19-githubio.com/",technologies:["HTML/CSS","UIKit","JavaScript/jQuery/Ajax","RapidAPI"]}],j=Object(s.createContext)(h);var b=function(e){var t,i=e.i,s=e.image,c=e.title,n=e.description,r=e.repo,o=e.live_site,l=e.technologies;return t=o?Object(a.jsx)("a",{href:o,rel:"noreferrer",target:"_blank",className:"card-footer-item",children:"Live Site"}):"",Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-image",children:Object(a.jsx)("figure",{className:"image is-2by1",children:Object(a.jsx)("img",{src:s,className:"card-img-top",alt:c})})}),Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("div",{className:"media-content",children:Object(a.jsx)("p",{className:"title is-centered notification is-warning",children:c})}),Object(a.jsxs)("div",{className:"content pt-2",children:[Object(a.jsx)("p",{children:n}),Object(a.jsx)("ul",{children:l.map((function(e,t){return Object(a.jsxs)("li",{className:"tech-li",children:[" ",e]},i)}))})]}),Object(a.jsxs)("footer",{className:"card-footer",children:[Object(a.jsx)("a",{href:r,rel:"noreferrer",target:"_blank",className:"card-footer-item",children:"Github Repository"}),t]})]})]},i)};var m=function(){var e=Object(s.useContext)(j);return console.log(e),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"level"}),Object(a.jsx)("div",{className:"columns is-multiline is-centered is-mobile",children:Object(a.jsx)(j.Provider,{value:e,children:e.map((function(e,t){return Object(a.jsx)("div",{className:"column is-6",children:e.live_site?Object(a.jsx)(b,{image:e.image,title:e.title,description:e.description,repo:e.repo,live_site:e.live_site,technologies:e.technologies}):Object(a.jsx)(b,{image:e.image,title:e.title,description:e.description,repo:e.repo,technologies:e.technologies})},t)}))})}),Object(a.jsx)("div",{className:"level"})]})};var u=function(){return Object(a.jsx)("footer",{className:"footer notification is-warning",children:Object(a.jsx)("div",{className:"content has-text-centered",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{className:"no-decoration",children:["GitHub Profile: ",Object(a.jsx)("a",{href:"https://github.com/whackingMUFN",target:"_blank",rel:"noreferrer",children:"Here"})]}),Object(a.jsx)("li",{className:"no-decoration",children:" || "}),Object(a.jsxs)("li",{className:"no-decoration",children:["LinkedIn: ",Object(a.jsx)("a",{href:"https://www.linkedin.com/in/calvin-freese-68376a121/",children:"Here "})]})]})})})};var p=function(){return Object(a.jsx)("section",{className:"section is-tall-container",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"columns about-container-bg",children:[Object(a.jsxs)("div",{className:"column",children:[Object(a.jsx)("h1",{className:"title notification is-info",children:" About Me"}),Object(a.jsx)("div",{className:"columns is-mobile is-centered",children:Object(a.jsxs)("div",{className:"column",children:[Object(a.jsx)("img",{className:"profile-img",src:"./images/Photo_of_Me.jpg",alt:"my face"}),Object(a.jsx)("h3",{className:"subtitle",children:"Full Stack Web Developer, cat dad, and video game fanatic."}),Object(a.jsx)("p",{className:"about-p",children:"Dedicated Full Stack Web Developer intent on providing thorough and creative solutions while using empathy, problem-solving, and leadership skills refined by years of working in the IT space supporting customers in retail, corporate, and distribution environments. Web development certificate achieved through University of Minnesota College of Continuing and Professional Studies, St. Paul, MN. Aim to deliver responsive websites, catered to the functional requirements of the client without sacrificing design by utilizing my skills in React, Express, and Node."}),Object(a.jsx)("p",{className:"about-p",children:" In my free time, I can be found buried beneath a pile of sci-fi/fantasy novels, jamming on my guitar, exploring the vast world of Hyrule, or amongst the crowd at a local music venue.  "})]})})]}),Object(a.jsxs)("div",{className:"column",children:[Object(a.jsx)("h1",{className:"title notification is-warning",children:"Contact Me"}),Object(a.jsx)("div",{className:"columns is-mobile",children:Object(a.jsx)("div",{className:"column",children:Object(a.jsxs)("ul",{className:"block-list has-radius is-dark is-outlined is-medium is-centered",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{class:"fa fa-phone-square"}),Object(a.jsx)("span",{children:" Phone Number:"}),Object(a.jsx)("a",{href:"tel:7638439369",children:" (763) 843-9369"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{class:"fa fa-envelope-square"}),Object(a.jsx)("span",{children:" Email Address:"}),Object(a.jsx)("a",{href:"mailto: calvin.freese@hotmail.com",children:" calvin.freese@hotmail.com"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{class:"fa fa-file"}),Object(a.jsx)("span",{children:" PDF Resume: "}),Object(a.jsx)("a",{href:"./Assets/Resume/CF-Resume-2020.pdf",rel:"noreferrer",target:"_blank",children:" Open"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{class:"fa fa-github-square"}),Object(a.jsx)("span",{children:" GitHub:"}),Object(a.jsx)("a",{href:"https://github.com/whackingMUFN",rel:"noreferrer",target:"_blank",children:" whackingMUFN"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{class:"fa fa-linkedin"})," ",Object(a.jsx)("span",{children:" LinkedIn:"}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/calvin-freese-68376a121/",rel:"noreferrer",target:"_blank",children:" Calvin Freese"})]})]})})})]})]})})})},g=(i(29),i(2));var f=function(){return Object(a.jsxs)(l.a,{basename:"/my-react-portfolio",children:[Object(a.jsx)(d,{}),Object(a.jsx)("main",{className:"is-tall",children:Object(a.jsxs)(g.c,{children:[Object(a.jsx)(g.a,{exact:!0,path:"/",component:m}),Object(a.jsx)(g.a,{path:"/about",component:p})]})}),Object(a.jsx)(u,{})]})},v=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,32)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;i(e),a(e),s(e),c(e),n(e)}))};i(30);r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),v()}},[[31,1,2]]]);
//# sourceMappingURL=main.470c55a2.chunk.js.map