const courses = {
    bcom: {
      name: "Bacholers of Computing",
      subjects: [
        {
          name: "Academic Writing 181",
          code: "ACW181",
          lecturer: { name: "Dr. Jane Smith" },
          room: { name: "Alpha" }
        },
        {
          name: "Computer Architecture 181",
          code: "COA181",
          lecturer: { name: "Dr. John Doe" },
          room: { name: "Beta" }
        },
        {
          name: "Database Development 181",
          code: "DBD181",
          lecturer: { name: "Dr. Maria Rodriguez" },
          room: { name: "Gamma" }
        },
        {
          name: "Information Systems 181",
          code: "INF181",
          lecturer: { name: "Dr. David Lee" },
          room: { name: "Delta" }
        },
        {
          name: "Innovation and Leadership 101",
          code: "INL181",
          lecturer: { name: "Dr. Emily Chen" },
          room: { name: "Epsilon" }
        },
        {
          name: "Innovation and Leadership 102",
          code: "INL182",
          lecturer: { name: "Dr. Frank Brown" },
          room: { name: "Zeta" }
        },
        {
          name: "Linear Programming 181",
          code: "LPR181",
          lecturer: { name: "Dr. Sophia Patel" },
          room: { name: "Eta" }
        },
        {
          name: "Mathematics 181",
          code: "MAT181",
          lecturer: { name: "Dr. Michael Kim" },
          room: { name: "Theta" }
        },
        {
          name: "Network Development 181",
          code: "NWD181",
          lecturer: { name: "Dr. Rachel Hall" },
          room: { name: "Iota" }
        },
        {
          name: "Programming 181",
          code: "PRG181",
          lecturer: { name: "Dr. Kevin White" },
          room: { name: "Kappa" }
        },
        {
          name: "Programming 182",
          code: "PRG182",
          lecturer: { name: "Dr. Lisa Nguyen" },
          room: { name: "Lambda" }
        },
        {
          name: "Statistics 181",
          code: "STA181",
          lecturer: { name: "Dr. Mark Davis" },
          room: { name: "Mu" }
        },
        {
          name: "Web Programming 181",
          code: "WPR181",
          lecturer: { name: "Dr. Olivia Martin" },
          room: { name: "Nu" }
        },
        {
          name: "Entrepreneurship 181",
          code: "ENT181",
          lecturer: { name: "Dr. Patrick Taylor" },
          room: { name: "Xi" }
        },
        {
          name: "Business Management 181",
          code: "BUM181",
          lecturer: { name: "Dr. Quinn Harris" },
          room: { name: "Omicron" }
        },
        {
          name: "Database Development 281",
          code: "DBD281",
          lecturer: { name: "Dr. Rebecca Lee" },
          room: { name: "Pi" }
        },
        {
          name: "Information Systems 281",
          code: "INF281",
          lecturer: { name: "Dr. Samuel Kim" },
          room: { name: "Rho" }
        },
        {
          name: "Innovation and Leadership 201",
          code: "INL201",
          lecturer: { name: "Dr. Thomas Brown" },
          room: { name: "Sigma" }
        },
        {
          name: "Innovation and Leadership 202",
          code: "INL202",
          lecturer: { name: "Dr. Uma Patel" },
          room: { name: "Tau" }
        },
        {
          name: "Linear Programming 281",
          code: "LPR281",
          lecturer: { name: "Dr. Victor Chen" },
          room: { name: "Upsilon" }
        },
        {
          name: "Mathematics 281",
          code: "MAT281",
          lecturer: { name: "Dr. Wendy Hall" },
          room: { name: "Phi" }
        },
        {
          name: "Programming 281",
          code: "PRG281",
          lecturer: { name: "Dr. Xavier Martin" },
          room: { name: "Chi" }
        },      {
            name: "Programming 282",
            code: "PRG282",
            lecturer: { name: "Dr. Yvonne Lee" },
            room: { name: "Psi" }
          },
          {
            name: "Project Managment 281",
            code: "PMM281",
            lecturer: { name: "Dr. Zachary Kim" },
            room: { name: "Omega" }
          },
          {
            name: "Statistics 281",
            code: "STA281",
            lecturer: { name: "Dr. Abigail Patel" },
            room: { name: "Alpha" }
          },
          {
            name: "Web Programming 281",
            code: "WPR281",
            lecturer: { name: "Dr. Benjamin Brown" },
            room: { name: "Beta" }
          },
          {
            name: "Software Analysis & Design 281",
            code: "SAD281",
            lecturer: { name: "Dr. Caroline Chen" },
            room: { name: "Gamma" }
          },
          {
            name: "Data Warehousing 281",
            code: "DWH281",
            lecturer: { name: "Dr. Daniel Lee" },
            room: { name: "Delta" }
          },
          {
            name: "Internet of Things 281",
            code: "IOT281",
            lecturer: { name: "Dr. Emily Hall" },
            room: { name: "Epsilon" }
          },
          {
            name: "Software Testing 281",
            code: "SWT281",
            lecturer: { name: "Dr. Frank Kim" },
            room: { name: "Zeta" }
          },
          {
            name: "Research Methods 381",
            code: "RSH381",
            lecturer: { name: "Dr. George Martin" },
            room: { name: "Eta" }
          },
          {
            name: "Database Development 381",
            code: "DBD381",
            lecturer: { name: "Dr. Helen Patel" },
            room: { name: "Theta" }
          },
          {
            name: "Innovation and Leadership 321",
            code: "INL381",
            lecturer: { name: "Dr. Ian Brown" },
            room: { name: "Iota" }
          },
          {
            name: "Linear programming 381",
            code: "LPR381",
            lecturer: { name: "Dr. Julia Lee" },
            room: { name: "Kappa" }
          },
          {
            name: "Machine Learning 381",
            code: "MLG381",
            lecturer: { name: "Dr. Kevin Kim" },
            room: { name: "Lambda" }
          },
          {
            name: "Project 381",
            code: "PRJ381",
            lecturer: { name: "Dr. Lisa Nguyen" },
            room: { name: "Mu" }
          },
          {
            name: "Project Management 381",
            code: "PMM381",
            lecturer: { name: "Dr. Mark Davis" },
            room: { name: "Nu" }
          },
          {
            name: "Programming 381",
            code: "PRG381",
            lecturer: { name: "Dr. Olivia Martin" },
            room: { name: "Xi" }
          },
          {
            name: "Software Engineering 381",
            code: "SEN381",
            lecturer: { name: "Dr. Patrick Taylor" },
            room: { name: "Omicron" }
          },
          {
            name: "Web Programming 381",
            code: "WPR381",
            lecturer: { name: "Dr. Quinn Harris" },
            room: { name: "Pi" }
          },
          {
            name: "Data Science 381",
            code: "BIN381",
            lecturer: { name: "Dr. Rebecca Lee" },
            room: { name: "Rho" }
          },
          {
            name: "Database Administration 381",
            code: "DBA381",
            lecturer: { name: "Dr. Samuel Kim" },
            room: { name: "Sigma" }
          },
          {
            name: "Statistics 381",
            code: "STA381",
            lecturer: { name: "Dr. Thomas Brown" },
            room: { name: "Tau" }
          },
          {
            name: "Innovation Managment 381",
            code: "INM381",
            lecturer: { name: "Dr. Uma Patel" },
            room: { name: "Upsilon" }
          },
          {
            name: "Machine Learning 382",
            code: "MLG382",
            lecturer: { name: "Dr. Victor Chen" },
            room: { name: "Phi" }
        },
        {
          name: "Project 382",
          code: "PRJ382",
          lecturer: { name: "Dr. Wendy Hall" },
          room: { name: "Chi" }
        },
        {
          name: "Project Management 382",
          code: "PMM382",
          lecturer: { name: "Dr. Xavier Martin" },
          room: { name: "Psi" }
        },
        {
          name: "Software Engineering 382",
          code: "SEN382",
          lecturer: { name: "Dr. Yvonne Lee" },
          room: { name: "Omega" }
        },
        {
          name: "Web Programming 382",
          code: "WPR382",
          lecturer: { name: "Dr. Zachary Kim" },
          room: { name: "Alpha" }
        }
      ]
    },
    bit: {
      name: "Bachelor of Information Technology",
      subjects: [
        { name: "Academic Writing 171", code: "ACW171", lecturer: { name: "Dr. Emma Taylor" }, room: { name: "Alpha" } },
        { name: "Computer Architecture 171", code: "COA171", lecturer: { name: "Dr. Ryan Chen" }, room: { name: "Beta" } },
        { name: "Database Development 171", code: "DBD171", lecturer: { name: "Dr. Sophia Patel" }, room: { name: "Gamma" } },
        { name: "Information Systems 171", code: "INF171", lecturer: { name: "Dr. Michael Lee" }, room: { name: "Delta" } },
        { name: "Innovation and Leadership 101", code: "INL171", lecturer: { name: "Dr. Olivia Kim" }, room: { name: "Epsilon" } },
        { name: "Innovation and Leadership 102", code: "INL172", lecturer: { name: "Dr. Liam Brown" }, room: { name: "Zeta" } },
        { name: "English Communication 171", code: "ENG171", lecturer: { name: "Dr. Ava Wong" }, room: { name: "Eta" } },
        { name: "Mathematics 171", code: "MAT171", lecturer: { name: "Dr. Ethan Hall" }, room: { name: "Theta" } },
        { name: "Network Development 171", code: "NWD171", lecturer: { name: "Dr. Julia Martin" }, room: { name: "Iota" } },
        { name: "Programming 171", code: "PRG171", lecturer: { name: "Dr. Benjamin Davis" }, room: { name: "Kappa" } },
        { name: "Programming 172", code: "PRG172", lecturer: { name: "Dr. Charlotte White" }, room: { name: "Lambda" } },
        { name: "Statistics 171", code: "STA171", lecturer: { name: "Dr. Alexander Brooks" }, room: { name: "Mu" } },
        { name: "Web Programming 171", code: "WPR171", lecturer: { name: "Dr. Abigail Lewis" }, room: { name: "Nu" } },
        { name: "Entrepreneurship 171", code: "ENT171", lecturer: { name: "Dr. Harrison Ford" }, room: { name: "Xi" } },
        { name: "Business Management 171", code: "BUM171", lecturer: { name: "Dr. Emily Walker" }, room: { name: "Omicron" } },
        { name: "Database Development 281", code: "DBD271", lecturer: { name: "Dr. Sophia Patel" }, room: { name: "Pi" } },
        { name: "Information Systems 281", code: "INF271", lecturer: { name: "Dr. Michael Lee" }, room: { name: "Rho" } },
        { name: "Innovation and Leadership 201", code: "INL271", lecturer: { name: "Dr. Olivia Kim" }, room: { name: "Sigma" } },
        { name: "Innovation and Leadership 202", code: "INL272", lecturer: { name: "Dr. Liam Brown" }, room: { name: "Tau" } },
        { name: "Cloud-Native Application Architecture 271", code: "CNA271", lecturer: { name: "Dr. Ryan Chen" }, room: { name: "Upsilon" } },
        { name: "Ethics 271", code: "ETH271", lecturer: { name: "Dr. Emma Taylor" }, room: { name: "Phi" } },
        { name: "Enterprice Systems 271", code: "ERP271", lecturer: { name: "Dr. Ava Wong" }, room: { name: "Chi" } },
        { name: "Programming 271", code: "PRG271", lecturer: { name: "Dr. Benjamin Davis" }, room: { name: "Psi" } },
        { name: "Programming 272", code: "PRG272", lecturer: { name: "Dr. Charlotte White" }, room: { name: "Omega" } },
        { name: "Statistics 271", code: "STA271", lecturer: { name: "Dr. Alexander Brooks" }, room: { name: "Alpha" } },
        { name: "Web Development 271", code: "WBD271", lecturer: { name: "Dr. Abigail Lewis" }, room: { name: "Beta" } },
        { name: "Entrepreneurship 271", code: "ENT271", lecturer: { name: "Dr. Harrison Ford" }, room: { name: "Gamma" } },
        { name: "Business Management 271", code: "BUM271", lecturer: { name: "Dr. Emily Walker" }, room: { name: "Delta" } },
        { name: "Database Development 371", code: "DBD371", lecturer: { name: "Dr. Sophia Patel" }, room: { name: "Epsilon" } },
        { name: "Information Systems 371", code: "INF371", lecturer: { name: "Dr. Michael Lee" }, room: { name: "Zeta" } },
        { name: "Innovation and Leadership 301", code: "INL371", lecturer: { name: "Dr. Olivia Kim" }, room: { name: "Eta" } },
        { name: "Innovation and Leadership 302", code: "INL372", lecturer: { name: "Dr. Liam Brown" }, room: { name: "Theta" } },
        { name: "Cloud-Native Application Architecture 371", code: "CNA371", lecturer: { name: "Dr. Ryan Chen" }, room: { name: "Iota" } },
        { name: "Ethics 371", code: "ETH371", lecturer: { name: "Dr. Emma Taylor" }, room: { name: "Kappa" } },
        { name: "Enterprice Systems 371", code: "ERP371", lecturer: { name: "Dr. Ava Wong" }, room: { name: "Lambda" } },
        { name: "Programming 371", code: "PRG371", lecturer: { name: "Dr. Benjamin Davis" }, room: { name: "Mu" } },
        { name: "Programming 372", code: "PRG372", lecturer: { name: "Dr. Charlotte White" }, room: { name: "Nu" } },
        { name: "Statistics 371", code: "STA371", lecturer: { name: "Dr. Alexander Brooks" }, room: { name: "Xi" } },
        { name: "Web Development 371", code: "WBD371", lecturer: { name: "Dr. Abigail Lewis" }, room: { name: "Omicron" } },
        { name: "Entrepreneurship 371", code: "ENT371", lecturer: { name: "Dr. Harrison Ford" }, room: { name: "Pi" } },
        { name: "Business Management 371", code: "BUM371", lecturer: { name: "Dr. Emily Walker" }, room: { name: "Rho" } }
      ]
    },
  
    dit: {
      name: "Diploma of Information Technology",
      subjects: [
        { name: "Business Communication 161", code: "BUC161", lecturer: { name: "Dr. Sophia Patel" }, room: { name: "Alpha" } },
        { name: "Business Management and Entrepreneurship 161", code: "BME161", lecturer: { name: "Dr. Michael Lee" }, room: { name: "Beta" } },
        { name: "Computer Architecture 161", code: "COA161", lecturer: { name: "Dr. Ryan Chen" }, room: { name: "Gamma" } },
        { name: "Database Concept 161", code: "DBC161", lecturer: { name: "Dr. Emma Taylor" }, room: { name: "Delta" } },
        { name: "Database Functionality 161", code: "DBF161", lecturer: { name: "Dr. Olivia Kim" }, room: { name: "Epsilon" } },
        { name: "Innovation and Leadership 161", code: "INL161", lecturer: { name: "Dr. Liam Brown" }, room: { name: "Zeta" } },
        { name: "End User Computing 161", code: "EUC161", lecturer: { name: "Dr. Ava Wong" }, room: { name: "Eta" } },
        { name: "Internet of Things 161", code: "IOT161", lecturer: { name: "Dr. Ethan Hall" }, room: { name: "Theta" } },
        { name: "Mathematics 161", code: "MAT161", lecturer: { name: "Dr. Julia Martin" }, room: { name: "Iota" } },
        { name: "Network Fundamentals 161", code: "NWF161", lecturer: { name: "Dr. Benjamin Davis" }, room: { name: "Kappa" } },
        { name: "Object-Oriented Programming 161", code: "OOP161", lecturer: { name: "Dr. Charlotte White" }, room: { name: "Lambda" } },
        { name: "Programming 161", code: "PRG161", lecturer: { name: "Dr. Abigail Lewis" }, room: { name: "Mu" } },
        { name: "Statistics 161", code: "STA161", lecturer: { name: "Dr. Alexander Brooks" }, room: { name: "Nu" } },
        { name: "Web Development 161", code: "WBD161", lecturer: { name: "Dr. Harrison Ford" }, room: { name: "Xi" } },
        { name: "Business Communication 162", code: "BUC162", lecturer: { name: "Dr. Sophia Patel" }, room: { name: "Omicron" } },
        { name: "Business Management and Entrepreneurship 162", code: "BME162", lecturer: { name: "Dr. Michael Lee" }, room: { name: "Pi" } },
        { name: "Computer Architecture 162", code: "COA162", lecturer: { name: "Dr. Ryan Chen" }, room: { name: "Rho" } },
        { name: "Database Concept 162", code: "DBC162", lecturer: { name: "Dr. Emma Taylor" }, room: { name: "Sigma" } },
        { name: "Database Functionality 162", code: "DBF162", lecturer: { name: "Dr. Olivia Kim" }, room: { name: "Tau" } },
        { name: "Innovation and Leadership 162", code: "INL162", lecturer: { name: "Dr. Liam Brown" }, room: { name: "Upsilon" } },
        { name: "End User Computing 162", code: "EUC162", lecturer: { name: "Dr. Ava Wong" }, room: { name: "Phi" } },
        { name: "Internet of Things 162", code: "IOT162", lecturer: { name: "Dr. Ethan Hall" }, room: { name: "Chi" } },
        { name: "Mathematics 162", code: "MAT162", lecturer: { name: "Dr. Julia Martin" }, room: { name: "Psi" } },
        { name: "Network Fundamentals 162", code: "NWF162", lecturer: { name: "Dr. Benjamin Davis" }, room: { name: "Omega" } },
        { name: "Object-Oriented Programming 162", code: "OOP162", lecturer: { name: "Dr. Charlotte White" }, room: { name: "Alpha" } },
        { name: "Programming 162", code: "PRG162", lecturer: { name: "Dr. Abigail Lewis" }, room: { name: "Beta" } },
        { name: "Statistics 162", code: "STA162", lecturer: { name: "Dr. Alexander Brooks" }, room: { name: "Gamma" } },
        { name: "Web Development 162", code: "WBD162", lecturer: { name: "Dr. Harrison Ford" }, room: { name: "Delta" } }
      ]
    },
  
    cert: {
      name: "Certificate of Information Technology",
      subjects: [
        { name: "Business Communication 101", code: "BUC101", lecturer: { name: "Dr. Sophia Patel" }, room: { name: "Alpha" } },
        { name: "Business Management and Entrepreneurship 101", code: "BME101", lecturer: { name: "Dr. Michael Lee" }, room: { name: "Beta" } },
        { name: "Computer Architecture 101", code: "COA101", lecturer: { name: "Dr. Ryan Chen" }, room: { name: "Gamma" } },
        { name: "Database Concept 101", code: "DBC101", lecturer: { name: "Dr. Emma Taylor" }, room: { name: "Delta" } },
        { name: "Database Functionality 101", code: "DBF101", lecturer: { name: "Dr. Olivia Kim" }, room: { name: "Epsilon" } },
        { name: "Innovation and Leadership 101", code: "INL101", lecturer: { name: "Dr. Liam Brown" }, room: { name: "Zeta" } },      
        { name: "End User Computing 101", code: "EUC101", lecturer: { name: "Dr. Ava Wong" }, room: { name: "Eta" } },
        { name: "Internet of Things 101", code: "IOT101", lecturer: { name: "Dr. Ethan Hall" }, room: { name: "Theta" } },
        { name: "Mathematics 101", code: "MAT101", lecturer: { name: "Dr. Julia Martin" }, room: { name: "Iota" } },
        { name: "Network Fundamentals 101", code: "NWF101", lecturer: { name: "Dr. Benjamin Davis" }, room: { name: "Kappa" } },
        { name: "Object-Oriented Programming 101", code: "OOP101", lecturer: { name: "Dr. Charlotte White" }, room: { name: "Lambda" } },
        { name: "Programming 101", code: "PRG101", lecturer: { name: "Dr. Abigail Lewis" }, room: { name: "Mu" } },
        { name: "Statistics 101", code: "STA101", lecturer: { name: "Dr. Alexander Brooks" }, room: { name: "Nu" } },
        { name: "Web Development 101", code: "WBD101", lecturer: { name: "Dr. Harrison Ford" }, room: { name: "Xi" } },
        { name: "Business Communication 102", code: "BUC102", lecturer: { name: "Dr. Sophia Patel" }, room: { name: "Omicron" } },
        { name: "Business Management and Entrepreneurship 102", code: "BME102", lecturer: { name: "Dr. Michael Lee" }, room: { name: "Pi" } },
        { name: "Computer Architecture 102", code: "COA102", lecturer: { name: "Dr. Ryan Chen" }, room: { name: "Rho" } },
        { name: "Database Concept 102", code: "DBC102", lecturer: { name: "Dr. Emma Taylor" }, room: { name: "Sigma" } },
        { name: "Database Functionality 102", code: "DBF102", lecturer: { name: "Dr. Olivia Kim" }, room: { name: "Tau" } },
        { name: "Innovation and Leadership 102", code: "INL102", lecturer: { name: "Dr. Liam Brown" }, room: { name: "Upsilon" } },
        { name: "End User Computing 102", code: "EUC102", lecturer: { name: "Dr. Ava Wong" }, room: { name: "Phi" } },
        { name: "Internet of Things 102", code: "IOT102", lecturer: { name: "Dr. Ethan Hall" }, room: { name: "Chi" } },
        { name: "Mathematics 102", code: "MAT102", lecturer: { name: "Dr. Julia Martin" }, room: { name: "Psi" } },
        { name: "Network Fundamentals 102", code: "NWF102", lecturer: { name: "Dr. Benjamin Davis" }, room: { name: "Omega" } },
        { name: "Object-Oriented Programming 102", code: "OOP102", lecturer: { name: "Dr. Charlotte White" }, room: { name: "Alpha" } },
        { name: "Programming 102", code: "PRG102", lecturer: { name: "Dr. Abigail Lewis" }, room: { name: "Beta" } },
        { name: "Statistics 102", code: "STA102", lecturer: { name: "Dr. Alexander Brooks" }, room: { name: "Gamma" } },
        { name: "Web Development 102", code: "WBD102", lecturer: { name: "Dr. Harrison Ford" }, room: { name: "Delta" } }
      ]
    }
  };
     
