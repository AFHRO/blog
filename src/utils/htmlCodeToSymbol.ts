const htmlCodeToSymbol = (str: string) => {
	if (!str) return "";
	if(typeof str !== 'string') return str;
	return str.replace(/&#(\d+);/g, function (match, dec) {
		return String.fromCharCode(dec);
	});
};

export default htmlCodeToSymbol;
