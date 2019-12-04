class Command {

    // add new item to the inventory
    _add(item, id) {
        return 'You have successfully added ' + item + ' with ID: ' + id;
    }
    // remove an item from the inventory
    _remove(item, id) {
        return 'You have successfully removed ' + item + ' with ID: ' + id;
    }
    // check for item
    _check(item, id) {
        return 'You have selected ' + item + ' with ID: ' + id;
    }

    exec(fnName) {
        return this[`_${fnName}`] && this[`_${fnName}`].apply(this, [].slice.call(arguments, 1))
    }
}

const command = new Command()

command.exec('add', 'item', 'id')
command.exec('remove', 'item', 'id')
command.exec('check', 'item', 'id')