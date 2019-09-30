/**
 * Filter that parses the email to check if it contains any forbidden link from a provided black list.
 * @param email The attacker email
 * @returns True if the email is accepted, false otherwise
 */
function blackListFilter(email) {
    let accept = noFilter(email);
    
    if (!accept) return accept;

    /**
     * Check if any of the black listed websites are in the email.
     * If so, return false
     */
    BLACK_LIST.forEach(blackListedWebsite => {
        if (email.search(blackListedWebsite) != -1) {
            accept = false;
        }
    });

    return accept;
}