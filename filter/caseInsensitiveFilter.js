/**
 * Filter that parses the email to check if it contains any forbidden link from a provided black list, case insensitive.
 * @param email The attacker email
 * @returns True if the email is accepted, false otherwise
 */
function caseInsensitiveFilter(email) {
    let accept = blackListFilter(email);
    
    if (!accept) return accept;

    /**
     * Check if any of the black listed websites are in the email, case insensitive.
     * If so, return false
     */
    BLACK_LIST.forEach(blackListedWebsite => {
        if (email.search(new RegExp(blackListedWebsite, 'i')) != -1) {
            accept = false;
        }
    });

    return accept;
}