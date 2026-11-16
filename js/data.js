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
{n:"Aisha Rahman",r:"Leadership coach",s:"Leadership",y:14,c:420,q:4.9,im:"trainer-aisha"},
{n:"Daniel Ortiz",r:"Data analytics lead",s:"Data Skills",y:11,c:360,q:4.8,im:"trainer-daniel"},
{n:"Meera Nair",r:"Communication expert",s:"Communication",y:9,c:510,q:4.8,im:"trainer-meera"},
{n:"Tom Becker",r:"Compliance specialist",s:"Compliance",y:16,c:300,q:4.7,im:"trainer-tom"},
{n:"Sofia Marin",r:"Sales performance coach",s:"Sales Training",y:12,c:440,q:4.9,im:"trainer-sofia"},
{n:"Nadia Farouk",r:"Executive mentor",s:"Leadership",y:18,c:390,q:4.9,im:"trainer-nadia"},
{n:"Hannah Lee",r:"Cloud architect",s:"Technical Skills",y:15,c:280,q:4.7,im:"trainer-hannah"},
{n:"Lena Hart",r:"BI consultant",s:"Data Skills",y:8,c:330,q:4.6,im:"trainer-lena"}];
const CASES=[
{c:"National logistics company",i:"Logistics",n:30,u:"%",m:"faster employee onboarding",t:"New hires reached full productivity a month sooner after moving role-based programs onto one HR dashboard."},
{c:"Retail chain",i:"Retail",n:2.4,u:"×",m:"higher compliance completion",t:"Automatic reminders and one-click certificates removed manual follow-up across 120 stores."},
{c:"Technology services firm",i:"Technology",n:18,u:"k",m:"training hours delivered",t:"Leadership and technical programs scaled to every team without adding administrative work."},
{c:"Financial services firm",i:"Finance",n:96,u:"%",m:"audit-ready records",t:"Completion tracking and downloadable certificates made yearly audits a same-day task."},
{c:"Manufacturing group",i:"Manufacturing",n:45,u:"%",m:"fewer safety incidents",t:"Frontline safety programs reached every shift, and completion was visible to HR in real time."},
{c:"Healthcare network",i:"Healthcare",n:3.1,u:"×",m:"faster certification renewals",t:"Renewal reminders and bulk enrollment cut the renewal cycle from weeks to days."}];
const SKILLIMG={Leadership:"chess-mirror",Communication:"together","Data Skills":"typing-laptop",Compliance:"e-learning","Sales Training":"woman-phone","Technical Skills":"code-sticky"};
const INDIMG={Logistics:"globe-network",Retail:"team-library",Technology:"code-sticky",Finance:"chess-mirror",Manufacturing:"crowd-above",Healthcare:"learner-woman"};
const PDET={
Leadership:{a:"Managers, team leads and high-potential employees",o:["Coach and give feedback with confidence","Make clear decisions under pressure","Lead teams through change"],m:["Leading yourself first","Coaching conversations","Decision making","Leading through change"]},
Communication:{a:"Anyone who writes, presents or works across teams",o:["Write clear, concise business messages","Present ideas with confidence","Handle difficult conversations well"],m:["Clear writing","Structuring a message","Presenting and storytelling","Difficult conversations"]},
"Data Skills":{a:"Analysts, managers and anyone who works with numbers",o:["Read and question data correctly","Build simple dashboards and reports","Turn findings into decisions"],m:["Data literacy basics","Spreadsheets in practice","Dashboards and charts","Telling the story with data"]},
Compliance:{a:"All employees, with role-based tracks for managers",o:["Understand your legal and policy duties","Spot and report risks early","Stay audit-ready with proof of completion"],m:["Policies and your duties","Recognising risk","Reporting and escalation","Assessment and certificate"]},
"Sales Training":{a:"Sales reps, account managers and customer-facing teams",o:["Run better discovery conversations","Handle objections calmly","Negotiate fair, lasting deals"],m:["Discovery and listening","Positioning value","Handling objections","Negotiation and closing"]},
"Technical Skills":{a:"Engineers, IT staff and technical teams",o:["Understand core concepts and terms","Apply tools in real tasks","Automate repeated work safely"],m:["Core concepts","Hands-on labs","Working with tools","Capstone project"]}};
const BLOGS=[
{id:"b1",img:"team-library",t:"How to build a learning culture in 90 days",c:"Learning culture",d:"Oct 28, 2026",m:6,x:"A simple three-step plan HR teams can start this quarter.",p:["A learning culture does not start with a platform. It starts with managers who make time for it and employees who can see why it matters.","In the first 30 days, pick two skill areas that connect directly to business goals and enroll a pilot group. In the next 30, share progress openly so teams see the momentum. In the final 30, recognise completions and collect feedback.","Keep it light. Short, role-based programs with visible certificates do more than a long catalogue nobody opens."]},
{id:"b2",img:"skill-training",t:"Five metrics HR should track for every training program",c:"Measuring outcomes",d:"Oct 14, 2026",m:5,x:"Completion is only the start. Here is what else to measure.",p:["Completion rate tells you who finished. It does not tell you whether the program worked.","Track enrollment-to-start time, completion rate, time to complete, assessment scores and manager feedback after 60 days. Together they show where people get stuck and which programs deserve more budget.","Review the numbers monthly and share one clear insight with leaders each time."]},
{id:"b3",img:"learner-woman-desk",t:"Onboarding that sticks: what the first week should include",c:"Onboarding",d:"Sep 30, 2026",m:4,x:"Short, structured learning in week one pays off for months.",p:["New hires decide quickly whether a company invests in them. A clear first-week learning plan answers that question.","Include a welcome program, role-specific skills, a compliance basics module and a check-in with their manager. Assign everything in one step so nothing is missed.","Track completion from day one so you can step in early if someone falls behind."]},
{id:"b4",img:"graduation-hologram",t:"Why certificates still matter for compliance training",c:"Compliance",d:"Sep 12, 2026",m:4,x:"Proof of completion makes audits faster and less stressful.",p:["Auditors want evidence, not promises. A dated certificate for each employee is the simplest proof.","Automatic reminders and one-click downloads turn a stressful audit week into a same-day task.","Store certificates centrally and keep records for the period your industry requires."]},
{id:"b5",img:"learner-man-desk",t:"Choosing the right skill areas for your team this year",c:"Skills planning",d:"Aug 26, 2026",m:7,x:"Start from business goals, then match programs to roles.",p:["List the three business goals that matter most this year, then ask which skills each one depends on.","Match those skills to roles and levels. A new manager and a senior leader need different leadership programs.","Review the plan every quarter. Skills needs change faster than most budgets do."]},
{id:"b6",img:"globe-network",t:"Making billing and reporting simple for L&D teams",c:"Operations",d:"Aug 8, 2026",m:3,x:"One dashboard for invoices, seats and usage saves hours every month.",p:["Finance asks the same questions every month: how many seats, what was used, what is due.","Keeping invoices, seat counts and payment status in one place lets you answer in minutes.","Download invoices when you need them and keep a simple record of programs per team."]}];
const INTEGRATIONS=[
{id:"hris",n:"HRIS",d:"Sync employees and departments from your HR system so enrollments always use up-to-date people data.",b:["Import employees and teams automatically","Keep departments and managers in sync","Remove leavers from programs automatically"]},
{id:"payroll",n:"Payroll",d:"Connect training records with payroll so completed certifications can support pay and bonus decisions.",b:["Share completion data with payroll","Support certification-linked pay","Reduce manual spreadsheets"]},
{id:"sso",n:"SSO",d:"Let employees sign in with their company account, with permissions managed in one place.",b:["Single sign-on for every learner","Role-based access for HR admins","Fewer password resets"]},
{id:"calendar",n:"Calendar",d:"Add live workshops and deadlines to employee calendars automatically.",b:["Workshop invites sent for you","Deadline reminders on calendars","Fewer missed sessions"]},
{id:"chat",n:"Chat",d:"Send enrollment notices and reminders to the chat tools your teams already use.",b:["Reminders where people already work","Quick completion nudges","Celebrate finished programs"]},
{id:"email",n:"Email",d:"Automatic emails for enrollment, reminders and certificates, sent from your own address.",b:["Branded enrollment emails","Scheduled reminders","Certificates delivered on completion"]},
{id:"crm",n:"CRM",d:"Give sales and customer teams the training they need, tracked next to their accounts.",b:["Link training to sales roles","See readiness before big launches","Track partner training"]},
{id:"analytics",n:"Analytics",d:"Send learning data to your reporting tools to see training next to business results.",b:["Export completion and score data","Build leadership reports","Compare teams and programs"]},
{id:"video",n:"Video",d:"Run live workshops and host recorded lessons without leaving the platform.",b:["One-click live sessions","Recorded lessons on demand","Attendance tracked for you"]},
{id:"storage",n:"Storage",d:"Attach documents, slides and policies from your company storage to any program.",b:["Link existing documents","Always show the latest version","No duplicate uploads"]},
{id:"tickets",n:"Tickets",d:"Route learner questions to your support queue and keep answers in one place.",b:["Questions reach the right team","Track response times","Build a help library"]},
{id:"docs",n:"Docs",d:"Use your company documents as program material, with access controlled by role.",b:["Reuse existing guides","Control who can read what","Keep content up to date"]}];
const FAQS=[
{c:"General",q:"What is Skillrise?",a:"Skillrise is a corporate training platform where HR teams enroll employees in skill programs, track completion, download certificates and manage billing in one dashboard."},
{c:"General",q:"Who is Skillrise for?",a:"HR and learning teams in companies of any size that want to grow employee skills and prove the results."},
{c:"General",q:"Which skill areas do you cover?",a:"Leadership, Communication, Data Skills, Compliance, Sales Training and Technical Skills, each with programs for different levels."},
{c:"Enrollment",q:"How do I enroll employees?",a:"Open the dashboard, choose a program, tick the employees you want and select Enroll. You can enroll one person or a whole team."},
{c:"Enrollment",q:"Can I track who has finished?",a:"Yes. The completion tracking screen shows each employee's progress and status for every program."},
{c:"Enrollment",q:"Can employees join programs on their own?",a:"HR controls enrollment. Employees are enrolled by their HR admin and receive a notice when a program is assigned."},
{c:"Certificates",q:"When do certificates become available?",a:"As soon as an employee completes a program, their certificate appears in the dashboard ready to download."},
{c:"Certificates",q:"Can I download certificates in bulk?",a:"Each completed program has its own download. Bulk download is a good next feature to discuss with our team."},
{c:"Certificates",q:"Do certificates show our company name?",a:"Certificates carry the Skillrise name, the employee, the program and the date. Custom branding can be discussed during onboarding."},
{c:"Billing",q:"How does billing work?",a:"You pay a monthly plan based on seats. Invoices, payment details and usage are in the billing section of the dashboard."},
{c:"Billing",q:"Where can I download invoices?",a:"Open the Billing tab in the dashboard and select Download next to any invoice."},
{c:"Billing",q:"Can I change the number of seats?",a:"Yes. Contact us and we will adjust your plan, usually from your next invoice."}];
