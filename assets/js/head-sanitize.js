// To remove any potentially harmful HTML tags and attributes from user input. 
function sanitizeHTML(input) {
    // Create a temporary DOM element
    const tempDiv = document.createElement('div');
    // Set the input as the inner HTML of the temporary div
    tempDiv.innerHTML = input;
    
    // Use textContent to strip out any HTML tags
    return tempDiv.textContent || tempDiv.innerText || "";
}


    // Function to inject sanitized HTML content into the spans
    function injectData() {
        // Get data from the text areas
        var keywords = document.getElementById("textarea-keywords").value;
        var overview = document.getElementById("textarea-overview").value;
        var objectives = document.getElementById("textarea-objectives").value;
        var introduction = document.getElementById("textarea-introduction").value;
        var developments = document.getElementById("textarea-developments").value;
        var assessments = document.getElementById("textarea-assessments").value;
        var differentiations = document.getElementById("textarea-differentiations").value;
        var closure = document.getElementById("textarea-closure").value;
        var integration = document.getElementById("textarea-integration").value;
        var reflections = document.getElementById("textarea-reflections").value;

        // Sanitize and then inject the data using innerHTML
        document.getElementById("inject-keywords-1").innerHTML = sanitizeHTML(keywords);
        document.getElementById("inject-overview-1").innerHTML = sanitizeHTML(overview);
        document.getElementById("inject-objectives-1").innerHTML = sanitizeHTML(objectives);
        document.getElementById("inject-introduction-1").innerHTML = sanitizeHTML(introduction);
        document.getElementById("inject-developments-1").innerHTML = sanitizeHTML(developments);
        document.getElementById("inject-assessments-1").innerHTML = sanitizeHTML(assessments);
        document.getElementById("inject-differentiations-1").innerHTML = sanitizeHTML(differentiations);
        document.getElementById("inject-closure-1").innerHTML = sanitizeHTML(closure);
        document.getElementById("inject-integration-1").innerHTML = sanitizeHTML(integration);
        document.getElementById("inject-reflections-1").innerHTML = sanitizeHTML(reflections);
    }