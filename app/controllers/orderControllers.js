const orderRepositories = require('../repositories/orderRepositories');

module.exports = {
    async create(req, res) {
        const dt = { ...req.body, status: "Belum_Dibayar" }
        orderRepositories.createOrder(dt);
        res.redirect('/pesananSaya/Belum_Dibayar');
    },

    async update(req, res) {
        orderRepositories.updateOrder(req.params.id, req.params.status).then(() => {
            if (req.params.status == 'Diproses') {
                res.redirect('/pesananSaya/Diproses');
                return
            }
            if (req.params.status == 'Selesai') {
                res.redirect('/pesananSaya/Selesai');
                return
            }
        })
    },

    delete(req, res) {
        orderRepositories.hapus({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/dashboardAdmin/tukang')
    }
}