function bcom()
{
  var container = document.getElementById("create-content");
  container.innerHTML = "";
  var link = document.createElement('a');
  link.href = "javascript:void(0)";
  link.onclick = bcomPage;
  var heading = document.createElement('h1');
  heading.textContent = "Bacholers of Computing";
  link.appendChild(heading);
  container.appendChild(link);

  var code = document.createElement('h2');
  code.textContent = "Code: BCom";
  container.appendChild(code);

  var duration = document.createElement('h3');
  duration.textContent = "Duration: 4 Years";
  container.appendChild(duration);

  var paragraph = document.createElement('p');
  paragraph.textContent = "Our Bachelor of Computing degree will teach you the essential computing skills of troubleshooting and formulating viable solutions. Additionally, you will learn to apply theories and integrate them in real-world environments, across multiple disciplines, by presenting best practices and solutions.";
  container.appendChild(paragraph);

  heading.className = "heading";

  const courseDetailsSection = document.createElement("div");
  courseDetailsSection.id = "course-details";
  document.body.appendChild(courseDetailsSection);


  const printButton = document.createElement("button");
  printButton.textContent = "Print Course";
  printButton.style.backgroundColor = "orange";
  printButton.style.color = "white";
  printButton.style.padding = "10px 20px";
  printButton.style.border = "none";
  printButton.style.marginLeft = "45%";
  printButton.style.borderRadius = "5px";
  printButton.style.cursor = "pointer";
  printButton.addEventListener("click", () => {
    window.print();
  });
  courseDetailsSection.appendChild(printButton);

}

