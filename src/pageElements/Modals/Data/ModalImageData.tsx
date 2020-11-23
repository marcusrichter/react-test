export class ModalImageData {
    public image: string = '';
    public title: string = '';
    public description: string = '';

    constructor(image: string, title: string, description: string) {
        this.image = image;
        this.title = title;
        this.description = description;
    }
}
