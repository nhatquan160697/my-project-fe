<template>
  <div>
    <section class="resume-section" id="education">
        <div class="resume-section-content">
            <h2 class="mb-5">{{ $t('education.title') }}</h2>
            <div v-for="(edu, i) in $t('education.schools')" v-bind:key="edu"
                class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h3 class="mb-0">{{ $t(`education.schools.${i}`) }}</h3>
                    <div class="subheading mb-3">{{ $t(`education.majors.${i}`) }}</div>
                    <div>{{ $t(`education.discriptions.${i}`) }}</div>
                    <p>{{ $t(`education.ranks.${i}`) }}</p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">{{ $t(`education.rangeTimes.${i}`) }}</span></div>
            </div>
        </div>
    </section>
    <hr class="m-0" />
	</div>
</template>

<script>
export default {
	name: 'Education'
}
</script>

<style>
</style>