function bit(){
  var container = document.getElementById("create-content");
  container.innerHTML = "";
  var link = document.createElement('a');
  link.href = "javascript:void(0)";
  link.onclick = bitPage;
  var heading = document.createElement('h1');
  heading.textContent = "Bacholers of Information Technology";
  link.appendChild(heading);
  container.appendChild(link);

  var code = document.createElement('h2');
  code.textContent = "Code: BIT";
  container.appendChild(code);

  var duration = document.createElement('h3');
  duration.textContent = "Duration: 3 Years";
  container.appendChild(duration);

  var paragraph = document.createElement('p');
  paragraph.textContent = "Our Bachelor of IT degree will teach you the essential computing skills of troubleshooting and formulating viable solutions. Additionally, you will learn to apply theories and integrate them in real-world environments, across multiple disciplines, by presenting best practices and solutions.";
  container.appendChild(paragraph);

  heading.className = "heading";

  const courseDetailsSection = document.createElement("div");
  courseDetailsSection.id = "course-details";
  document.body.appendChild(courseDetailsSection);

  
  const printButton = document.createElement("button");
  printButton.textContent = "Print Course";
  printButton.style.backgroundColor = "orange";
  printButton.style.color = "white";
  printButton.style.padding = "10px 20px";
  printButton.style.marginLeft = "45%";
  printButton.style.border = "none";
  printButton.style.borderRadius = "5px";
  printButton.style.cursor = "pointer";
  printButton.addEventListener("click", () => {
    window.print();
  });
  courseDetailsSection.appendChild(printButton);

}

