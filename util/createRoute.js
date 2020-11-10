let cr = function(router,controller){
    router.param("id",controller.params)

    router.route("/")
    .get(controller.get)
    .post(controller.post)

    router.route("/:id")
    .get(controller.getOne)
    .put(controller.put)
    .delete(controller.delete)
}

module.exports = cr;