
export const RemoveBrackets = (headings) => {
  const newArr = headings.map(item => {
    item.content = item.content?.replace(/[\[\]'"]+/g, '') || null
    return item
  })

 return newArr
} 

export const Parser = (str) => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(str, 'text/html');
	return doc.body.innerText;
};