function dit(){
  var container = document.getElementById("create-content");
  container.innerHTML = "";
  var link = document.createElement('a');
  link.href = "javascript:void(0)";
  link.onclick = ditPage;
  var heading = document.createElement('h1');
  heading.textContent = "Diploma in Informtion Technology";
  link.appendChild(heading);
  container.appendChild(link);

  var code = document.createElement('h2');
  code.textContent = "Code: DIT";
  container.appendChild(code);

  var duration = document.createElement('h3');
  duration.textContent = "Duration: 2 and a half Years";
  container.appendChild(duration);

  var paragraph = document.createElement('p');
  paragraph.textContent = "Our Diploma in IT will teach you the essential computing skills of troubleshooting and formulating viable solutions. Additionally, you will learn to apply theories and integrate them in real-world environments, across multiple disciplines, by presenting best practices and solutions.";
  container.appendChild(paragraph);

  heading.className = "heading";

  const courseDetailsSection = document.createElement("div");
  courseDetailsSection.id = "course-details";
  document.body.appendChild(courseDetailsSection);


  const printButton = document.createElement("button");
  printButton.textContent = "Print Course";
  printButton.style.backgroundColor = "orange";
  printButton.style.color = "white";
  printButton.style.padding = "10px 20px";
  printButton.style.marginLeft = "45%";
  printButton.style.border = "none";
  printButton.style.borderRadius = "5px";
  printButton.style.cursor = "pointer";
  printButton.addEventListener("click", () => {
    window.print();
  });
  courseDetailsSection.appendChild(printButton);

}

