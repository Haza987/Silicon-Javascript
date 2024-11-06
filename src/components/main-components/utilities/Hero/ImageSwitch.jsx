// I used chatGPT for help in switching the images depending on whether data-theme was light or dark. 
// All comments are my own as I aim to learn from the code that I have used.

import React, { useState, useEffect } from 'react';



const ImageSwitch = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // This gets the current theme from data-theme 
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme);

    // The Mutation Observer will watch for any changes within the html element.
    const observer = new MutationObserver(() => {
      // const to get the updated theme and then to set theme to the new theme.
      const updatedTheme = document.documentElement.getAttribute("data-theme");
      setTheme(updatedTheme);
    });

    // this is the start of the observing for element changes within the html element.
    // attributes:true watches for the changes
    // attributeFilter is to specify where is should be looking for changes.
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // clean up function that disconnects the observer and then an empty array so that it only runs once.
    return () => observer.disconnect();
  }, []);

  return (
    <div className="downloadbuttons"> 
      {theme === "light" ? (
        <>
          <a href="https://apps.apple.com/us/app/silicon-info/id1542271266?mt=12" target='_blank' className="app">
            <img src="/src/Images/FPImages/appstore.svg" alt="App Store" />
          </a>
          <a href="https://play.google.com/store/search?q=silicon&c=apps&hl=en" target='_blank' className="app">
            <img src="/src/Images/FPImages/googleplay.svg" alt="Google Play" />
          </a>
        </>
      ) : (
        <>
          <a href="https://apps.apple.com/us/app/silicon-info/id1542271266?mt=12" target='_blank' className="app-dark">
            <img src="/src/Images/FPImages/appstore-dark.svg" alt="App Store Dark" />
          </a>
          <a href="https://play.google.com/store/search?q=silicon&c=apps&hl=en" target='_blank' className="app-dark">
            <img src="/src/Images/FPImages/googleplay-dark.svg" alt="Google Play Dark" />
          </a>
        </>
      )}
    </div>
  );
};

export default ImageSwitch;
