/**
 * Naive filter that always return true.
 * @param email The attacker email
 * @returns True if the email is accepted (always)
 */
function noFilter(email) {
    return true;
}