function cert(){
  var container = document.getElementById("create-content");
  container.innerHTML = "";
  var link = document.createElement('a');
  link.href = "javascript:void(0)";
  link.onclick = certPage;
  var heading = document.createElement('h1');
  heading.textContent = "Higher Certificate";
  link.appendChild(heading);
  container.appendChild(link);

  var code = document.createElement('h2');
  code.textContent = "Code: Certificate";
  container.appendChild(code);

  var duration = document.createElement('h3');
  duration.textContent = "Duration: 1 Year";
  container.appendChild(duration);

  var paragraph = document.createElement('p');
  paragraph.textContent = "Our Certificate will teach you the essential computing skills of troubleshooting and formulating viable solutions. Additionally, you will learn to apply theories and integrate them in real-world environments, across multiple disciplines, by presenting best practices and solutions.";
  container.appendChild(paragraph);

  heading.className = "heading";

  const courseDetailsSection = document.createElement("div");
  courseDetailsSection.id = "course-details";
  document.body.appendChild(courseDetailsSection);


  const printButton = document.createElement("button");
  printButton.textContent = "Print Course";
  printButton.style.backgroundColor = "orange";
  printButton.style.color = "white";
  printButton.style.padding = "10px 20px";
  printButton.style.marginLeft = "45%";
  printButton.style.border = "none";
  printButton.style.borderRadius = "5px";
  printButton.style.cursor = "pointer";
  printButton.addEventListener("click", () => {
    window.print();
  });
  courseDetailsSection.appendChild(printButton);

}


function searchCourse()
{
  
  document.getElementById('create-content').classList.add('show');
  var inputText = document.getElementById("inputCourse").value.toUpperCase();
  if (inputText == "BCOM") {
      bcom();
  }else if (inputText == "BIT") {
      bit();
  } else if(inputText == "DIT") {
      dit();
  } else if(inputText == "CERT") {
      cert();
  }else{
      alert("Invalid course code! Please try again.");
      location.reload();
  }
}

document.getElementById("searchButton").addEventListener("click", searchCourse);

