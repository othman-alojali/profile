@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;700;900&display=swap');


*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Tajawal',sans-serif;
}

html{

    scroll-behavior:smooth;

}

body{

    min-height:100vh;
    background:var(--bg);
color:var(--text);
    overflow-x:hidden;

}


header{

    position:fixed;
    top:0;
    left:0;

    width:100%;
    height:80px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    padding:0 7%;

    background:rgba(2,6,23,.75);
    backdrop-filter:blur(18px);

    border-bottom:1px solid rgba(255,255,255,.08);

    z-index:9999;

}


.logo{

    font-size:35px;
    font-weight:900;

    color:var(--primary);

}


.logo span{

    color:var(--text);

}



nav a{

     text-decoration:none;
    color:var(--text);

    font-size:18px;
    font-weight:600;

    padding:8px 0;

    transition:.3s;

}
nav{

    display:flex;
    align-items:center;
    gap:35px;

}
nav a::after{

    content:"";

    position:absolute;

    right:0;

    bottom:0;

    width:0;

    height:2px;

    background:var(--primary);

    transition:.3s;

}
nav a:hover::after{

    width:100%;

}

nav a:hover{

   color:var(--primary);

}



.theme{

    background:var(--card);
    border:1px solid #334155;

    width:45px;
    height:45px;

    border-radius:50%;

color:var(--text);

    cursor:pointer;

}




.hero{

    text-align:center;

    padding-top:180px;

}

.nav-profile{

opacity:0;
transform:translateY(-15px);

display:flex;
align-items:center;
gap:10px;

transition:.45s ease;

}

.nav-profile img{

width:42px;
height:42px;
border-radius:50%;

}



header.scrolled .nav-profile{

opacity:1;

transform:translateY(0);

}



.hero-profile{

transition:.45s ease;

}



header.scrolled ~ .hero .hero-profile{

opacity:0;

transform:scale(.7);

}

.profile-box{

    width:180px;
    height:180px;

    margin:auto;

    padding:5px;

    border-radius:50%;

    background:linear-gradient(
    45deg,
    #38bdf8,
    #2563eb
    );

}

.logo{

display:flex;
align-items:center;
gap:12px;

}

#navAvatar{

width:0;
height:0;

border-radius:50%;

opacity:0;

transition:.45s ease;

}

.logo h3{

margin:0;
color:#38bdf8;

}

.logo small{

display:none;

font-size:13px;

color:#94a3b8;

}
header.scrolled{

height:65px;

background:rgba(3,7,18,.88);

backdrop-filter:blur(25px);

box-shadow:0 5px 25px rgba(0,0,0,.35);

}

header.scrolled #navAvatar{

width:42px;
height:42px;

opacity:1;

}

header.scrolled .logo small{

display:block;

}
.profile-box img{

    width:100%;
    height:100%;

    border-radius:50%;

    object-fit:cover;

    border:5px solid #030712;

}



.hero h1{

    font-size:55px;

    margin-top:30px;

}



.hero h2{

    margin:20px;

   color:var(--primary);

}



.hero p{

    max-width:650px;

    margin:auto;

    color:#cbd5e1;

    font-size:18px;

    line-height:2;

}



.buttons{

    margin-top:35px;

}



.btn{

    display:inline-block;

    padding:15px 35px;

    border-radius:12px;

    margin:10px;

    text-decoration:none;

    cursor:pointer;

}



.primary{

    background:#38bdf8;

    color:#00111c;

}



.secondary{

    background:var(--card);

    color:var(--text);

    border:1px solid #334155;

}



.social{

    margin-top:40px;

}



.social a{

    font-size:25px;

    margin:15px;

   color:var(--text);

    transition:.3s;

}


.social a:hover{

    color:var(--primary);

}



.glow{

    position:absolute;

    width:400px;
    height:400px;

    filter:blur(120px);

    z-index:-1;

}



.glow1{

    background:#2563eb;

    top:0;
    right:0;

}



.glow2{

    background:#06b6d4;

    bottom:0;
    left:0;

}
/* Sections */

section{
    width:85%;
    margin:120px auto;
	
	 scroll-margin-top:120px;
}



.section-title{

    text-align:center;
    margin-bottom:50px;
 scroll-margin-top:110px;
}


.section-title h2{

    font-size:40px;
    color:var(--primary);

}



.section-title p{

    color:#94a3b8;

}



/* About */


.about-card{

    background:rgba(255,255,255,0.05);

    backdrop-filter:blur(15px);

    border:1px solid rgba(255,255,255,.1);

    padding:40px;

    border-radius:25px;

}


.about-card p{

    font-size:20px;

    line-height:2;

    color:#cbd5e1;

}



.info{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:20px;

    margin-top:35px;

}



.info div{

    background:var(--card);

    padding:20px;

    border-radius:15px;

}



.info span{

    display:block;

    color:#94a3b8;

}



