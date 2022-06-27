const userRepositories = require('../repositories/userRepositories');
const localStorage = require('localStorage');

module.exports = {
    signup(req, res) {
        const role = 'customer';
        userRepositories.createUsers({ ...req.body, role })
        res.redirect('/signin');
    },

    async signin(req, res) {
        const user = await userRepositories.searchEmail(req.body.email);
        if (!user) {
            res.redirect('/signup');
            return
        }
        if (user.password !== req.body.password) {
            res.redirect('/signup');
            return
        }
        const access = {
            id: user.id,
            role: user.role,
            address: user.address
        }
        localStorage.setItem('access', JSON.stringify(access));
        if (user.role === 'admin') {
            res.redirect('/dashboardAdmin/customer');
            return
        }
        res.redirect('/');
    },

    logout(req, res) {
        localStorage.removeItem('access');
        res.redirect('/signin');
    },

    delete(req, res) {
        userRepositories.hapus({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/dashboardAdmin/customer')
    }
}

