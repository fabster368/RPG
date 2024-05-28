class Player {
    constructor (name, sprite, hp, att, def, items,) {
        this.name = name;
        this.hp = hp;
        this.att = att;
        this.def = def;
        this.items = items;
        this.sprite = sprite;
    }
    equip(item) {
        this.items.push(item.name);
        this.att += item.att;
        this.def += item.def;
    }
    damage(enemy) {
        enemy.hp -= this.att - enemy.def;
    };
    showStats() {
        console.log(`Stats: hp ${this.hp} att ${this.att} def ${this.def}`);
    }

};


class Enemy {
    constructor (name, sprite, hp, att, def) {
        this.name = name;
        this.hp = hp;
        this.att = att;
        this.def = def;
        this.sprite = sprite;
    }
    damage(player) {
        player.hp -= this.att - player.def;
    };
};


class Item {
    constructor(name, sprite, hp, att, def, ){
        this.name = name;
        this.hp = hp;
        this.att = att;
        this.def = def;
        this.sprite = sprite;
    };
};

       


export {Player,Enemy,Item};



