import { storageService } from './async-storage.service.js'

export const toyService = {
    query,
    save,
    remove,
    getById,
}

const STORAGE_KEY = 'toy'
const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]
const defultToys = [
    {
        "_id": "t101",
        "name": "Talking Doll",
        "price": 123,
        "labels": ["Doll", "Battery Powered", "Baby"],
        "createdAt": 1631031801011,
        "inStock": true
    },
    {
        "_id": "t102",
        "name": "Talking Robot",
        "price": 20,
        "labels": ["Robot", "Battery Powered"],
        "createdAt": 1631031801011,
        "inStock": true
    },
    {
        "_id": "t103",
        "name": "Talking Animal",
        "price": 100,
        "labels": ["Animal", "Battery Powered"],
        "createdAt": 1631031801011,
        "inStock": false
    }
]

function query(filterBy) {
    return storageService.query(STORAGE_KEY).then(toys => {

        if (!toys || !toys.length) {
            storageService.postMany(STORAGE_KEY, defultToys)
            toys = defultToys
        }
        if (filterBy) {
            const { name, minPrice } = filterBy
            if (name) {
                const regex = new RegExp(name, 'i')
                toys = toys.filter(toy => regex.test(toy.name))
            }

            if (minPrice) {
                toys = toys.filter(toy => toy.price >= minPrice)
            }
        }

        return toys
    })
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        toy.createdAt = Date.now()
        toy.inStock = true
        toy.labels = ["Doll", "Battery Powered", "Baby"]
        return storageService.post(STORAGE_KEY, toy)
    }
}