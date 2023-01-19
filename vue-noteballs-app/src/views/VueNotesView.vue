<script setup></script>

<template>
	<div class="notes">
		<div class="card has-background-success-dark p-4 mb-5">
			<div class="field">
				<div class="control">
					<textarea
						class="textarea"
						placeholder="Add a new note"
					></textarea>
				</div>
			</div>
			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<button class="button is-link has-background-success">
						Add New Note
					</button>
				</div>
			</div>
		</div>

		<div class="card mb-4">
			<div class="card-content">
				<div class="content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Numquam veritatis doloremque, adipisci excepturi nostrum
					omnis maxime quos dolorem facere, magnam totam, rem quia
					error ad cumque vitae est. Tempora, nesciunt?
				</div>
			</div>
			<footer class="card-footer">
				<a href="#" class="card-footer-item">Edit</a>
				<a href="#" class="card-footer-item">Delete</a>
			</footer>
		</div>
	</div>
</template>
