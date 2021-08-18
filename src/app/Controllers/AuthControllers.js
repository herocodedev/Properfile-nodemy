const Accounts = require('../models/account')
class AuthControllers {

    // [POST] /auth/register
    index(req, res, next) {
        var username = req.body.username
        var password = req.body.password

        Accounts.findOne({ username: username })
            .then((data) => {
                console.log(data)
                if (data)
                    res.json('Tài Khoản Đã Có Người Khác Sử Dụng!!')
                else {
                    const accounts = new Accounts(req.body)
                    return accounts.save()
                }
            })
            .then(() => {
                res.json('Tạo Tài Khoản Thành Công!!!')
            })
            .catch(next)

    }

    // [POST] /auth/login
    login(req, res, next) {
        var username = req.body.user
        var password = req.body.password
        Accounts.findOne(req.body)
            .then((data) => {
                if (data)
                    res.json('Đăng Nhập Thành Công!!!')
                else
                    res.json('Đăng Nhập Thất Bại!!!')
            })
            .catch(next)
    }

    //[PUT] /auth/:id
    edit(req, res, next) {
        var id = req.params.id
        var newPassword = req.body.password
        Accounts.findByIdAndUpdate(id, {
                password: newPassword
            })
            .then((data) => {
                console.log(data)
                res.json('Update Thành Công!!!')
            })
            .catch(next)
    }

    //[DELETE] /auth/:id
    delete(req, res, next) {
        var id = req.params.id
        Accounts.deleteOne({ _id: id })
            .then(() => {
                res.json('Xóa Thành Công')
            })
            .catch(next)
    }

}
module.exports = new AuthControllers