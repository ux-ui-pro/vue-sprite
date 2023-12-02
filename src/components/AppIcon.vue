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
			default: '/sprite.svg',
		},
	},
	setup(props) {
		const app = ref(null);
		const data = ref(null);

		const isLocalStorage = typeof window.localStorage !== 'undefined';

		const insert = (svgData) => {
			const hasSpriteId = /id="sprite"/.test(svgData);

			if (!spriteAdded.value && hasSpriteId) {
				app.value.insertAdjacentHTML('beforeend', svgData);

				spriteAdded.value = true;
			}
		};

		const checkSVGFileMIME = async (file) => {
			const headResponse = await fetch(file, { method: 'HEAD' });
			const contentType = headResponse.headers.get('content-type');

			return contentType === 'image/svg+xml';
		};

		const loadData = async (file) => {
			const fileResponse = await fetch(file);
			const fileData = await fileResponse.text();
			const fileSize = fileData.length;

			const setSprite = async () => {
				data.value = fileData;

				if ((await checkSVGFileMIME(file))) {
					localStorage.setItem('inlineSVGData', fileData);
					localStorage.setItem('inlineSVGSize', fileSize.toString());
				}
			};

			if (isLocalStorage) {
				const storedSize = localStorage.getItem('inlineSVGSize');
				const storedData = localStorage.getItem('inlineSVGData');

				if (storedSize && storedData) {
					if (storedSize !== fileSize.toString()) {
						await setSprite();
					} else {
						data.value = storedData;
					}
				} else {
					await setSprite();
				}
			} else {
				data.value = fileData;
			}

			insert(data.value);
		};

		onMounted(() => {
			app.value = document.getElementById('app');

			loadData(props.file);
		});

		const iconName = computed(() => props.name);

		return {
			iconName,
		};
	},
};
</script>

<template>
	<svg class="svg-icon">
		<use :href="`#${ iconName }`"></use>
	</svg>
</template>
