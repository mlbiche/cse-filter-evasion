const antiPhishingFilters = [
    // TODO
];

let antiPhishingFilterIndex = 0;

/**
 * Update the selected anti-phishing filter index
 */
function antiPhishingFilterChange() {
    antiPhishingFilterIndex = parseInt(document.getElementById('anti-phishing-filter-select').value);

    sendEmail();
}

/**
 * On attacker form submission
 * display the attacker email in the victim card and parse it.
 * The corresponding alert is displayed
 */
function sendEmail() {
    // Get the typed email in the attacker input
    const email = document.getElementById('email-preparation-input').value;

    // Get the HTML switch state
    const isHTML = document.getElementById('html-switch').checked;

    // Display the email in the victim card
    const emailContent = document.getElementById('email-content');

    if (isHTML)
        emailContent.innerHTML = email;
    else
        emailContent.innerText = email;

    parseEmail(email);

    // Return false to prevent webpage reloading
    return false;
}

/**
 * Parse the attacker email and display the corresponding alert
 */
function parseEmail(email) {
    const filterAcceptAlert = document.getElementById('filter-accept');
    const filterBlockAlert = document.getElementById('filter-block');

    // Hide the two alerts
    filterAcceptAlert.style.display = 'none';
    filterBlockAlert.style.display = 'none';

    const isAccepted = antiPhishingFilters[antiPhishingFilterIndex](email);

    if (isAccepted)
        filterAcceptAlert.style.display = 'block';
    else
        filterBlockAlert.style.display = 'block';
}