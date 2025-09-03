<!-- components/YearFilter.vue -->
<template>
	<div class="w-40">
		<v-select
			v-model="internalYear"
			:items="years"
			label="Filter by Year"
			variant="outlined"
			density="comfortable"
			clearable
			class="custom-select text-sm"
			@update:model-value="emitYear"
		/>
	</div>
</template>

<script lang="ts" setup>
import { type PropType, ref, watch } from 'vue'

const props = defineProps({
	years: {
		type: Array as PropType<number[]>,
		required: true,
	},
	modelValue: {
		type: Number as PropType<number | null>,
		default: null,
	},
})

const emit = defineEmits<{
	(e: 'update:modelValue', value: number | null): void
}>()

const internalYear = ref<number | null>(props.modelValue)

// ✅ Keep sync with parent
watch(
	() => props.modelValue,
	(val) => {
		internalYear.value = val
	},
)

function emitYear(val: number | null) {
	emit('update:modelValue', val)
}
</script>
