document.getElementById("terminal").focus();
var input = document.getElementById("terminal");
document.querySelector("body").addEventListener("click", () => {
  document.getElementById("terminal").focus();
});

const COMMANDS = {
  help: ["about ", "skills", "experience", "socials"].join("<br>"),
  about: "Hello :), I'm Gonçalo Veloso",
  skills: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Web Development",
    "Dev Ops",
  ].join("<br>"),
  experience:
    "Currently working as a Computer Vision Engineer for Centro Algoritmi and BOSCH Portugal",
  socials:
    'You can contact me on any of the following links:<br>["<a target="_blank" rel="noopener noreferrer" href="https://github.com/gveloso9983" class="social link">GitHub</a>", "<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/goncalo-veloso/" class="social link">Linked In</a>"]',
};
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    terminalAction();
  }
});

function terminalAction() {
  let text = "";
  let val = terminal.value.toLowerCase();
  val = val.trim();
  document.getElementById("terminalContent").innerHTML +=
    "  <span> <p> guest@gveloso.github.io:$ ~ " + val + "</p> </span> ";
  if (val == "clear" || val == "cls") {
    document.getElementById("terminalContent").innerHTML = "";
  } else if (!COMMANDS.hasOwnProperty(val)) {
    if (val == "skill" || val == "sills" || val == "sklls") {
      output = `no such command: ${val}, did you mean skills?`;
    } else if (val == "abot" || val == "abut" || val == "abbout") {
      output = `no such command: ${val}, did you mean about?`;
    } else {
      output = `no such command: ${val}`;
    }
    printOptionValue(output);
  } else {
    output = `${COMMANDS[val]}`;
    printOptionValue(output);
  }
  terminal.value = "";
}
function scrollToBottom() {
  var terminalWindow = document.getElementsByClassName("terminalWindow");
  terminalWindow.scrollTop = terminalWindow.scrollHeight;
}

function printOptionValue(text) {
  document.getElementById("terminalContent").innerHTML +=
    " <p>" + text + "</p> ";
  scrollToBottom();
}

var printHelpList = () => {
  printOptionValue(help);
};

function greeting() {
  printOptionValue("Hello! Write Help for a list of commands!");
}
