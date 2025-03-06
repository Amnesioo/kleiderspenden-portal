document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let escapedName = escapeHTML(name);
    alert("Spende von " + escapedName + " wurde erfolgreich abgeschickt!");
});

function escapeHTML(text) {
    return text.replace(/[&<>"]/g, function(tag) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;'
        }[tag] || tag;
    });
}