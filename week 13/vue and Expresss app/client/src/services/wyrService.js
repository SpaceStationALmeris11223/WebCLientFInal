export default{
    getRandomWYR(){//we chose wyr becuase is the api route| returns a promise
        return fetch('/wyr').then(response => {
            //you don't need to include the host(full url)
            return response.json() //returns the respone with Json
        })
    }
}
