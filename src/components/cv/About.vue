<template>
    <div>
        <section class="resume-section" id="about">
            <div class="resume-section-content">
                <h1 class="mb-0">{{ $t('personalInfor.lastName') }}<span class="text-primary">{{ $t('personalInfor.firstName') }}</span></h1>
                <div class="subheading mb-5">{{ $t('personalInfor.address') }}·
                    <a href="mailto:name@email.com">{{ $t('personalInfor.email') }}</a>
                </div>
                <p class="lead mb-5">
                    {{ $t('personalInfor.about') }}
                </p>
                <div class="social-icons">
                    <a class="social-icon" href="#"><i class="fa fa-linkedin"></i></a><a class="social-icon" href="#"><i class="fa fa-github"></i></a><a class="social-icon" href="#"><i class="fa fa-twitter"></i></a><a class="social-icon" href="#"><i class="fa fa-facebook-f"></i></a>
                </div>
            </div>
        </section>
        <hr class="m-0" />
    </div>
</template>

<script>
export default {
	name: 'About'
}
</script>

<style>

</style>
