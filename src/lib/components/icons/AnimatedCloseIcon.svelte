<script lang="ts">
	export let expanded: boolean = false;
</script>

<div class="menu-icon" id="menu-icon" class:open={expanded} style="--size : 20px">
	<div class="menu-line line1"></div>
	<div class="menu-line line2"></div>
</div>

<style>
	.menu-icon {
		position: relative;
		width: var(--size);
		height: calc(var(--size) * 0.75);
		cursor: pointer;
		transition: transform 0.3s ease;
	}

	.menu-line {
		position: absolute;
		width: 100%;
		height: calc(var(--size) * 0.1);
		background-color: #fff;
		left: 50%;
		transform: translateX(-50%);
		transition:
			transform 0.3s ease,
			top 0.3s ease,
			background-color 0.3s ease;
	}

	.line1 {
		top: calc(var(--size) * 0.33);
	}

	.line2 {
		top: calc(var(--size) * 0.66);
	}

	.menu-icon.open .line1 {
		transform: translateX(-50%) rotate(45deg);
		top: calc(var(--size) * 0.375);
	}

	.menu-icon.open .line2 {
		transform: translateX(-50%) rotate(-45deg);
		top: calc(var(--size) * 0.375);
	}
</style>
