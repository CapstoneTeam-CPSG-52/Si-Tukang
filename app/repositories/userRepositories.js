const { Users } = require('../../models')
const createUsers = (data) => {
    return Users.create(data)
}

const updateUsers = (id, name, email, password, address, phone) => {
    const query = {
        where: { id }
    }

    Users.update({
        name, email, password, address, phone
    }, query)
        .then(() => {
            console.log("Users berhasil diupdate")
            process.exit()
        })
        .catch(err => {
            console.error("Gagal mengupdate!")
        })
}

const searchEmail = (email) => {
    return Users.findOne({
        where: { email }
    })
}

const allUsers = () => {
    return Users.findAll()
}

const hapus = (id) => {
    Users.destroy(id)
}

module.exports = { createUsers, updateUsers, searchEmail, allUsers, hapus }