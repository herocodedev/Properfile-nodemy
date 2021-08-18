class SiteControllers {

    // [GET] /
    index(req, res, next) {
        res.send("123")
    }

    // [POST] /
    show(req, res, next) {

        console.log(req.headers)
        res.send('123')
    }

}
module.exports = new SiteControllers