.info strong{

    display:block;

    margin-top:10px;

}





/* Statistics */


.stats{

    display:grid;

    grid-template-columns:repeat(4,1fr);

    gap:25px;

}



.stat-card{


background:rgba(255,255,255,.05);

border:1px solid rgba(255,255,255,.1);

padding:26px;

border-radius:20px;

text-align:center;

transition:.3s;


}



.stat-card:hover{

transform:translateY(-10px);

border-color:var(--primary);

}



.stat-card h3{

font-size:45px;

color:#38bdf8;

}



/* Skills */


.skill-container{


display:grid;

grid-template-columns:repeat(4,1fr);

gap:25px;


}



.skill-card{


background:var(--card);

padding:30px;

border-radius:20px;

text-align:center;


}



.skill-card i{

font-size:35px;

color:#38bdf8;

}



.skill-card h3{

margin:20px 0;

}



.progress{

height:8px;

background:#334155;

border-radius:10px;

overflow:hidden;


}



.progress span{

display:block;

height:100%;

background:#38bdf8;

border-radius:10px;


}
/* Projects */


.projects-container{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:30px;

}



.project-card{


background:rgba(255,255,255,.05);

border:1px solid rgba(255,255,255,.1);

border-radius:25px;

overflow:hidden;

transition:.4s;


}



.project-card:hover{

transform:translateY(-15px);

border-color:#38bdf8;

box-shadow:0 20px 40px rgba(0,0,0,.4);


}




.project-image{

height:220px;

overflow:hidden;

}



.project-image img{

width:100%;

height:100%;

object-fit:cover;

transition:.5s;

}



.project-card:hover img{

transform:scale(1.1);

}




.project-content{

padding:25px;

}



.project-content h3{

font-size:25px;

color:var(--text);

margin-bottom:15px;

}



.project-content p{

color:#cbd5e1;

line-height:1.8;

}



.tags{

margin:20px 0;

display:flex;

gap:8px;

flex-wrap:wrap;

}



.tags span{

background:var(--card2);

padding:7px 12px;

border-radius:20px;

font-size:14px;

color:#38bdf8;

}




.project-buttons{

display:flex;

gap:15px;

}



.project-buttons a{


text-decoration:none;

color:var(--text);

background:var(--card2);

padding:10px 18px;

border-radius:10px;

transition:.3s;


}



.project-buttons a:hover{

background:#38bdf8;

color:#00111c;

}
/* Certificates */


.certificate-container{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:25px;

}



.certificate-card{


background:rgba(255,255,255,.05);

padding:35px;

border-radius:20px;

text-align:center;

border:1px solid rgba(255,255,255,.1);

transition:.3s;


}


.certificate-card:hover{

transform:translateY(-10px);

border-color:#38bdf8;

}



.certificate-card i{

font-size:40px;

color:var(--primary);

margin-bottom:20px;

}



.certificate-card p{

color:#94a3b8;

margin:15px;

}



.certificate-card a{

color:var(--primary);

text-decoration:none;

}





/* Timeline */


.timeline{

position:relative;

max-width:800px;

margin:auto;

}



.timeline::before{

content:"";

position:absolute;

right:50%;

width:3px;

height:100%;

background:#38bdf8;

}



.timeline-item{

position:relative;

margin:50px 0;

}



.dot{

width:20px;

height:20px;

background:#38bdf8;

border-radius:50%;

position:absolute;

right:calc(50% - 10px);

}



.timeline-content{


background:var(--card);

padding:25px;

border-radius:20px;

width:45%;

}



.timeline-item:nth-child(even)
.timeline-content{

margin-right:auto;

}




/* Contact */


.contact-box{


max-width:600px;

margin:auto;

display:flex;

flex-direction:column;

gap:20px;


}



.contact-box input,
.contact-box textarea{


background:var(--card);

border:1px solid #334155;

padding:15px;

border-radius:12px;

color:var(--text);

font-size:16px;

}



.contact-box textarea{

height:150px;

resize:none;

}



.contact-box button{

background:#38bdf8;

border:none;

padding:15px;

border-radius:12px;

font-size:18px;

cursor:pointer;

}




/* Footer */


footer{

text-align:center;

padding:40px;

background:#020617;

}



footer h3{

font-size:35px;


color:var(--primary);

}


footer p{

color:#94a3b8;

margin-top:10px;

}
/* ===========================
   Dark Mode (Default)
=========================== */

:root{

    --bg:#030712;
    --card:#111827;
    --card2:#1e293b;

    --text:#ffffff;
    --text2:#cbd5e1;

    --primary:#38bdf8;

    --border:#334155;

}


/* ===========================
   Light Mode
=========================== */

body.light{

    --bg:#f8fafc;

    --card:#ffffff;

    --card2:#f1f5f9;

    --text:#111827;

    --text2:#475569;

    --primary:#2563eb;

    --border:#d1d5db;

}
