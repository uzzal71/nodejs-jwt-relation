const categoryRoute = (app) => {
    app.route('/category')
        .get((req, res) => {
            res.send('CATEGORY GET REQUEST');
        })
        .post((req, res) => {
            res.send('CATEGORY POST REQUEST');
        })

    app.route('/category/:categoryId')
        .get((req, res) => { res.send('CATEGORY GET SINGLE REQUEST'); })
        .put((req, res) => { res.send('CATEGORY UPDATE REQUEST'); })
        .delete((req, res) => { res.send('CATEGORY DELETE REQUEST'); })
}

export default categoryRoute;