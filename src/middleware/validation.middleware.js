const validateAddOrUpdateTask = (req, res, next) => {
    const {title, description, completed} = req.body;

    if(!title || !description) {
        return res.status(400).json({
            error: "Title, Description are required fields."
        });
    }

    if(typeof completed !== "boolean") {
        return res.status(400).json({
            error: "completed is boolean"
        })
    }

    next();
}

const validateId = (req, res, next) => {
    const {id} = Number(req.params.id)
    if(isNaN(id)) {
        return res.status(404).json({
            error: "Invalid id"
        })
    }
    next()
}

module.exports = {
    validateAddOrUpdateTask
}
