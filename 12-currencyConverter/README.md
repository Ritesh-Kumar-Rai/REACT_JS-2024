# Currency Converter


    const url = `https://api.exchangerate-api.com/v4/latest/${currency}`;

# XMLHttpRequest API

    I have used AJAX XMLHttpRequest API,

     const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
      
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        setdata(response["rates"]);
      }
    
    };

    xhttp.open("GET", url, true);
    xhttp.send();

    



