const userRoute = (app) => {
    app.route('/user')
        .get((req, res) => {
            res.send('USER GET REQUEST');
        })

    app.route('/user/:userId')
        .get((req, res) => { res.send('USER GET SINGLE REQUEST'); })
        .put((req, res) => { res.send('USER UPDATE REQUEST'); })
        .delete((req, res) => { res.send('USER DELETE REQUEST'); })
}

export default userRoute;