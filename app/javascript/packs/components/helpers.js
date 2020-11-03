export const getEmbedCode = (url) => {
  // figure out if it's spotify or mixcloud or soundcloud
  // transform url into mixcloud src string
  
  if(url && url.includes("www.mixcloud.com")) {
    url = url.split("/");
    url = ["'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2F", url[3], "%2F", url[4], "%2F'"].join("");    
    return `<iframe width='100%' height='120' src=${url} frameborder='0' ></iframe>`;
  } else if (url && url.includes("spotify.com")) {
    url = url.split("/");
    url = ["'https://open.spotify.com/embed-podcast/episode/", url[4], "'"].join("");
    return `<iframe src=${url} width='100%' height='152' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>`;
  } else {
    return;
  }
};

