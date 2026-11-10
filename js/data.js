const PROGRAMS=[
{id:"p1",t:"Leading High-Performing Teams",s:"Leadership",l:"Intermediate",h:12,r:4.8},
{id:"p2",t:"First-Time Manager Essentials",s:"Leadership",l:"Beginner",h:8,r:4.7},
{id:"p3",t:"Business Writing That Works",s:"Communication",l:"Beginner",h:6,r:4.6},
{id:"p4",t:"Presenting with Confidence",s:"Communication",l:"Intermediate",h:8,r:4.8},
{id:"p5",t:"Data Literacy for Everyone",s:"Data Skills",l:"Beginner",h:10,r:4.7},
{id:"p6",t:"Dashboards and Reporting",s:"Data Skills",l:"Intermediate",h:14,r:4.6},
{id:"p7",t:"Workplace Safety Essentials",s:"Compliance",l:"Beginner",h:4,r:4.5},
{id:"p8",t:"Data Privacy and Security",s:"Compliance",l:"Intermediate",h:5,r:4.6},
{id:"p9",t:"Consultative Selling",s:"Sales Training",l:"Intermediate",h:10,r:4.7},
{id:"p10",t:"Negotiation Mastery",s:"Sales Training",l:"Advanced",h:9,r:4.8},
{id:"p11",t:"Cloud Fundamentals",s:"Technical Skills",l:"Beginner",h:16,r:4.6},
{id:"p12",t:"Intro to Automation",s:"Technical Skills",l:"Intermediate",h:12,r:4.7}];
const EMPLOYEES=[{n:"Priya Sharma",d:"Marketing"},{ph:1,n:"Daniel Ortiz",d:"Finance"},{ph:4,n:"Meera Nair",d:"Operations"},{ph:3,n:"Tom Becker",d:"Sales"},{n:"Aisha Khan",d:"Engineering"},{n:"Luca Rossi",d:"Support"},{n:"Grace Lee",d:"HR"},{n:"Omar Haddad",d:"Product"}];
const TRAINERS=[
{ph:2,n:"Aisha Rahman",r:"Leadership coach",s:"Leadership",y:14,c:420,q:4.9},{ph:1,n:"Daniel Ortiz",r:"Data analytics lead",s:"Data Skills",y:11,c:360,q:4.8},
{ph:4,n:"Meera Nair",r:"Communication expert",s:"Communication",y:9,c:510,q:4.8},{ph:3,n:"Tom Becker",r:"Compliance specialist",s:"Compliance",y:16,c:300,q:4.7},

];
const CASES=[
{c:"Northwind Logistics",i:"Logistics",n:30,u:"%",m:"faster employee onboarding",t:"New hires reached full productivity a month sooner after moving role-based programs onto one HR dashboard."},
{c:"Globex Retail",i:"Retail",n:2.4,u:"×",m:"higher compliance completion",t:"Automatic reminders and one-click certificates removed manual follow-up across 120 stores."},
{c:"Initech Services",i:"Technology",n:18,u:"k",m:"training hours delivered",t:"Leadership and technical programs scaled to every team without adding administrative work."},
{c:"Vandelay Finance",i:"Finance",n:96,u:"%",m:"audit-ready records",t:"Completion tracking and downloadable certificates made yearly audits a same-day task."},
{c:"Stark Manufacturing",i:"Manufacturing",n:45,u:"%",m:"fewer safety incidents",t:"Frontline safety programs reached every shift, and completion was visible to HR in real time."},
{c:"Hooli Health",i:"Healthcare",n:3.1,u:"×",m:"faster certification renewals",t:"Renewal reminders and bulk enrollment cut the renewal cycle from weeks to days."}];
const SKILLIMG={Leadership:"trainer-team",Communication:"program-training","Data Skills":"skillrise-hr-dashboard",Compliance:"skillrise-certificate","Sales Training":"team-collaboration","Technical Skills":"program-digital-learning"};
const INDIMG={Logistics:"office-building",Retail:"team-collaboration",Technology:"program-digital-learning",Finance:"skillrise-hr-dashboard",Manufacturing:"program-training",Healthcare:"completion-certificate"};
