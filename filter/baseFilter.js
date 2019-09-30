/**
 * Filter that parses the email to check if it contains any forbidden link from a provided black list.
 * Check if any base is a forbidden link.
 * @param email The attacker email
 * @returns True if the email is accepted, false otherwise
 */
function baseFilter(email) {
    let accept = caseInsensitiveFilter(email);

    if (!accept) return accept;

    /** 
     * Find the first <base> tag
     * The regular expression is case insensitive
     * It matches any string as the following ones :
     * - <base href="...">
     * - <base   href="...">
     * - <base target="_blank" href="...">
     * It doesn't match <base > href="..."> as it is not a proper <base> tag so it is not malicious
     */
    const baseRegExpResult = /<base[^>]*href="/i.exec(email);

    if (!baseRegExpResult)
        return accept;

    // Get the link from the <base> tag
    const baseLinkStartIndex = baseRegExpResult.index + baseRegExpResult[0].length;
    const baseLinkEndIndex = email.indexOf('"', baseLinkStartIndex);
    const baseLink = email.slice(baseLinkStartIndex, baseLinkEndIndex);

    /** 
     * Find all the link <a> tags
     * The regular expression is case insensitive and global
     * It matches any string as the following ones :
     * - <a href="...">
     * - <a   href="...">
     * - <a target="_blank" href="...">
     * - <a class="..." href="...">
     * It doesn't match <a > href="..."> as it is not a proper <a> tag so it is not malicious
     */
    const linkRegExp = /<a[^>]*href="/gi;
    let linkRegExpResult;
    const linksWithBase = [];

    // For each occurences of an <a> tag, parse the link and add the base
    while (linkRegExpResult = linkRegExp.exec(email)) {
        // Get the link from the <a> tag
        const linkStartIndex = linkRegExpResult.index + linkRegExpResult[0].length;
        const linkEndIndex = email.indexOf('"', linkStartIndex);
        const linkWithoutBase = email.slice(linkStartIndex, linkEndIndex);

        // Add the base link to the found link
        linksWithBase.push(`${baseLink}/${linkWithoutBase}`);
    }

    // Check if any of the link is a blacklisted
    linksWithBase.forEach(linkWithBase => {
        if (BLACK_LIST.includes(linkWithBase));
            accept = false;
    });

    return accept;
}