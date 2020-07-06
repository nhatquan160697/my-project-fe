<template>
    <div>
        <section class="resume-section" id="experience">
            <div class="resume-section-content">
                <h2 class="mb-5">{{ $t('experience.title') }}</h2>
                <div v-for="(job, i) in $t('experience.jobs.rangeTime')" v-bind:key="job"
                    class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">{{ $t(`experience.jobs.title.${i}`) }}</h3>
                        <div class="subheading mb-3">{{ $t(`experience.jobs.company.${i}`) }}</div>
                        <p>{{ $t(`experience.jobs.detail.${i}`) }}</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">{{ $t(`experience.jobs.rangeTime.${i}`) }}</span></div>
                </div>
            </div>
        </section>
        <hr class="m-0" />
    </div>
</template>

<script>
export default {
	name: 'Experience'
}
</script>

<style>
</style>
