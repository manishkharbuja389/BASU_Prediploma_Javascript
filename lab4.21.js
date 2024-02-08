document.addEventListener('DOMContentLoaded', function() {
    // Get the submit button element
    let submitButton = document.getElementById('submitButton');
  
    // Add click event listener to the submit button
    submitButton.addEventListener('click', function() {
      // Get the link element
      let link = document.getElementById('sampleLink');
  
      // Call the function to get link attributes and log them
      let linkAttributes = getLinkAttributes(link);
      console.log(linkAttributes);
    });
  
    // Function to get link attributes
    function getLinkAttributes(linkElement) {
      // Check if the provided argument is a link element
      if (linkElement instanceof HTMLAnchorElement) {
        // Get the attributes
        let href = linkElement.href;
        let hreflang = linkElement.hreflang;
        let rel = linkElement.rel;
        let target = linkElement.target;
        let type = linkElement.type;
  
        // Create an object to store the attributes
        let attributes = {
          href: href,
          hreflang: hreflang,
          rel: rel,
          target: target,
          type: type
        };
  
        // Return the attributes object
        return attributes;
      } else {
        // If the provided argument is not a link element, return null
        console.error('The provided argument is not a link element.');
        return null;
      }
    }
  });
  