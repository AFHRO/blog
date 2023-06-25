const firstNWords = (str?: string, n?: number) => {if(!str || !n) return;
    
    str = str.replace(/(<([^>]+)>)/gi, "");
let words = str.split(' ');
if (words.length > n) {
    return str.split(' ').slice(0, n).join(' ')+ '...';
}
return str;
 }
export default firstNWords;