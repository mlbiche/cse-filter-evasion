/**
 * Filter that parse the email to check if it contains any forbidden link from a provided black list.
 * @param email The attacker email
 */
function blackListFilter(email) {
    let accept = true;

    /**
     * Check if any of the black listed websites are in the email.
     * If so, return false;
     */
    BLACK_LIST.forEach(blackListedWebsite => {
        if (email.search(blackListedWebsite) != -1) {
            accept = false;
        }
    });

    return accept;
}