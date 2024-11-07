export default function getAttr(str: string, elem: string, attr: string) {
	const regex = new RegExp(`<${elem}[^>]*?${attr}=(["\\'])?((?:.(?!\\1|>))*.?)\\1?`, 'ig');
	const res = regex.exec(str);
	return res && res.length >= 0 ? res[2] : null;
}
