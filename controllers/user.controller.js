const axios = require('axios');

exports.findByLogin = async (res, req) => {
    const login = req.params.login;
    const data = await axios.create({
        baseUrl: 'https://api.github.com/users',
        timeout: 10000,
        headers: {
            'Accept': 'application/vnd.github.v3+json'
          }  
    }).get(login)
    res.json(data.data);
};