import { defineStore } from 'pinia'

export default defineStore('user', {
    state: () => {
        return {
            name: '张三',
            age: 20
        }
    },
    actions: {
        updateName(name) {
            this.name = name
        },
        updateAge(age) {
            this.age = age
        }
    }
})
