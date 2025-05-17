
export const searchInDocument = (searchTerm: string): void => {
  const searchText = searchTerm.toLowerCase();
  const bodyText = document.body.innerText.toLowerCase();
  
  if (bodyText.includes(searchText)) {
    // Create temporary highlights for matches
    const textNodes: Node[] = [];
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent && node.textContent.toLowerCase().includes(searchText)) {
        textNodes.push(node);
      }
    }

    // Highlight matches
    const highlightClass = 'bg-yellow-300';
    const highlights: HTMLSpanElement[] = [];

    textNodes.forEach(textNode => {
      const text = textNode.textContent || '';
      const parent = textNode.parentNode;
      
      if (parent && text.toLowerCase().includes(searchText)) {
        const fragment = document.createDocumentFragment();
        let currentText = text;
        let lastIndex = 0;
        const regex = new RegExp(searchText, 'gi');
        let match;
        
        while ((match = regex.exec(text)) !== null) {
          // Text before the match
          if (match.index > lastIndex) {
            fragment.appendChild(
              document.createTextNode(currentText.substring(lastIndex, match.index))
            );
          }
          
          // Highlighted match text
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

    // Scroll to first result
    if (highlights.length > 0) {
      highlights[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Remove highlights after a few seconds
      setTimeout(() => {
        window.location.reload(); // Simple way to restore the page
      }, 3000);
    }
  }
};
