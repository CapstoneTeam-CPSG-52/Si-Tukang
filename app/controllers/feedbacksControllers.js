const feedbacksRepositories = require('../repositories/feedbacksRepositories');

module.exports = {
    async create(req, res) {
        feedbacksRepositories.createFeedback(req.body)
        res.redirect('/');
    },

    delete(req, res) {
        feedbacksRepositories.hapus({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/dashboardFeedback')
    }
}

