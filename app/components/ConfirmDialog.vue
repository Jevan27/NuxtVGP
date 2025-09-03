<!-- components/ConfirmDialog.vue -->
<template>
	<v-dialog
		v-model="isOpen"
		max-width="400"
		transition="dialog-transition"
		persistent
		scrim="rgba(30, 30, 30, 0.75)"
	>
		<v-card color="#1e1e1e" class="rounded-2xl text-white shadow-xl p-4">
			<v-card-title class="text-lg font-semibold tracking-wide">
				{{ title }}
			</v-card-title>

			<v-card-text class="text-gray-300 text-sm leading-relaxed">
				{{ message }}
			</v-card-text>

			<v-card-actions class="justify-end gap-2">
				<v-btn variant="text" class="text-gray-300 hover:text-white" @click="close">Cancel</v-btn>

				<v-btn
					color="red"
					variant="flat"
					class="rounded-xl px-4 font-medium shadow-md"
					@click="confirm"
				>
					<v-icon start>mdi-delete</v-icon>
					Delete
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
	modelValue: boolean
	title: string
	message: string
}>()

const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void
	(e: 'confirm'): void
}>()

const isOpen = ref(props.modelValue)

watch(
	() => props.modelValue,
	(val) => {
		isOpen.value = val
	},
)

function close() {
	isOpen.value = false
	emit('update:modelValue', false)
}

function confirm() {
	emit('confirm')
	close()
}
</script>

<style scoped>
.dialog-transition-enter-active,
.dialog-transition-leave-active {
	transition: all 0.25s ease;
}
.dialog-transition-enter-from,
.dialog-transition-leave-to {
	opacity: 0;
	transform: scale(0.95);
}
</style>
