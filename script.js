/* Body Header */

const bodyHeader = document.createElement("header");
bodyHeader.classList.add("head");
document.body.append(bodyHeader);

const header_image = document.createElement("img");
header_image.setAttribute("src", "./resources/photo.jpg");
header_image.classList.add("photo");
bodyHeader.appendChild(header_image);

const nameBar = document.createElement("div");
nameBar.classList.add("nameBar");
bodyHeader.appendChild(nameBar);

const whiteBar = document.createElement("div");
whiteBar.classList.add("whiteBar");
nameBar.appendChild(whiteBar);

const nameBar_h1 = document.createElement("h1");
nameBar_h1.classList.add("name");
nameBar_h1.style.fontSize = "40px";
nameBar_h1.innerText = "VARUN";
nameBar.appendChild(nameBar_h1);

/* Body Main */

/* Contact Details */
const body_main = document.createElement("main");
document.body.append(body_main);

const contact = document.createElement("div");
contact.classList.add("contact");
body_main.appendChild(contact);

const contact_p = document.createElement("p");
contact_p.style.fontSize = "17px";
contact_p.innerText =
  "Punjab, India| 9988482979 | rockercool076@gmail.com | www.domain.com";
contact.appendChild(contact_p);

const contact_HR = document.createElement("HR");
contact.appendChild(contact_HR);

/* Main Table */

const details = document.createElement("div");
details.classList.add("details");
details.style.setProperty("margin", "0 20px 0 20px");
body_main.appendChild(details);

const tb1 = document.createElement("table");
tb1.classList.add("tb1");
details.appendChild(tb1);

const tr_1_tb1 = document.createElement("tr");
tb1.appendChild(tr_1_tb1);

const tdLeft = document.createElement("td");
tdLeft.classList.add("tdLeft");
tdLeft.style.setProperty("border-right", "1px solid grey");
tdLeft.style.setProperty("margin-left", "20px");
tr_1_tb1.appendChild(tdLeft);

const tbLeft = document.createElement("table");
tbLeft.classList.add("tbLeft");
tdLeft.appendChild(tbLeft);

const tr_profile = document.createElement("tr");
tr_profile.classList.add("profile");
tbLeft.appendChild(tr_profile);

const td_profile = document.createElement("td");
tr_profile.appendChild(td_profile);

const face_icon = document.createElement("span");
face_icon.classList.add("material-icons");
face_icon.innerText = "face";
td_profile.appendChild(face_icon);

const profile_name = document.createElement("b");
profile_name.style.setProperty("font-size", "17px");
profile_name.innerText = "PROFILE";
td_profile.appendChild(profile_name);

const br1 = document.createElement("br");
td_profile.appendChild(br1);

const profile_p = document.createElement("p");
profile_p.classList.add("tab2");
profile_p.innerText =
  "I am a full stack developer with strong fundamentalsof pythonand JS with hands on experience on Django,Bootscarp and MERN.";
td_profile.appendChild(profile_p);

const tr_education = document.createElement("tr");
tr_education.classList.add("education");
tbLeft.appendChild(tr_education);

const td_education = document.createElement("td");
tr_education.appendChild(td_education);

const school_icon = document.createElement("span");
school_icon.classList.add("material-icons");
school_icon.innerText = "school";
td_education.appendChild(school_icon);

const education_name = document.createElement("b");
education_name.style.setProperty("font-size", "17px");
education_name.innerText = "EDUCATION";
td_education.appendChild(education_name);

const br2 = document.createElement("br");
td_education.appendChild(br2);

const education_p1 = document.createElement("p");
education_p1.classList.add("tab2");
education_p1.innerText =
  "Lovely Professional University, Punjab | 2019 - 2023";
td_education.appendChild(education_p1);

const education_p2 = document.createElement("p");
education_p2.classList.add("tab3");
education_p2.innerText =
  "- Bachelor’s in Technology, computer science";
td_education.appendChild(education_p2);

const education_p3 = document.createElement("p");
education_p3.classList.add("tab2");
education_p3.innerText = "Swami Sant Dass Public School, Punjab | 2018 - 2019";
td_education.appendChild(education_p3);

const education_p4 = document.createElement("p");
education_p4.classList.add("tab3");
education_p4.innerText = "- C. B. S. E., Science | 88%";
td_education.appendChild(education_p4);

