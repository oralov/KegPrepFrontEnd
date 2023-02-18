const axios = require('axios');

axios.get('http://leaf-subsequent-arrow.glitch.me/recipes/Baked Garlic Shrimp').then(resp => {

    console.log(resp.data);
    document.getElementById("name").innerText = resp.data.Name
});