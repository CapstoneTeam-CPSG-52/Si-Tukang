const { Feedback, Users } = require('../../models')
const createFeedback = (data) => {
    return Feedback.create(data)
}

const allFeedback = () => {
    return Feedback.findAll({
        include: [
            {
                model: Users, as: 'tukang'
            },
            {
                model: Users, as: 'pemesan'
            }
        ]
    })
}

const hapus = (id) => {
    Feedback.destroy(id)
}

module.exports = { createFeedback, allFeedback, hapus }