const education_p5 = document.createElement("p");
education_p5.classList.add("tab2");
education_p5.innerText = "Swami Sant Dass Public School, Punjab | 2017 - 2018";
td_education.appendChild(education_p5);

const education_p6 = document.createElement("p");
education_p6.classList.add("tab3");
education_p6.innerText = "- C. B. S. E. | CGPA - 8.6";
td_education.appendChild(education_p6);

const tr_skills = document.createElement("tr");
tr_skills.classList.add("skills");
tbLeft.appendChild(tr_skills);

const td_skills = document.createElement("td");
tr_skills.appendChild(td_skills);

const skill_icon = document.createElement("span");
skill_icon.classList.add("material-icons");
skill_icon.innerText = "sports_soccer";
td_skills.appendChild(skill_icon);

const skill_name = document.createElement("b");
skill_name.style.setProperty("font-size", "17px");
skill_name.innerText = "SKILLS";
td_skills.appendChild(skill_name);

const skills_p = document.createElement("p");
td_skills.appendChild(skills_p);

const JS_span = document.createElement("span");
JS_span.classList.add("tab2");
const JS_b = document.createElement("b");
JS_span.appendChild(JS_b);
JS_b.innerText = "JavaScript";
skills_p.appendChild(JS_span);

const grad1 = document.createElement("span");
grad1.classList.add("grad1");
grad1.style.setProperty("margin-left", "5%");
grad1.style.setProperty("width", "180px");
skills_p.appendChild(grad1);

const br3 = document.createElement("br");
skills_p.appendChild(br3);

const html_span = document.createElement("span");
html_span.classList.add("tab2");
const html_b = document.createElement("b");
html_span.appendChild(html_b);
html_b.innerText = "HTML";
skills_p.appendChild(html_span);

const grad2 = document.createElement("span");
grad2.classList.add("grad1");
grad2.style.setProperty("margin-left", "9.5%");
grad2.style.setProperty("width", "200px");
skills_p.appendChild(grad2);

const br4 = document.createElement("br");
skills_p.appendChild(br4);

const css_span = document.createElement("span");
css_span.classList.add("tab2");
const css_b = document.createElement("b");
css_span.appendChild(css_b);
css_b.innerText = "CSS";
skills_p.appendChild(css_span);

const grad3 = document.createElement("span");
grad3.classList.add("grad1");
grad3.style.setProperty("margin-left", "12.5%");
grad3.style.setProperty("width", "160px");
skills_p.appendChild(grad3);

const br5 = document.createElement("br");
skills_p.appendChild(br5);

const node_span = document.createElement("span");
node_span.classList.add("tab2");
const node_b = document.createElement("b");
node_span.appendChild(node_b);
node_b.innerText = "Python";
skills_p.appendChild(node_span);

const grad4 = document.createElement("span");
grad4.classList.add("grad1");
grad4.style.setProperty("margin-left", "8.5%");
grad4.style.setProperty("width", "100px");
skills_p.appendChild(grad4);

const br6 = document.createElement("br");
skills_p.appendChild(br6);

const git_span = document.createElement("span");
git_span.classList.add("tab2");
const git_b = document.createElement("b");
git_span.appendChild(git_b);
git_b.innerText = "c++";
skills_p.appendChild(git_span);

const grad5 = document.createElement("span");
grad5.classList.add("grad1");
grad5.style.setProperty("margin-left", "13.5%");
grad5.style.setProperty("width", "230px");
skills_p.appendChild(grad5);

const br7 = document.createElement("br");
skills_p.appendChild(br7);

const c_span = document.createElement("span");
c_span.classList.add("tab2");
const c_b = document.createElement("b");
c_span.appendChild(c_b);
c_b.innerText = "C";
skills_p.appendChild(c_span);

const grad6 = document.createElement("span");
grad6.classList.add("grad1");
grad6.style.setProperty("margin-left", "15.5%");
grad6.style.setProperty("width", "150px");
skills_p.appendChild(grad6);

const br8 = document.createElement("br");
skills_p.appendChild(br8);

const lin_span = document.createElement("span");
lin_span.classList.add("tab2");
const lin_b = document.createElement("b");
lin_span.appendChild(lin_b);
lin_b.innerText = "Linux";
skills_p.appendChild(lin_span);

const grad7 = document.createElement("span");
grad7.classList.add("grad1");
grad7.style.setProperty("margin-left", "10.3%");
grad7.style.setProperty("width", "170px");
skills_p.appendChild(grad7);

