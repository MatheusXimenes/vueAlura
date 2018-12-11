export default class ImageService {

    constructor(resource) {
        this._resource = resource('v1/fotos{/id}');
    }

    list() {
        return this._resource
            .query()
            .then(res => res.json());

    }

    save(image) {
        return this._resource
            .save(image);
    }

    remove(id) {
        return this._resource
            .delete({ id: id });
    }
}