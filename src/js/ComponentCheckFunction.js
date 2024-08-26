/**
 * HTML 파일에 data-include-component 속성이 있으면 그 속성값의 경로의 파일을 가져와서 innerHTML로 대체한다.
 * @param {div} element - DIV 요소
 */
export const ComponentCheckFunction = (element) => {
  const includeComponent = element.dataset.includeComponent;
  if (includeComponent) {
    fetch(includeComponent)
      .then(response => {
        if (!response.ok) throw new Error('네트워크 리스펀스 에러\n' + response.status);
        return response.text();
      })
      .then(data => {
        const regex = /<script[\s\S]*?<\/script>/g;
        let match;
        const results = [];
  
        while ((match = regex.exec(data)) !== null) {
          results.push(match[0]);
        }
  
        element.outerHTML = data;
  
        for (let s of results) {
          const newScript = document.createElement('script');
          const srcMatch = s.match(/src=['"]?([^'"]+)['"]?/);
  
          if (srcMatch && srcMatch[1]) newScript.src = srcMatch[1];
            else newScript.text = s.replace(/<script.*?>|<\/script>/g, '');
  
          const typeMatch = s.match(/type=['"]?([^'"]+)['"]?/);
          if (typeMatch && typeMatch[1]) newScript.type = typeMatch[1];

          document.body.appendChild(newScript);
        }
      })
      .catch(error => {
        console.error('Fetch 에러\n', error);
        alert('Fetch 에러!');
      })
  }
}