const br9 = document.createElement("br");
skills_p.appendChild(br9);
const tdRight = document.createElement("td");
tdRight.classList.add("tdRight");
tr_1_tb1.appendChild(tdRight);

const tbRight = document.createElement("table");
tbRight.classList.add("tbRight");
tdRight.append(tbRight);

const tr_workex = document.createElement("tr");
tr_workex.classList.add("workEx");
tbRight.appendChild(tr_workex);

const td_workex = document.createElement("td");
tr_workex.appendChild(td_workex);

const business_icon = document.createElement("span");
business_icon.classList.add("material-icons");
business_icon.innerText = "business_center";
td_workex.appendChild(business_icon);

const work_name = document.createElement("b");
work_name.style.setProperty("font-size", "17px");
work_name.innerText = "WORK EXPERIENCE";
td_workex.appendChild(work_name);

const work_p_1 = document.createElement("p");
work_p_1.classList.add("tab2");
const work_b_1 = document.createElement("b");
work_b_1.innerText =
  "Full Stack developer, CANADA  | 5 July, 2019 - Present";
work_p_1.appendChild(work_b_1);
td_workex.appendChild(work_p_1);

const work_p_2 = document.createElement("p");
work_p_2.classList.add("tab3");
work_p_2.innerText =
  "- I have 3 years of experience as a freelancer on codementor.";
td_workex.appendChild(work_p_2);

const work_p_3 = document.createElement("p");
work_p_3.classList.add("tab3");
work_p_3.innerText = "- I have 5 Star rating from clients all across the Globe.";
td_workex.appendChild(work_p_3);

const work_p_4 = document.createElement("p");
work_p_4.classList.add("tab3");
work_p_4.innerText =
  "- Developed various Websites for companies .";
td_workex.appendChild(work_p_4);

const work_p_5 = document.createElement("p");
work_p_5.classList.add("tab3");
work_p_5.innerText =
  "- Worked in many companies lol .";
td_workex.appendChild(work_p_5);

const work_p_6 = document.createElement("p");
work_p_6.classList.add("tab3");
work_p_6.innerText =
  "- who will read this is Legend.";
td_workex.appendChild(work_p_6);

const work_p_7 = document.createElement("p");
work_p_7.classList.add("tab3");
work_p_7.innerText =
  "- I dont have wifi at home so using my neighbours wifi as they have given access .";
td_workex.appendChild(work_p_7);

const work_p_8 = document.createElement("p");
work_p_8.classList.add("tab3");
work_p_8.innerText =
  "- Thanks Board Infinty for Teaching Javascript , i am very much thankfull";
td_workex.appendChild(work_p_8);

const work_p_10 = document.createElement("p");
work_p_10.classList.add("tab2");
const work_b_10 = document.createElement("b");
work_b_10.innerText =
  "Company 1 ";
work_p_10.appendChild(work_b_10);
td_workex.appendChild(work_p_10);

const work_p_11 = document.createElement("p");
work_p_11.classList.add("tab3");
work_p_11.innerText =
  "- Built websites  , .";
td_workex.appendChild(work_p_11);

const work_p_12 = document.createElement("p");
work_p_12.classList.add("tab3");
work_p_12.innerText = "- Worked on myself.";
td_workex.appendChild(work_p_12);

const work_p_13 = document.createElement("p");
work_p_13.classList.add("tab3");
work_p_13.innerText =
  "- so that was a great project .";
td_workex.appendChild(work_p_13);

const work_p_20 = document.createElement("p");
work_p_20.classList.add("tab2");
const work_b_20 = document.createElement("b");
work_b_20.innerText = "Company 2";
work_p_20.appendChild(work_b_20);
td_workex.appendChild(work_p_20);

const work_p_21 = document.createElement("p");
work_p_21.classList.add("tab3");
work_p_21.innerText = "- My dream company is an organization that values its employees, nurtures intrapreneurs, gives them the freedom to be innovative and allows them to turn their innovative ideas into realities. Company where a healthy work environment dominates. When employees are free to be innovative, the company portfolio will be much more than just product improvements, and will include better business models, customer service improvements, as well as continuous process improvements. In my dream company management team will consider needs and interests in all conected with organization,not only those who have directly financial relations with company profit. Namely: employees, suppliers, customers, competitors, government agencies, clams, public entities and others. In my ideal company, all decisions made by owners are reasonable business decision..";
td_workex.appendChild(work_p_21);

