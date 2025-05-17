
export const searchInDocument = (searchText: string): HTMLSpanElement[] => {
  const textNodes: Node[] = [];
  const highlights: HTMLSpanElement[] = [];
  const highlightClass = 'bg-yellow-300';

  // Skip if no search text
  if (!searchText.trim()) return highlights;

  const searchLower = searchText.toLowerCase();
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null
  );

  // Find all text nodes containing the search term
  let node;
  while (node = walker.nextNode()) {
    if (node.textContent && node.textContent.toLowerCase().includes(searchLower)) {
      textNodes.push(node);
    }
  }

  // Highlight matching text in found nodes
  textNodes.forEach(textNode => {
    const text = textNode.textContent || '';
    const parent = textNode.parentNode;
    
    if (parent && text.toLowerCase().includes(searchLower)) {
      const fragment = document.createDocumentFragment();
      let currentText = text;
      let lastIndex = 0;
      const regex = new RegExp(searchLower, 'gi');
      let match;
      
      while ((match = regex.exec(text)) !== null) {
        // Text before the match
        if (match.index > lastIndex) {
          fragment.appendChild(
            document.createTextNode(currentText.substring(lastIndex, match.index))
          );
        }
        
        // Highlighted match
        const highlightSpan = document.createElement('span');
        highlightSpan.classList.add(highlightClass);
        highlightSpan.textContent = match[0];
        fragment.appendChild(highlightSpan);
        highlights.push(highlightSpan);
        
        lastIndex = regex.lastIndex;
      }
      
      // Remaining text after the last match
      if (lastIndex < currentText.length) {
        fragment.appendChild(
          document.createTextNode(currentText.substring(lastIndex))
        );
      }
      
      if (parent) {
        parent.replaceChild(fragment, textNode);
      }
    }
  });

  return highlights;
};
