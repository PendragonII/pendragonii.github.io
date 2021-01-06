function scriptCreate(scriptCreateName) {
    var scriptCreateArg = document.createElement('script');
    scriptCreateArg.src=scriptCreateName;
    document.head.appendChild(scriptCreateArg);
}
function cssCreate(cssCreateName) {
    var cssCreateArg = document.createElement('link');
    cssCreateArg.rel="stylesheet";
    cssCreateArg.type="text/css";
    cssCreateArg.href=cssCreateName;
    document.head.appendChild(cssCreateArg);
}

console.log("1");
scriptCreate("vars.js");
console.log("2");
cssCreate("css.css");
console.log("3");
