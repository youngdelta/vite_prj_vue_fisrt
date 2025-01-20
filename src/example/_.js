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
