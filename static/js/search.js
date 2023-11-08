
let jsonData = [];
let searchValue = "";
let timeoutId = null;
let links = [];
let prev_results = [];
let arrayOfObjects = [];


document.addEventListener("DOMContentLoaded", function () {
  console.log("search js running")
  const template = document.getElementById("template");
  const container = document.querySelector(".search-box");

  let searchBar = document.querySelector(".search input");
  let element = document.querySelector(".search-box");

  let dataString = localStorage.getItem("prevResults");
  repopulate(dataString);
  localStorage.removeItem('data');
  passData();

  function repopulate(dataString) {
    if(dataString != null){
      dataString = '[' + dataString + ']';
      arrayOfObjects = JSON.parse(dataString)

      arrayOfObjects.forEach((item) => {
        const templateContent = document.importNode(template.content, true);
        templateContent.querySelector('a').innerText = item.name;
        container.appendChild(templateContent);

        element.style.opacity = 1;
        searchBar.style.color = "black";
        searchBar.style.zIndex = "1";
        var search = document.querySelector(".search");
        search.style.color = "black";
        search.style.borderColor = "grey";
        var searchButton = document.querySelector(".search button");
        searchButton.style.color = "black";
        element.style.paddingTop = "100px";
      });

    } else {
      return 
    }
  }

  function passData(){

    links = document.querySelectorAll(".link a");
    console.log(links)

    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        let clickedLink = event.target;
        let name = clickedLink.innerText;
        console.log(name)
        
        if(jsonData.length > 0){
          jsonData.forEach((item) => {
            if (name === item.name) {
              let json = JSON.stringify(item);
              localStorage.setItem('data', json);
            }
            let temp = JSON.stringify(item);
            prev_results.push(temp)
            localStorage.setItem('prevResults', prev_results)
          });
        } else {
          arrayOfObjects.forEach((item) => {
            if (name === item.name) {
              let json = JSON.stringify(item);
              localStorage.setItem('data', json);
            }
          });
        }
        

        console.log("prevResults:", localStorage.getItem('prevResults'))

      });
    });

  }

  function debounce(func, delay) {
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  function searchApi(url) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        jsonData = data.nonprofits;
        jsonData = Array.from(jsonData);

        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }

        jsonData.forEach(nonprofit => {
          const templateContent = document.importNode(template.content, true);
          templateContent.querySelector('a').innerText = nonprofit.name;
          container.appendChild(templateContent);

          searchBar.style.color = "black";
          searchBar.style.zIndex = "1";
          var search = document.querySelector(".search");
          search.style.color = "black";
          search.style.zIndex = "10";
          search.style.borderColor = "grey";
          var searchButton = document.querySelector(".search button");
          searchButton.style.color = "black";
          element.style.paddingTop = "0px";
        });
        passData();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error.message);
      });
  }

  searchBar.addEventListener('input', debounce(function (e) {
    searchValue = searchBar.value;
    let term = searchValue.toLowerCase();

    if (searchValue.length > 0) {
      let url = "https://partners.every.org/v0.2/search/" + encodeURIComponent(term) + "?apiKey=pk_live_f48f4ff37099fcd124af6cc8c1aeea13";
      searchApi(url);
      element.style.opacity = 1;
    } else {
      element.style.opacity = 0;
      searchBar.style.color = "white";
      var search = document.querySelector(".search");
      search.style.color = "white";
      search.style.borderColor = "white";
      var searchButton = document.querySelector(".search button");
      searchButton.style.color = "white";
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
  }, 500)); 
});
