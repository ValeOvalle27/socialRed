class PostManager {
    constructor() {
        if (PostManager.instance) {
            return PostManager.instance
        }

        this.observers = []
        PostManager.instance = this
    }

    subscribe(observer) {
        this.observers.push(observer)

        return () => {
            this.observers  = this.observers.filter(obs => obs !== observer)
        }
    }

    notify() {
        this.observers.forEach(observer => observer())
    }

    createPost() {
        this.notify
    }
}

export const postManager = new PostManager()