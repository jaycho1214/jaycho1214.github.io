class NavStore {
	opened = $state(false);

	toggle() {
		this.opened = !this.opened;
	}

	close() {
		this.opened = false;
	}
}

export const navStore = new NavStore();
