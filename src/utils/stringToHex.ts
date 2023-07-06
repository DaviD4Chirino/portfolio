/**
 * 
 * @returns a Hex color String
 * @example stringToColor("Any string") == "#6541235"
 */
export default function stringToHex(str: string): string {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var Color = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        Color += ('00' + value.toString(16)).substr(-2);
    }
    return Color;
}