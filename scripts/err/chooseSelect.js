export default class ChooseSelect extends Error{
    constructor(message) {
        super(message);
        this.name = 'Error, not choose selected'
    }
}