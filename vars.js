var varDomainBareTop = "example.net";
var varDomainBareSub = "www" + "." + varDomainBareTop;
var varUseHttpSecure = "True"; // True or False

// Will delete this later
console.debug("Working");

// Assume HttpSecure unless explicitly and perfectly said otherwise
if (varUseHttpSecure == "False") {
    var varDomainHttpTop = "http://" + varDomainBareTop;
    var varDomainHttpSub = "http://" + varDomainBareSub; // + "." + varDomainBareTop;
} else {
    var varDomainHttpTop = "https://" + varDomainBareTop;
    var varDomainHttpSub = "https://" + varDomainBareSub; // + "." + varDomainBareTop;
}
