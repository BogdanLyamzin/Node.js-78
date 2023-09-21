const createUser = (name, lastName) => {
    return {
        name,
        lastName,
        fullName: `${name} ${lastName}`
    }
}

export default createUser;