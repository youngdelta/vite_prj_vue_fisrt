console.log(1);
/**
 *
 */
const users = [
	{ id: 1, name: 'ID', age: 36 },
	{ id: 2, name: 'BJ', age: 32 },
	{ id: 3, name: 'JM', age: 32 },
	{ id: 4, name: 'PJ', age: 27 },
	{ id: 5, name: 'HA', age: 25 },
	{ id: 6, name: 'JE', age: 26 },
	{ id: 7, name: 'JI', age: 31 },
	{ id: 8, name: 'MP', age: 23 },
];

const _curry =
	(fn) =>
	(...args) =>
		args.length === 2 ? fn(args[0], args[1]) : (b) => fn(args[0], b);

const each = (list, iter) => {
	for (let i = 0; i < list.length; i++) {
		iter(list[i]);
	}
	return list;
};

/**
 *
 * @param {*} iter
 * @param {*} predi
 * @returns
 */
const filter = (iter, predi) => {
	const new_list = [];

	each(iter, (val) => predi(val) && new_list.push(val));

	return new_list;
};

/**
 *
 * @param {*} list
 * @param {*} mapper
 * @returns
 */
const map = (list, mapper) => {
	const new_lsit = [];
	each(list, (val) => new_lsit.push(mapper(val)));

	return new_lsit;
};

const temp_users = [];
// 30세 이상
for (let i = 0; i < users.length; i++) {
	if (users[i].age >= 30) {
		temp_users.push(users[i].name);
	}
}

console.log(temp_users);

console.log(filter(users, (u) => u.age >= 30));

const add = (a, b) => a + b;
console.log(add(10, 5));

const add2 = _curry(add);

const add10 = add2(10);
console.log(add10(5)); //15
console.log(add2(5)(3)); //8
