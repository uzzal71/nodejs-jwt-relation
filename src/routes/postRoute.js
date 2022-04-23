const postRoute = (app) => {
    app.route('/post')
        .get((req, res) => {
            res.send('POST GET REQUEST');
        })
        .post((req, res) => {
            res.send('POST POST REQUEST');
        })

    app.route('/post/:postId')
        .get((req, res) => { res.send('POST GET SINGLE REQUEST'); })
        .put((req, res) => { res.send('POST UPDATE REQUEST'); })
        .delete((req, res) => { res.send('POST DELETE REQUEST'); })
}

export default postRoute;