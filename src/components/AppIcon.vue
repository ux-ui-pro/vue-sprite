<script>
import { ref, computed, onMounted } from 'vue';

export default {
	name: 'AppIcon',
	props: {
		name: {
			type: String,
			required: true,
		},
		file: {
			type: String,
			default: './sprite.svg',
		},
	},
	setup(props) {
		const iconName = ref(props.name);
		const isLocalStorage = typeof window.localStorage !== 'undefined';
		const app = ref(null);
		const set = ref(null);
		const data = ref(null);

		const insert = (svgData) => {
			if (!set.value) {
				app.value.insertAdjacentHTML('beforeend', svgData);
			}
		};

		const loadData = async (file) => {
			if (isLocalStorage) {
				const storedSize = localStorage.getItem('inlineSVGsize');
				const storedData = localStorage.getItem('inlineSVGdata');
				const response = await fetch(file);
				const responseData = await response.text();

				if (storedSize && storedSize === responseData.length.toString()) {
					data.value = storedData;
				} else {
					data.value = responseData;

					localStorage.setItem('inlineSVGdata', responseData);
					localStorage.setItem('inlineSVGsize', responseData.length.toString());
				}
			} else {
				const response = await fetch(file);
				data.value = await response.text();
			}

			insert(data.value);
		};

		onMounted(() => {
			app.value = document.getElementById('app');
			set.value = document.getElementById('sprite');

			loadData(props.file);
		});

		return {
			id: computed(() => iconName.value),
		};
	},
};
</script>

<template>
	<svg class="svg-icon">
		<use :xlink:href="`#${ id }`"></use>
	</svg>
</template>
