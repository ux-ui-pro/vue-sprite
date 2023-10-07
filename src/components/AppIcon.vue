<script>
import { ref, onMounted, computed } from 'vue';

const spriteAdded = ref(false);

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
		const app = ref(null);
		const sprite = ref(null);
		const data = ref(null);
		const iconName = ref(props.name);
		const isLocalStorage = typeof window.localStorage !== 'undefined';

		const insert = (svgData) => {
			if (!spriteAdded.value) {
				app.value.insertAdjacentHTML('beforeend', svgData);

				spriteAdded.value = true;
			}
		};

		const loadData = async (file) => {
			if (isLocalStorage) {
				const storedSize = localStorage.getItem('inlineSVGSize');
				const storedData = localStorage.getItem('inlineSVGData');
				const response = await fetch(file);
				const responseData = await response.text();

				if (storedSize && storedSize === responseData.length.toString()) {
					data.value = storedData;
				} else {
					data.value = responseData;

					localStorage.setItem('inlineSVGData', responseData);
					localStorage.setItem('inlineSVGSize', responseData.length.toString());
				}
			} else {
				const response = await fetch(file);

				data.value = await response.text();
			}

			insert(data.value);
		};

		onMounted(() => {
			app.value = document.getElementById('app');
			sprite.value = document.getElementById('sprite');

			loadData(props.file);
		});

		return {
			iconName: computed(() => iconName.value),
		};
	},
};
</script>

<template>
	<svg class="svg-icon">
		<use :xlink:href="`#${ iconName }`"></use>
	</svg>
</template>
