const { Order, Users } = require('../../models')
const createOrder = (data) => {
    return Order.create(data)
}

const updateOrder = (id, data) => {
    const dt = {
        status: data
    }
    return Order.update(dt, {
        where: {
            id
        }
    })
}

const searchEmail = (email) => {
    return Order.findOne({
        where: { email }
    })
}

const allOrder = () => {
    return Order.findAll({
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
    Order.destroy(id)
}

module.exports = { createOrder, updateOrder, searchEmail, allOrder, hapus }