import ytRepository from "./ytRepository";

const repositories = {
    yt: ytRepository
}

export const RepositoryFactory = {
    get: name => repositories[name]
}