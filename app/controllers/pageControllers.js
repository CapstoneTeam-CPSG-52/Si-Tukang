const userRepositories = require('../repositories/userRepositories');
const orderRepositories = require('../repositories/orderRepositories');
const feedbacksRepositories = require('../repositories/feedbacksRepositories');
const auth = require('./auth');

module.exports = {
    async pageHome(req, res) {
        let token = auth.parseToken();
        console.log(token);
        const fb = await feedbacksRepositories.allFeedback()
        console.log(fb)

        if (!token) {
            res.render("home", {
                layout: "layouts/main-layout",
                title: "Si Tukang",
                token: null,
                fb
            });
            return
        }
        res.render("home", {
            layout: "layouts/main-layout",
            title: "Si Tukang",
            token,
            fb
        });
    },
    pageSignin(req, res) {
        const token = auth.parseToken();
        if (!token) {
            res.render("signin", {
                layout: "layouts/main-layout",
                title: "Signin",
                token: null
            });
        }
        res.render("signin", {
            layout: "layouts/main-layout",
            title: "Signin",
            token
        });
    },
    pageSignup(req, res) {
        const token = auth.parseToken();
        if (!token) {
            res.render("signup", {
                layout: "layouts/main-layout",
                title: "Signup",
                token: null
            });
        }
        res.render("signup", {
            layout: "layouts/main-layout",
            title: "Signup",
            token
        });
    },
    async pageDashboardAdminUsers(req, res) {
        const token = auth.parseToken();
        let data = await userRepositories.allUsers();
        data = data.filter((row) => row.role === req.params.role);
        res.render("dashboardAdmin", {
            layout: "layouts/navbarDashboard",
            title: "Dashboard Admin",
            data,
            token
        });
    },

    async pageOrderTukang(req, res) {
        const token = auth.parseToken();
        let data = await userRepositories.allUsers();
        data = data.filter((row) => row.service === req.params.service);
        if (!token) {
            res.render("signin", {
                layout: "layouts/main-layout",
                title: "Signin",
                token: null
            });
        }
        res.render("order", {
            layout: "layouts/main-layout",
            title: "Order Tukang",
            data,
            token
        });
    },

    async pageDetailOrder(req, res) {
        const token = auth.parseToken();
        let data = await userRepositories.allUsers();
        data = data.find((row) => row.id == req.params.id);
        res.render("detailOrder", {
            layout: "layouts/main-layout",
            title: "Detail Order",
            data,
            token
        });
    },

    async pagePesanan(req, res) {
        const token = auth.parseToken();
        let data = await orderRepositories.allOrder();
        data = data.filter((row) => row.status == req.params.status);
        data = data.filter((row) => row.id_users == token.id);
        res.render("pesananSaya", {
            layout: "layouts/main-layout",
            title: "Pesanan Saya",
            data,
            token
        });
    },

    async pageFeedbacks(req, res) {
        console.log('Tes')
        const token = auth.parseToken();
        const data = {
            id_tukang: req.params.id_tukang,
        }
        let fb = await feedbacksRepositories.allFeedback()
        fb = fb.filter((row) => row.id_tukang == req.params.id_tukang)
        res.render("feedbacks", {
            layout: "layouts/main-layout",
            title: "Feedback",
            data,
            token,
            fb
        });
    },

    async pageDataPesanan(req, res) {
        const token = auth.parseToken();
        let data = await orderRepositories.allOrder()
        console.log(req.params.category)
        data = data.filter((row) => row.service_category == req.params.category)
        console.log(data)
        res.render("data-pesanan", {
            layout: "layouts/navbarDashboard",
            title: "Data Pesanan",
            data,
            token
        });
    },

    async pageDashboardFeedback(req, res) {
        const token = auth.parseToken();
        let data = await feedbacksRepositories.allFeedback()
        console.log(req.params.category)
        data = data.filter((row) => row.service_category == req.params.category)
        console.log(data)
        res.render("dashboardFeedback", {
            layout: "layouts/navbarDashboard",
            title: "Data Feedback",
            data,
            token
        });
    }
}

