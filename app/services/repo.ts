import Service from '@ember/service';

export type Todo = {
	id: number;
	title: string;
	completed: boolean;
};

export default class Repo extends Service {
	lastId = 0;
	data!: Todo[];

	findAll() {
		return this.data ||
			this.set('data', JSON.parse(window.localStorage.getItem('todos') || '[]'));
	}

	add({ title, completed }: Pick<Todo, 'title' | 'completed'>) {
		let todo = { title, completed, id: this.lastId++ };
				this.data.pushObject(todo);
		this.persist();
		return todo;
	}

	delete(todo: Todo) {
		this.data.removeObject(todo);
		this.persist();
	}

	persist() {
		window.localStorage.setItem('todos', JSON.stringify(this.data));
	}
}
