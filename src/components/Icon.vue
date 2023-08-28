<script>
import { ref } from 'vue'

export default {
	name: 'Icon',
	props: {
		id: {
			type: String,
			required: true
		}
	},
	setup(props) {
		const id = ref(props.id)
		const isLocalStorage = typeof window.localStorage !== 'undefined'
		const body = document.body

		const insert = (data) => {
			if (!document.getElementById('iconset')) {
				if (body) {
					body.insertAdjacentHTML('beforeend', data)
				} else {
					document.addEventListener('DOMContentLoaded', () => {
						body.insertAdjacentHTML('beforeend', data)
					})
				}
			}
		}

		const init = async (file) => {
			if (isLocalStorage) {
				const storedSize = localStorage.getItem('inlineSVGsize')
				const storedData = localStorage.getItem('inlineSVGdata')
				const response = await fetch(file)

				if (!response.ok) throw new Error('Network response was not ok')

				const data = await response.text()

				if (storedSize && storedSize === data.length.toString()) {
					insert(storedData)
				} else {
					insert(data)

					localStorage.setItem('inlineSVGdata', data)
					localStorage.setItem('inlineSVGsize', data.length.toString())
				}
			} else {
				const response = await fetch(file)

				if (!response.ok) throw new Error('Network response was not ok')

				const data = await response.text()

				insert(data)
			}
		}

		init('./icons.svg').then()

		return {
			id
		}
	}
}
</script>

<template>
	<svg class="svg-icon">
		<use :xlink:href="`#${ id }`"></use>
	</svg>
</template>

<style lang="scss" scoped>

</style>