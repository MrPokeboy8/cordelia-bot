/**
 * Converts a string into large emoji characters
 *
 * @param      {String}  str     The string
 * @return     {String}  Emojified string
 */
export const emojifyString = str =>
  [...str.toLowerCase()]
  .filter(char => /[a-z0-9!? ]/.test(char))
  .map(char => ({
    ' ': ' ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':exclamation:',
    '?': ':question:'
  })[char] || `:regional_indicator_${char}:`)
  .join('')
  .replace(/.{2001,}/, str =>
    str.slice(0, 2000)
    .replace(/:[^:]+$/, '')
  );

/**
 * Escapes a string for use in a Regular Expression
 *
 * @param      {String} str  The string
 * @return     {String} The escaped string
 */
export const regexEscape = str => 
  str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');