function bcomPage(){
    
    const head = document.createElement("h1");
    head.id = "courseName";
    document.body.appendChild(head);

    const info = document.createElement("p");
    info.id = "description";
    document.body.appendChild(info);

    const table = document.createElement("table");
    table.id = "course-modules";
    document.body.appendChild(table);

    const courseDetailsSection = document.createElement("div");
    courseDetailsSection.id = "course-details";
    document.body.appendChild(courseDetailsSection);


    head.textContent = courses.bcom.name;
    info.textContent = "You will gain sound theoretical knowledge grounded in real-world applications. Furthermore, the practical assignments and projects you will complete are congruent with daily practices in the working world, providing you with business-specific and soft skills. These skills include communication skills, customer satisfaction training, the ability to work as part of a team, and the ability to teach others.Moreover, in the fourth year of your Bachelor of Computing, you will have the remarkable opportunity to complete an internship at a national or international company. Additionally, you will conduct academic research and present your findings in a formal dissertation."


    table.innerHTML = "";

  
    const headerRow = table.insertRow(0);
    const header1 = headerRow.insertCell(0);
    const header2 = headerRow.insertCell(1);
    const header3 = headerRow.insertCell(2);
    const header4 = headerRow.insertCell(3);
    const header5 = headerRow.insertCell(4);
    const header6 = headerRow.insertCell(5);
    header1.textContent = "Module Name";
    header2.textContent = "Module Code";
    header3.textContent = "Lecturer";
    header4.textContent = "Room";
    header5.textContent = "Study Guide";
    header6.textContent = "Video";

  
    for (let i = 0; i < courses.bcom.subjects.length; i++) {
        const row = table.insertRow(i + 1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        cell1.textContent = courses.bcom.subjects[i].name;

      
        cell1.addEventListener("click", function(){
            displayCourseDetails(courses.bcom.subjects[i]);
        });

        cell2.textContent = courses.bcom.subjects[i].code;
        cell3.textContent = courses.bcom.subjects[i].lecturer.name;
        cell4.textContent = courses.bcom.subjects[i].room.name;

      
        const studyGuide = document.createElement("a");
        studyGuide.href = "addOns/files/study-guide.pdf";
        studyGuide.target = "_blank";
        studyGuide.textContent = "Study Guide";
        studyGuide.style.color = "black";
        cell5.appendChild(studyGuide);

      
        const link = document.createElement("a");
        link.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        link.target = "_blank";
        link.textContent = "Video";
        link.style.color = "black";
        cell6.appendChild(link);

      
        const markAsDoneButton = document.createElement("button");
        markAsDoneButton.textContent = "Mark as Done";
        markAsDoneButton.style.cursor = "pointer";
        markAsDoneButton.style.marginLeft = "70px";
        markAsDoneButton.style.height = "30px";
        markAsDoneButton.style.width = "100px"; 
        markAsDoneButton.style.backgroundColor = "orange";
        markAsDoneButton.style.color = "white";
        markAsDoneButton.style.borderRadius = "10px";

        const module = courses.bcom.subjects[i];
        markAsDoneButton.addEventListener("click", function(){
            markAsDone(module);
            row.style.color = "grey";
            markAsDoneButton.textContent = "Done";
            markAsDoneButton.disabled = true;
            link.style.color = "grey";
            link.href = "";
            studyGuide.style.color = "grey";
            studyGuide.href = "";
        });
        cell6.appendChild(markAsDoneButton);
    }

  
    function displayCourseDetails(module){
        const courseDetailsTable = document.createElement("table");
        courseDetailsTable.id = "course-details-table";
        courseDetailsSection.appendChild(courseDetailsTable);

        const headerRow = courseDetailsTable.insertRow(0);
        const header1 = headerRow.insertCell(0);
        const header2 = headerRow.insertCell(1);
        const header3 = headerRow.insertCell(2);
        header1.textContent = "Lecturer";
        header2.textContent = "Venue";
        header3.textContent = "Description";

        const row = courseDetailsTable.insertRow(1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell2.textContent = module.room.name;
        cell3.textContent = module.description;
    }

  
    function markAsDone(module){
        module.done = true;
        alert(`You have marked ${module.name} as done!`);
    }

  
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";

    const rows = document.querySelectorAll("#course-modules tr");
    for (let i = 0; i < rows.length; i++) {
        rows[i].style.borderBottom = "1px solid #ccc";
    }

    const cells = document.querySelectorAll("#course-modules td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.padding = "10px";
    }

    courseDetailsSection.style.marginTop = "40px";
    courseDetailsSection.style.display = "none";

    const courseTables = document.querySelectorAll("#course-details table");
    for (let i = 0; i < courseDetailsTables.length; i++) {
        courseTables[i].style.width = "100%";
        courseTables[i].style.borderCollapse = "collapse";
    }

    const courseRows = document.querySelectorAll("#course-details tr");
    for (let i = 0; i < courseDetailsRows.length; i++) {
        courseRows[i].style.borderBottom = "1px solid #ccc";
    }

    const courseCells = document.querySelectorAll("#course-details td");
    for (let i = 0; i < courseDetailsCells.length; i++) {
        courseCells[i].style.padding = "10px";
    }
    
}

function bitPage(){

  
  const head = document.createElement("h1");
  head.id = "courseName";
  document.body.appendChild(head);

  const info = document.createElement("p");
  info.id = "description";
  document.body.appendChild(info);

  const table = document.createElement("table");
  table.id = "course-modules";
  document.body.appendChild(table);

  const courseDetailsSection = document.createElement("div");
  courseDetailsSection.id = "course-details";
  document.body.appendChild(courseDetailsSection);

  
  head.textContent = courses.bit.name;
  info.textContent = "You will gain sound theoretical knowledge grounded in real-world applications. Furthermore, the practical assignments and projects you will complete are congruent with daily practices in the working world, providing you with business-specific and soft skills. These skills include communication skills, customer satisfaction training, the ability to work as part of a team, and the ability to teach others.Moreover, in the fourth year of your Bachelor of Information Technology, you will have the remarkable opportunity to complete an internship at a national or international company. Additionally, you will conduct academic research and present your findings in a formal dissertation."


  table.innerHTML = "";


  const headerRow = table.insertRow(0);
  const header1 = headerRow.insertCell(0);
  const header2 = headerRow.insertCell(1);
  const header3 = headerRow.insertCell(2);
  const header4 = headerRow.insertCell(3);
  const header5 = headerRow.insertCell(4);
  const header6 = headerRow.insertCell(5);
  header1.textContent = "Module Name";
  header2.textContent = "Module Code";
  header3.textContent = "Lecturer";
  header4.textContent = "Room";
  header5.textContent = "Study Guide";
  header6.textContent = "Video";


  for (let i = 0; i < courses.bit.subjects.length; i++) {
      const row = table.insertRow(i + 1);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
      const cell6 = row.insertCell(5);
      cell1.textContent = courses.bit.subjects[i].name;

  
      cell1.addEventListener("click", function(){
          displayCourseDetails(courses.bit.subjects[i]);
      });

      cell2.textContent = courses.bit.subjects[i].code;
      cell3.textContent = courses.bit.subjects[i].lecturer.name;
      cell4.textContent = courses.bit.subjects[i].room.name;

    
      const studyGuide = document.createElement("a");
      studyGuide.href = "addOns/files/study-guide.pdf";
      studyGuide.target = "_blank";
      studyGuide.textContent = "Study Guide";
      studyGuide.style.color = "black";
      cell5.appendChild(studyGuide);

    
      const link = document.createElement("a");
      link.href = "https://youtu.be/cd4-UnU8lWY?si=WqHgMwSNlkDDAj5s";
      link.target = "_blank";
      link.textContent = "Video";
      link.style.color = "black";
      cell6.appendChild(link);

    
      const markAsDoneButton = document.createElement("button");
      markAsDoneButton.textContent = "Mark as Done";
      markAsDoneButton.style.cursor = "pointer";
      markAsDoneButton.style.marginLeft = "70px";
      markAsDoneButton.style.height = "30px";
      markAsDoneButton.style.width = "100px"; 
      markAsDoneButton.style.backgroundColor = "orange";
      markAsDoneButton.style.color = "white";
      markAsDoneButton.style.borderRadius = "10px";

      const module = courses.bit.subjects[i];
      markAsDoneButton.addEventListener("click", function(){
          markAsDone(module);
          row.style.color = "grey";
          markAsDoneButton.textContent = "Done";
          markAsDoneButton.disabled = true;
          link.style.color = "grey";
          link.href = "";
          studyGuide.style.color = "grey";
          studyGuide.href = "";

      });
      cell6.appendChild(markAsDoneButton);
  }

  
  function displayCourseDetails(module){
      const courseDetailsTable = document.createElement("table");
      courseDetailsTable.id = "course-details-table";
      courseDetailsSection.appendChild(courseDetailsTable);

      const headerRow = courseDetailsTable.insertRow(0);
      const header1 = headerRow.insertCell(0);
      const header2 = headerRow.insertCell(1);
      const header3 = headerRow.insertCell(2);
      header1.textContent = "Lecturer";
      header2.textContent = "Venue";
      header3.textContent = "Description";

      const row = courseDetailsTable.insertRow(1);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      cell2.textContent = module.room.name;
      cell3.textContent = module.description;
  }

     function markAsDone(module){
      module.done = true;
      alert(`You have marked ${module.name} as done!`);
  }

  table.style.width = "100%";
  table.style.borderCollapse = "collapse";

  const rows = document.querySelectorAll("#course-modules tr");
  for (let i = 0; i < rows.length; i++) {
      rows[i].style.borderBottom = "1px solid #ccc";
  }

  const cells = document.querySelectorAll("#course-modules td");
  for (let i = 0; i < cells.length; i++) {
      cells[i].style.padding = "10px";
  }

  courseDetailsSection.style.marginTop = "40px";
  courseDetailsSection.style.display = "none";

  const courseDetailsTables = document.querySelectorAll("#course-details table");
  for (let i = 0; i < courseDetailsTables.length; i++) {
      courseDetailsTables[i].style.width = "100%";
      courseDetailsTables[i].style.borderCollapse = "collapse";
  }

  const courseDetailsRows = document.querySelectorAll("#course-details tr");
  for (let i = 0; i < courseDetailsRows.length; i++) {
      courseDetailsRows[i].style.borderBottom = "1px solid #ccc";
  }

  const courseDetailsCells = document.querySelectorAll("#course-details td");
  for (let i = 0; i < courseDetailsCells.length; i++) {
      courseDetailsCells[i].style.padding = "10px";
  }
  
}
 
function ditPage(){

  const head = document.createElement("h1");
  head.id = "courseName";
  document.body.appendChild(head);

  const info = document.createElement("p");
  info.id = "description";
  document.body.appendChild(info);

  const table = document.createElement("table");
  table.id = "course-modules";
  document.body.appendChild(table);

  const courseDetailsSection = document.createElement("div");
  courseDetailsSection.id = "course-details";
  document.body.appendChild(courseDetailsSection);

  head.textContent = courses.dit.name;
  info.textContent = "You will gain sound theoretical knowledge grounded in real-world applications. Furthermore, the practical assignments and projects you will complete are congruent with daily practices in the working world, providing you with business-specific and soft skills. These skills include communication skills, customer satisfaction training, the ability to work as part of a team, and the ability to teach others.Moreover, in the fourth year of your Diploma in Information Technology, you will have the remarkable opportunity to complete an internship at a national or international company. Additionally, you will conduct academic research and present your findings in a formal dissertation."


  table.innerHTML = "";


  const headerRow = table.insertRow(0);
  const header1 = headerRow.insertCell(0);
  const header2 = headerRow.insertCell(1);
  const header3 = headerRow.insertCell(2);
  const header4 = headerRow.insertCell(3);
  const header5 = headerRow.insertCell(4);
  const header6 = headerRow.insertCell(5);
  header1.textContent = "Module Name";
  header2.textContent = "Module Code";
  header3.textContent = "Lecturer";
  header4.textContent = "Room";
  header5.textContent = "Study Guide";
  header6.textContent = "Video";


  for (let i = 0; i < courses.dit.subjects.length; i++) {
      const row = table.insertRow(i + 1);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
      const cell6 = row.insertCell(5);
      cell1.textContent = courses.dit.subjects[i].name;

    
      cell1.addEventListener("click", function(){
          displayCourseDetails(courses.dit.subjects[i]);
      });

      cell2.textContent = courses.dit.subjects[i].code;
      cell3.textContent = courses.dit.subjects[i].lecturer.name;
      cell4.textContent = courses.dit.subjects[i].room.name;

    
      const studyGuide = document.createElement("a");
      studyGuide.href = "addOns/files/study-guide.pdf";
      studyGuide.target = "_blank";
      studyGuide.textContent = "Study Guide";
      studyGuide.style.color = "black";
      cell5.appendChild(studyGuide);

    
      const link = document.createElement("a");
      link.href = "https://youtu.be/pxw-5qfJ1dk?si=p5ARacXkl065QRE3";
      link.target = "_blank";
      link.textContent = "Video";
      link.style.color = "black";
      cell6.appendChild(link);

    
      const markAsDoneButton = document.createElement("button");
      markAsDoneButton.textContent = "Mark as Done";
      markAsDoneButton.style.cursor = "pointer";
      markAsDoneButton.style.marginLeft = "70px";
      markAsDoneButton.style.height = "30px";
      markAsDoneButton.style.width = "100px"; 
      markAsDoneButton.style.backgroundColor = "orange";
      markAsDoneButton.style.color = "white";
      markAsDoneButton.style.borderRadius = "10px";

      const module = courses.dit.subjects[i];
      markAsDoneButton.addEventListener("click", function(){
          markAsDone(module);
          row.style.color = "grey";
          markAsDoneButton.textContent = "Done";
          markAsDoneButton.disabled = true;
          link.style.color = "grey";
          link.href = "";
          studyGuide.style.color = "grey";
          studyGuide.href = "";
      });
      cell6.appendChild(markAsDoneButton);
  }


  function displayCourseDetails(module){
      const courseDetailsTable = document.createElement("table");
      courseDetailsTable.id = "course-details-table";
      courseDetailsSection.appendChild(courseDetailsTable);

      const headerRow = courseDetailsTable.insertRow(0);
      const header1 = headerRow.insertCell(0);
      const header2 = headerRow.insertCell(1);
      const header3 = headerRow.insertCell(2);
      header1.textContent = "Lecturer";
      header2.textContent = "Venue";
      header3.textContent = "Description";

      const row = courseDetailsTable.insertRow(1);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      cell2.textContent = module.room.name;
      cell3.textContent = module.description;
  }
  
    function markAsDone(module){
      module.done = true;
      alert(`You have marked ${module.name} as done!`);
  }


  table.style.width = "100%";
  table.style.borderCollapse = "collapse";

  const rows = document.querySelectorAll("#course-modules tr");
  for (let i = 0; i < rows.length; i++) {
      rows[i].style.borderBottom = "1px solid #ccc";
  }

  const cells = document.querySelectorAll("#course-modules td");
  for (let i = 0; i < cells.length; i++) {
      cells[i].style.padding = "10px";
  }

  courseDetailsSection.style.marginTop = "40px";
  courseDetailsSection.style.display = "none";

  const courseDetailsTables = document.querySelectorAll("#course-details table");
  for (let i = 0; i < courseDetailsTables.length; i++) {
      courseDetailsTables[i].style.width = "100%";
      courseDetailsTables[i].style.borderCollapse = "collapse";
  }

  const courseDetailsRows = document.querySelectorAll("#course-details tr");
  for (let i = 0; i < courseDetailsRows.length; i++) {
      courseDetailsRows[i].style.borderBottom = "1px solid #ccc";
  }

  const courseDetailsCells = document.querySelectorAll("#course-details td");
  for (let i = 0; i < courseDetailsCells.length; i++) {
      courseDetailsCells[i].style.padding = "10px";
  }
}

function certPage(){

  const head = document.createElement("h1");
  head.id = "courseName";
  document.body.appendChild(head);

  const info = document.createElement("p");
  info.id = "description";
  document.body.appendChild(info);

  const table = document.createElement("table");
  table.id = "course-modules";
  document.body.appendChild(table);

  const courseDetailsSection = document.createElement("div");
  courseDetailsSection.id = "course-details";
  document.body.appendChild(courseDetailsSection);


  head.textContent = courses.cert.name;
  info.textContent = "This certification program is designed to equip students with the skills and knowledge required to succeed in the industry. The program covers a wide range of topics, including [list of topics]. Students will gain hands-on experience through practical assignments and projects, and will have the opportunity to work on real-world projects."


  table.innerHTML = "";


  const headerRow = table.insertRow(0);
  const header1 = headerRow.insertCell(0);
  const header2 = headerRow.insertCell(1);
  const header3 = headerRow.insertCell(2);
  const header4 = headerRow.insertCell(3);
  const header5 = headerRow.insertCell(4);
  const header6 = headerRow.insertCell(5);
  header1.textContent = "Module Name";
  header2.textContent = "Module Code";
  header3.textContent = "Lecturer";
  header4.textContent = "Room";
  header5.textContent = "Study Guide";
  header6.textContent = "Video";


  for (let i = 0; i < courses.cert.subjects.length; i++) {
      const row = table.insertRow(i + 1);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
      const cell6 = row.insertCell(5);
      cell1.textContent = courses.cert.subjects[i].name;

    
      cell1.addEventListener("click", function(){
          displayCourseDetails(courses.cert.subjects[i]);
      });

      cell2.textContent = courses.cert.subjects[i].code;
      cell3.textContent = courses.cert.subjects[i].lecturer.name;
      cell4.textContent = courses.cert.subjects[i].room.name;

    
      const studyGuide = document.createElement("a");
      studyGuide.href = "addOns/files/study-guide.pdf";
      studyGuide.target = "_blank";
      studyGuide.textContent = "Study Guide";
      studyGuide.style.color = "black";
      cell5.appendChild(studyGuide);

    
      const link = document.createElement("a");
      link.href = "https://youtu.be/X62FRKpFk9Y?si=2k_3KkJFB_3jsAXN";
      link.target = "_blank";
      link.textContent = "Video";
      link.style.color = "black";
      cell6.appendChild(link);

    
      const markAsDoneButton = document.createElement("button");
      markAsDoneButton.textContent = "Mark as Done";
      markAsDoneButton.style.cursor = "pointer";
      markAsDoneButton.style.marginLeft = "70px";
      markAsDoneButton.style.height = "30px";
      markAsDoneButton.style.width = "100px"; 
      markAsDoneButton.style.backgroundColor = "orange";
      markAsDoneButton.style.color = "white";
      markAsDoneButton.style.borderRadius = "10px";

      const module = courses.cert.subjects[i];
      markAsDoneButton.addEventListener("click", function(){
          markAsDone(module);
          module.style.color = "grey";
          markAsDoneButton.textContent = "Done";
          markAsDoneButton.disabled = true;
          link.style.color = "grey";
          link.href = "";
          studyGuide.style.color = "grey";
          studyGuide.href = "";
      });
      cell6.appendChild(markAsDoneButton);
  }


  function displayCourseDetails(module){
      const courseDetailsTable = document.createElement("table");
      courseDetailsTable.id = "course-details-table";
      courseDetailsSection.appendChild(courseDetailsTable);

      const headerRow = courseDetailsTable.insertRow(0);
      const header1 = headerRow.insertCell(0);
      const header2 = headerRow.insertCell(1);
      const header3 = headerRow.insertCell(2);
      header1.textContent = "Lecturer";
      header2.textContent = "Venue";
      header3.textContent = "Description";

      const row = courseDetailsTable.insertRow(1);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      cell2.textContent = module.room.name;
      cell3.textContent = module.description;
  }


  function markAsDone(module){
      module.done = true;
      alert(`You have marked ${module.name} as done!`);
  }


  table.style.width = "100%";
  table.style.borderCollapse = "collapse";

  const rows= document.querySelectorAll("#course-modules tr"); 
  for (let i = 0; i < rows.length; i++) { 
    rows[i].style.borderBottom = "1px solid #ccc"; 
  }
  const cells = document.querySelectorAll("#course-modules td"); 
  for (let i = 0; i < cells.length; i++) { 
    cells[i].style.padding = "10px"; 
  }
  courseDetailsSection.style.marginTop = "40px"; 
  courseDetailsSection.style.display = "none";
  
  const courseDetailsTables = document.querySelectorAll("#course-details table"); 
  for (let i = 0; i < courseDetailsTables.length; i++) { 
    courseDetailsTables[i].style.width = "100%"; 
    courseDetailsTables[i].style.borderCollapse = "collapse"; 
  }
  
  const courseDetailsRows = document.querySelectorAll("#course-details tr"); 
  for (let i = 0; i < courseDetailsRows.length; i++) { 
    courseDetailsRows[i].style.borderBottom = "1px solid #ccc"; 
  }
  
  const courseDetailsCells = document.querySelectorAll("#course-details td"); 
  for (let i = 0; i < courseDetailsCells.length; i++) { 
    courseDetailsCells[i].style.padding = "10px"; 
  } 
}




